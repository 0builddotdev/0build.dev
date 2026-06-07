// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { visit } from "unist-util-visit";
import { unified } from "@astrojs/markdown-remark";

import { visit, SKIP } from "unist-util-visit"; // add SKIP to your import

function plugin() {
  const classMap = {
    a: "z-link",
    h1: "z-h1",
    h2: "z-h2 mt",
    h3: "z-h3 mt",
    h4: "z-h4 mt",
    p: "z-paragraph",
    table: "z-table z-table-divider z-table-responsive mt",
    ul: "z-list z-list-hyphen mt",
    ol: "z-list z-list-decimal mt",
    hr: "z-hr mt",
  };

  const stylesMap = {
    h2: { "--mt": "10" },
    h3: { "--mt": "10" },
    h4: { "--mt": "10" },
    table: { "--mt": "10" },
    ul: { "--mt": "6" },
    ol: { "--mt": "6" },
    hr: { "--mt": "10" },
  };

  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      const { tagName, properties = {} } = node;

      // Handle inline code separately
      if (tagName === "code") {
        const isInlineCode = parent?.tagName !== "pre";
        const isInHeading = /^h[1-6]$/.test(parent?.tagName || "");

        if (isInlineCode && !isInHeading) {
          properties.className = [
            "z-codespan",
            ...(properties.className || []),
          ];
          node.properties = properties;
        }

        return;
      }

      // Wrap fenced code blocks in a styled container div
      if (tagName === "pre") {
        const wrapper = {
          type: "element",
          tagName: "div",
          properties: {
            className: [
              "ec",
              "mt",
              "bg",
              "color",
              "z-shadow",
              "z-rounded",
              "border-w",
              "border",
            ],
            style:
              "--mt: 6; --bg: #17191e; --color: #ffffff; --border-w: 1px; --border: #858b9833",
          },
          children: [node],
        };
        parent.children.splice(index, 1, wrapper);
        return SKIP;
      }

      // Apply mapped classes
      if (classMap[tagName]) {
        properties.className = [
          ...(properties.className || []),
          classMap[tagName],
        ];
      }

      // Apply mapped styles
      if (stylesMap[tagName]) {
        properties.style = {
          ...(properties.style || {}),
          ...stylesMap[tagName],
        };
      }

      // Add data-z-scroll to anchor links with hash
      if (tagName === "a" && properties.href?.startsWith("#")) {
        properties["data-z-scroll"] = "offset: 40";
      }

      node.properties = properties;
    });
  };
}

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  compressHTML: true,
  integrations: [mdx()],
  markdown: {
    processor: unified({
      rehypePlugins: [plugin],
    }),
  },
});
