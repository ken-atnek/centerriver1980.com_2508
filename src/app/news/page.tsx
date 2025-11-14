/* =======================================
 *センターリバー   お知らせ
 * URL:src/app/news/page.tsx
 * Created: 2025-07-22
 * Last updated: 2025-11-13
 * ======================================= */
import type { Metadata } from 'next';
import PageHead from '@/components/common/PageHead';
import NewsListClient from '@/components/news/NewsListClient';

export const generateMetadata = (): Metadata => {
  return {
    title: 'お知らせ｜センターリバー',
    description:
      'センターリバーからのお知らせ・最新情報を掲載しています。キャンペーンや新店舗情報、営業時間変更などの最新ニュースをご確認いただけます。',
  };
};

export default function NewsListPage() {
  return (
    <>
      <PageHead title="お知らせ一覧" />
      <NewsListClient />
    </>
  );
}
