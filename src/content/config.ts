import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(100).max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['ecu-tuning', 'cybersecurity', 'obd2-diagnostics']),
    lang: z.enum(['es', 'en']),
    translationSlug: z.string(),
    coverImage: z.string(),
    readingTime: z.string().default('5 min'),
  }),
});

export const collections = { blog };