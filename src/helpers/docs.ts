export type Group = {
  href: string;
  text: string;
  keywords: string | undefined;
  dot: boolean | undefined;
  submenu:
    | {
        href: string;
        text: string;
        target?: "_self" | "_blank" | "_parent" | "_top" | undefined;
      }[]
    | undefined;
  order: number | undefined;
};

type Heading = {
  depth: number;
  slug: string;
  text: string;
  children?: Heading[];
};

export function transformHeadings(headings: Heading[]): Heading[] {
  const result: Heading[] = [];
  const stack: Heading[] = [];

  for (const heading of headings) {
    const current = { ...heading };

    // Remove all items from stack that have greater or equal depth
    while (stack.length > 0 && stack[stack.length - 1].depth >= current.depth) {
      stack.pop();
    }

    if (stack.length === 0) {
      // This is a top-level heading
      result.push(current);
      stack.push(current);
    } else {
      // This is a child heading
      const parent = stack[stack.length - 1];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(current);
      stack.push(current);
    }
  }

  return result;
}

export function transformTitles(string: string) {
  const wordReplacements: Record<string, string> = {
    and: "&",
    svg: "SVG",
  };
  const words = string.split("-");

  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();

      if (lowerWord in wordReplacements) {
        if (index === 0 || index === words.length - 1) {
          const replacement = wordReplacements[lowerWord];

          return replacement === replacement.toUpperCase()
            ? replacement
            : replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        return wordReplacements[lowerWord];
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export function titleCase(string: string) {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export type Kit = {
  "getting-started": Group[];
  forms: Group[];
  components: Group[];
};

export type Style = {
  "getting-started": Group[];
  layout: Group[];
  "flex-and-grid": Group[];
  spacing: Group[];
  sizing: Group[];
  typography: Group[];
  backgrounds: Group[];
  borders: Group[];
  effects: Group[];
  filters: Group[];
  tables: Group[];
  "transitions-and-animations": Group[];
  transforms: Group[];
  interactivity: Group[];
  svg: Group[];
  accessibility: Group[];
};
