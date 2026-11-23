import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ en: z.string(), sr: z.string() });
const localizedOrPlain = z.union([z.string(), localized]);
const localizedList = z.object({ en: z.array(z.string()), sr: z.array(z.string()) });

const apps = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    category: localized,
    platforms: z.array(z.enum(['ios', 'android', 'web', 'desktop'])).default([]),
    color: z.string().default('#15191e'),
    icon: z.string().optional(), // /images/apps/xxx_logo.png
    screenshot: z.string().optional(), // /images/apps/xxx_home.png (plain screenshot)
    cover: z.string().optional(), // /images/apps/xxx_cover.png (promo artwork)
    gallery: z.array(z.string()).default([]), // square images for the detail page carousel
    imageFit: z.enum(['cover', 'contain']).default('cover'), // detail page: crop to fill, or show whole image
    tagline: localized,
    summary: localized,
    stats: z.array(z.object({ value: localizedOrPlain, label: localized })).default([]),
    features: localizedList.optional(),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        appStore: z.string().optional(),
        googlePlay: z.string().optional(),
        website: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { apps };