import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://autocyberlab.com';
  const posts = await getCollection('blog');

  const staticPages = [
    '/es/',
    '/en/',
    '/es/category/ecu-tuning/',
    '/es/category/cybersecurity/',
    '/es/category/obd2-diagnostics/',
    '/en/category/ecu-tuning/',
    '/en/category/cybersecurity/',
    '/en/category/obd2-diagnostics/',
    '/es/about/',
    '/en/about/',
    '/es/contact/',
    '/en/contact/',
    '/es/privacy/',
    '/en/privacy/',
  ];

  const today = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/es/' || path === '/en/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${posts
    .map((post) => {
      const slugClean = post.slug.replace(/^(es|en)\//, '');
      return `
  <url>
    <loc>${siteUrl}/${post.data.lang}/${slugClean}/</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
