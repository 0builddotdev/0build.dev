import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const docs = {
  project: z.enum(["kit", "style"]).default("style"),
  group: z.string(),
  order: z.number().optional(),
  context: z.string().optional(),
  text: z.string(),
  title: z.string(),
  lead: z.string().optional(),
  wip: z.boolean().optional(),
  meta: z.record(z.string()).optional(),
  dot: z.boolean().optional(),
  tbc: z.boolean().default(true),
  keywords: z.string().optional(),
  hidden: z.boolean().optional(),
  alias: z.string().optional(),
  breadcrumb: z
    .array(
      z.object({
        text: z.string(),
        id: z.string(),
      }),
    )
    .optional(),
};

const latest = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs/latest" }),
  schema: z.object(docs),
});

export const collections = {
  latest: latest,
};
