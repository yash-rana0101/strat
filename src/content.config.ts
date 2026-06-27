import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Trading & Research Wing'),
    category: z.enum([
      'AI & Machine Learning',
      'Market Research',
      'Product Updates',
      'Trading Insights',
      'Engineering',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['Getting Started', 'Core Concepts', 'Integration Resources']),
    order: z.number().default(0),
    badge: z.string().optional(),
    badgeVariant: z.enum(['emerald', 'violet', 'orange', 'default']).default('default'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  docs: docsCollection,
};
