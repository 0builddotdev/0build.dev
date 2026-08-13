import { rules, cc, vd } from './rules';
import meta from './meta';

export function checkMeta() {
  console.log('🔍 Starting rules-meta.ts sanity check...\n');

  const metaItems = new Map<string, { type: string; group: string }>();
  const duplicates: string[] = [];

  for (const [groupName, groupData] of Object.entries(meta)) {
    for (const item of groupData.items) {
      if (metaItems.has(item.name)) {
        duplicates.push(`[${item.name}] (found in ${groupName})`);
      } else {
        metaItems.set(item.name, { type: item.type, group: groupName });
      }
    }
  }

  const allExpectedSelectors = new Set<string>();
  rules.forEach(rule => allExpectedSelectors.add(rule.selector));

  const hardcodedCC = Array.from(cc).filter(name => !rules.some(r => r.selector === name));
  const hardcodedVD = Array.from(vd).filter(name => {
    return !rules.some(r => r.selector === name || (r.dark && `dark:${r.selector}` === name));
  });

  hardcodedCC.forEach(name => allExpectedSelectors.add(name));
  hardcodedVD.forEach(name => allExpectedSelectors.add(name));

  const missingInMeta: any[] = [];
  const orphansInMeta: string[] = [];
  const typeMismatches: string[] = [];

  for (const expectedName of allExpectedSelectors) {
    if (!metaItems.has(expectedName)) {
      const ruleMatch = rules.find(r => r.selector === expectedName);
      const isCC = cc.has(expectedName);
      const isVD = vd.has(expectedName);

      missingInMeta.push({
        name: expectedName,
        type: isCC ? 'cc' : isVD ? 'vd' : 'unknown',
        ruleDefinition: ruleMatch || 'Hardcoded Exception',
      });
    }
  }

  for (const [name, metaItem] of metaItems.entries()) {
    const isExpected = allExpectedSelectors.has(name);
    if (!isExpected) {
      orphansInMeta.push(`[${name}] in group '${metaItem.group}'`);
      continue;
    }

    if (metaItem.type === 'vd' && !vd.has(name)) {
      typeMismatches.push(`[${name}] Meta says type 'vd', but missing from 'vd' Set.`);
    } else if (metaItem.type === 'cc' && !cc.has(name)) {
      typeMismatches.push(`[${name}] Meta says type 'cc', but missing from 'cc' Set.`);
    }
  }

  if (duplicates.length > 0) {
    console.warn('⚠️ DUPLICATES IN META:', duplicates);
  }
  if (orphansInMeta.length > 0) {
    console.error('❌ ORPHANS IN META:', orphansInMeta);
  }
  if (typeMismatches.length > 0) {
    console.error('❌ TYPE MISMATCHES:', typeMismatches);
  }

  // Generate the AI Prompts
  if (missingInMeta.length > 0) {
    const CHUNK_SIZE = 50;
    const totalBatches = Math.ceil(missingInMeta.length / CHUNK_SIZE);

    console.log('\n======================================================');
    console.log('📋 STEP 1: COPY THESE INSTRUCTIONS TO THE AI FIRST');
    console.log('======================================================\n');

    console.log(`I have a list of CSS utility rules extracted from my \`rules.ts\` that are currently missing from my \`rules-meta.ts\` file. I will send them to you in ${totalBatches} batches. Please generate the missing meta objects for me as I send them.

### Instructions:
1. **Group them accurately:** Assign each rule to one of these existing groups based on what CSS properties they affect: \`layout\`, \`spacing\`, \`sizing\`, \`flexbox\`, \`backgrounds\`, \`typography\`, \`borders\`, \`effects\`, \`filters\`, \`transitions\`, \`transforms\`, \`display\`, \`interactivity\`, \`svg\`, \`tables\`.
2. **Format:** Output the results grouped by their category. Ensure each item has \`type\` (vd or cc), \`name\`, \`description\`, and \`keywords\`. If applicable, include \`accepts\`.
3. **Opacity Modifiers (\`/o\`):** Selectors ending in \`/o\` require two vars (base and opacity). Format them like this:
   \`\`\`json
   {
     "type": "vd",
     "name": "example/o",
     "accepts": "numeric",
     "unit": "%",
     "min": 0,
     "max": 100,
     "step": 1,
     "description": "Sets example color + opacity independently via variables.",
     "keywords": ["..."]
   }
   \`\`\`
4. **Bracketed Arbitrary Classes:** Selectors surrounded by brackets (e.g., \`[gap]\`, \`[space-x]\`) map to CSS variables natively without values (e.g., \`.[gap] { gap: var(--gap) }\`). Be sure to note in the description that it applies a CSS variable directly.
5. Provide the output as standard JavaScript/TypeScript objects ready to be pasted into \`rules-meta.ts\`.

If you understand, reply with "Ready for Batch 1!" and I will paste the first JSON array.`);

    console.log('\n======================================================');
    console.log('📋 STEP 2: COPY THE BATCHES BELOW ONE BY ONE');
    console.log('======================================================\n');

    for (let i = 0; i < missingInMeta.length; i += CHUNK_SIZE) {
      const batchNum = Math.floor(i / CHUNK_SIZE) + 1;
      const chunk = missingInMeta.slice(i, i + CHUNK_SIZE);

      console.log(
        `\n\n--- BATCH ${batchNum} OF ${totalBatches} ----------------------------------\n`,
      );
      console.log(`Here is Batch ${batchNum}:\n`);
      console.log('```json');
      console.log(JSON.stringify(chunk, null, 2));
      console.log('```');
    }

    console.log('\n======================================================');
    console.log(`✅ All ${totalBatches} JSON batches generated.`);
    console.log('======================================================\n');
  } else if (orphansInMeta.length === 0 && typeMismatches.length === 0 && duplicates.length === 0) {
    console.log('✅ All good! `rules-meta.ts` is perfectly synced with `rules.ts`.');
  }
}

checkMeta();
