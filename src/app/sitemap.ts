import type { MetadataRoute } from 'next';
import { buildCanonicalUrl, isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/concept/',
  '/products/',
  '/takeout/',
  '/news/',
  '/company/',
  '/policy/',
  '/kiyaku/',
  '/tokutei/',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  const lastModified = new Date();

  return routes.map((route) => ({
    url: buildCanonicalUrl(route),
    lastModified,
  }));
}
