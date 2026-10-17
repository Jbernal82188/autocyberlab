import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['ecu-tuning', 'cybersecurity', 'obd2-diagnostics']),
    lang: z.enum(['es', 'en']),
    translationSlug: z.string(),
    coverImage: z.string().default('https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80'),
    readingTime: z.string().default('6 min'),
  }),
});

export const collections = { blog };