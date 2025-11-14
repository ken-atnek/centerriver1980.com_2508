'use client';
/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * Created: 2025-07-22
 * Last updated: 2025-11-13
 * ======================================= */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHead from '@/components/common/PageHead';
import { convertRemToPx } from '@/lib/convertRemToPx';
import { convertFontToSpan } from '@/lib/cleanHtml';
import { isRealProduction } from '@/lib/env';
import styles from '@/styles/PageNews.module.scss';
import Link from 'next/link';

type ApiNewsItem = {
  k_id: string | number;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_next?: number | string;
  k_back?: number | string;
};

//apiUrlの切替 (本番用 or テスト用)
const setApiUrl = isRealProduction ? 'https://centerriver1980.com' : 'https://demo-centerriver1980.tuna-pic.co.jp';

export default function NewsDetailClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState<ApiNewsItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    fetch(`${setApiUrl}/api/news/?id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('記事が見つかりません');
        return res.json();
      })
      .then((item) => setData(item))
      .catch((err) => setError(err.message));
  }, [id]);
  if (!id) return <div className={styles.error}>IDが指定されていません</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!data) return <div className={styles.loading}>読み込み中...</div>;
  return (
    <>
      <PageHead title="お知らせ" />
      <section className={styles.containerContents}>
        <article className={styles.blockNewsDetail}>
          <h3>{data.k_title}</h3>
          <p className={styles.date}>
            {new Date(data.k_date || '')
              .toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              .replace(/\//g, '年')
              .replace('年', '年')
              .replace('日', '日')}
          </p>
          <div 
            className={styles.boxDetail}
            dangerouslySetInnerHTML={{
                  __html: convertFontToSpan(
                    convertRemToPx(data.k_body, 16),
                    16
                  ),
                }}
          />
          <Link href="/news/" className={styles.itemPageLink}>
            <span>お知らせ一覧へ戻る</span>
          </Link>
        </article>
      </section>
    </>
  );
}
