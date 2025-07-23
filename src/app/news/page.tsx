/* =======================================
 *センターリバー   お知らせ
 * URL:src/app/news/page.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import type { Metadata } from 'next';
import { newsData } from '@/data/newsData';
import Link from 'next/link';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/PageNews.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: 'お知らせ｜センターリバー',
    description:
      'センターリバーからのお知らせ・最新情報を掲載しています。キャンペーンや新店舗情報、営業時間変更などの最新ニュースをご確認いただけます。',
  };
};

export default function NewsListPage() {
  // 新しい順にソート
  const sortedNews = [...newsData].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHead title="お知らせ一覧" />
      <section className={styles.containerContents}>
        <article className={styles.blockNewsList}>
          <ul>
            {sortedNews.map((item) => (
              <li key={item.id} className={styles.newsItem}>
                <p className={styles.date}>
                  {new Date(item.date)
                    .toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })
                    .replace(/\//g, '.')}
                </p>
                <Link href={`/news/${item.id}`} className={styles.titleLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
