import { rules, cc, vd } from './rules';
import meta from './meta';

export function checkMeta() {
  console.log('🔍 Starting rules-meta.ts sanity check...\n');

  // 1. Build a flat map of meta items to check for duplicates
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

  // 2. Derive the absolute source of truth from rules.ts
  const allExpectedSelectors = new Set<string>();

  // Add all base rule selectors
  rules.forEach(rule => allExpectedSelectors.add(rule.selector));

  // Dynamically find hardcoded exceptions in `cc` and `vd` that aren't in the base rules
  const hardcodedCC = Array.from(cc).filter(name => !rules.some(r => r.selector === name));
  const hardcodedVD = Array.from(vd).filter(name => {
    // Exclude rule selectors and their generated dark variants
    return !rules.some(r => r.selector === name || (r.dark && `dark:${r.selector}` === name));
  });

  hardcodedCC.forEach(name => allExpectedSelectors.add(name));
  hardcodedVD.forEach(name => allExpectedSelectors.add(name));

  // 3. Initialize tracking arrays
  const missingInMeta: string[] = [];
  const orphansInMeta: string[] = [];
  const typeMismatches: string[] = [];

  // 4. Check for missing items (in rules but not in meta)
  for (const expectedName of allExpectedSelectors) {
    if (!metaItems.has(expectedName)) {
      missingInMeta.push(expectedName);
    }
  }

  // 5. Check for orphans and type anomalies (in meta but wrong/missing in rules)
  for (const [name, metaItem] of metaItems.entries()) {
    const isExpected = allExpectedSelectors.has(name);

    if (!isExpected) {
      orphansInMeta.push(`[${name}] in group '${metaItem.group}'`);
      continue;
    }

    // Check Type Accuracy
    if (metaItem.type === 'vd' && !vd.has(name)) {
      typeMismatches.push(
        `[${name}] Meta says type 'vd', but selector is missing from exported 'vd' Set.`,
      );
    } else if (metaItem.type === 'cc' && !cc.has(name)) {
      typeMismatches.push(
        `[${name}] Meta says type 'cc', but selector is missing from exported 'cc' Set.`,
      );
    }
  }

  // 6. Log Results
  let hasErrors = false;

  if (duplicates.length > 0) {
    hasErrors = true;
    console.warn('⚠️ DUPLICATES IN META (Defined multiple times):');
    duplicates.forEach(n => console.warn(`   - ${n}`));
    console.log('');
  }

  if (orphansInMeta.length > 0) {
    hasErrors = true;
    console.error('❌ ORPHANS IN META (Exists in meta, but missing from rules.ts):');
    orphansInMeta.forEach(n => console.error(`   - ${n}`));
    console.log('');
  }

  if (typeMismatches.length > 0) {
    hasErrors = true;
    console.error('❌ TYPE MISMATCHES (Meta type conflicts with rules.ts layer/set):');
    typeMismatches.forEach(msg => console.error(`   - ${msg}`));
    console.log('');
  }

  if (missingInMeta.length > 0) {
    hasErrors = true;
    console.warn('⚠️ MISSING FROM META (Exists in rules.ts, but missing from meta):');
    missingInMeta.forEach(n => console.warn(`   - ${n}`));
    console.log('');
  }

  if (!hasErrors) {
    console.log('✅ All good! `rules-meta.ts` is perfectly synced with `rules.ts`.');
  } else {
    console.log('🚨 Sanity check finished with issues to fix.');
  }
}

checkMeta();
