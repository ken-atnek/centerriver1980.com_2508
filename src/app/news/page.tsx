/* =======================================
 *センターリバー   お知らせ
 * URL:src/app/news/page.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import { newsData } from '@/data/newsData';
import Link from 'next/link';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/PageNews.module.scss';

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
