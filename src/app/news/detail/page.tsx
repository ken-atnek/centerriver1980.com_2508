/* =======================================
 *センターリバー  TOP ニュース詳細
 * URL: /news/detail?id=◯
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import { Suspense } from 'react';
import NewsDetailClient from '@/app/news/detail/NewsDetailClient';

export default function NewsDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <NewsDetailClient />
    </Suspense>
  );
}