/* =======================================
 *センターリバー  TOP ニュース詳細
 * URL:src/app/news/[id]/page.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import { newsData } from '@/data/newsData';
import { notFound } from 'next/navigation';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/PageNews.module.scss';
import Link from 'next/link';
type Props = {
  params: { id: string };
};

// 静的パス生成（全記事をビルド時に生成）
export function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id }));
}

export default function NewsDetailPage({ params }: Props) {
  const news = newsData.find((item) => item.id === params.id);

  if (!news) return notFound();

  return (
    <>
      <PageHead title="お知らせ" />
      <section className={styles.containerContents}>
        <article className={styles.blockNewsDetail}>
          <h3>{news.title}</h3>
          <p className={styles.date}>
            {new Date(news.date)
              .toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long', // または '2-digit'
                day: 'numeric',
              })
              .replace(/\//g, '年')
              .replace('年', '年')
              .replace('日', '日')}
          </p>
          <div className={styles.boxDetail}>{news.body.content}</div>
          <Link href="/news/" className={styles.itemPageLink}>
            <span>お知らせ一覧へ戻る</span>
          </Link>
        </article>
      </section>
    </>
  );
}
