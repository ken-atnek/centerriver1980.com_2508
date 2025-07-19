/* =======================================
 *センターリバー  店舗案内 / 会社概要
 * URL:src/app/company/page.tsx
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageCompany.module.scss';
import PageHead from '@/components/common/PageHead';
import Link from 'next/link';
import StoreList from '@/components/StoreList';

export const generateMetadata = (): Metadata => {
  return {
    title: '店舗案内／会社概要 ｜センターリバー',
    description:
      '手作りハンバーグ・ステーキのレストラン「センターリバー」の会社情報をご紹介します。創業の想いや店舗展開についてご覧ください。',
  };
};
export default function PageCompany() {
  return (
    <>
      <PageHead title="店舗案内 / 会社概要" />
      <section className={styles.containerLocations}>
        <article>
          <div className="item-breadcrumb">
            <Link href="/">home</Link>
            <span>店舗案内 / 会社概要</span>
          </div>
          <h3 className={styles.itemH3}>店舗案内</h3>
          <p className={styles.sidebarH3}>locations</p>
          <StoreList />
        </article>
      </section>
    </>
  );
}
