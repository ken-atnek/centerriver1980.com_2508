/* =======================================
 *センターリバー   お知らせ一覧表示コンポーネント
 * URL:src/components/news/NewsListClient.tsx
 * Created: 2025-11-13
 * Last updated: 2025-11-13
 * ======================================= */
'use client';
import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/fetchNewsApi';
import { NewsItem } from '@/types/news';
import Link from 'next/link';
import styles from '@/styles/PageNews.module.scss';

export default function NewsListClient() {
  const [sortedNews, setSortedNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 全件取得してクライアント側でソート
    fetchNews(5) // 5件取得
      .then(({ news }) => {
        // 既存処理と同様のソート処理を適用
        const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
        setSortedNews(sorted);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('ニュース一覧取得失敗:', err);
        setError('ニュース一覧の取得に失敗しました');
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={styles.containerContents}>
      <article className={styles.blockNewsList}>
        {isLoading ? (
          <p>読み込み中...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
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
                <Link href={`/news/detail?id=${item.id}`} className={styles.titleLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}