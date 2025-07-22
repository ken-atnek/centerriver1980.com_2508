/* =======================================
 *センターリバー  TOP ニュース
 * URL:src/components/top/BlockNews.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';

import { newsData } from '@/data/newsData';
import Link from 'next/link';

const latestNews = [...newsData]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 3);
const BlockNews = () => {
  return (
    <article className={styles.blockNews}>
      <h3>お知らせ</h3>
      <p className={styles.sidebarH3}>INFORMATION</p>
      <ul>
        {latestNews.map((item) => (
          <li key={item.id}>
            <p>{item.date.replace(/-/g, '.')}</p>
            <Link href={`/news/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/news/" className={styles.itemPageLink}>
        <span>もっと見る</span>
      </Link>
    </article>
  );
};
export default BlockNews;
