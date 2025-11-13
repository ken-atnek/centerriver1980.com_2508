/* =======================================
 *センターリバー  TOP ニュース
 * URL:src/components/top/BlockNews.tsx
 * Created: 2025-07-22
 * Last updated: 2025-11-13
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';
import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/fetchNewsApi';
import { NewsItem } from '@/types/news';
import Link from 'next/link';

const BlockNews = () => {
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews(10) // より多くのデータを取得してから上位3件を選択
      .then(({ news }) => {
        // 既存処理と同様のソート・スライス処理を適用
        const sortedNews = [...news]
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .slice(0, 3);
        setLatestNews(sortedNews);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('トップニュース取得失敗:', err);
        setError('最新ニュースの取得に失敗しました');
        setIsLoading(false);
      });
  }, []);

  return (
    <article className={styles.blockNews}>
      <h3>お知らせ</h3>
      <p className={styles.sidebarH3}>INFORMATION</p>
      {isLoading ? (
        <p>読み込み中...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ul>
            {latestNews.map((item) => (
              <li key={item.id}>
                <p>{item.date.replace(/-/g, '.')}</p>
                <Link href={`/news/detail?id=${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <Link href="/news/" className={styles.itemPageLink}>
            <span>もっと見る</span>
          </Link>
        </>
      )}
    </article>
  );
};
export default BlockNews;
