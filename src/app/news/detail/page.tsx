/* =======================================
 *センターリバー  TOP ニュース詳細
 * URL: /news/detail?id=◯
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import type { Metadata } from 'next';
import { Suspense } from 'react';
import NewsDetailClient from '@/app/news/detail/NewsDetailClient';

export const metadata: Metadata = {
  title: 'お知らせ詳細',
  robots: 'noindex, nofollow',
};

export default function NewsDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <NewsDetailClient />
    </Suspense>
  );
}
