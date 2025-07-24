/* =======================================
 *センターリバー オンラインショップ
 * URL:src/app/products/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageProducts.module.scss';
import PageHead from '@/components/common/PageHead';
import Link from 'next/link';
import HeadImage from '@/assets/images/products-head.webp';
import Image from 'next/image';
import BlockChefMovie from '@/components/products/BlockChefMovie';
import BlockShopGuide from '@/components/products/BlockShopGuide';
import BlockProductList from '@/components/products/BlockProductList';
export const generateMetadata = (): Metadata => {
  return {
    title: 'オンラインショップ | センターリバーのハンバーグを全国へお届け',
    description:
      'センターリバー自慢のハンバーグやステーキをご家庭で楽しめるオンラインショップです。全国配送対応で、ギフトやご自宅用にも最適です。',
  };
};
export default function PageProducts() {
  return (
    <>
      <PageHead title="オンラインショップ" />
      <section className={styles.containerHead}>
        <div className={styles.boxBreadcrumb}>
          <div className="item-breadcrumb">
            <Link href="/">home</Link>
            <span>オンラインショップ</span>
          </div>
        </div>
        <div className={styles.itemHeadImage}>
          <Image
            src={HeadImage}
            alt="創業以来、愛され続ける味をご家庭で。"
            width={1542}
            height={500}
          />
        </div>
      </section>
      <section className={styles.containerContents}>
        <p className={styles.headAnnounce}>
          1980年よりハンバーグの専門店として愛されているセンターリバーのハンバーグを
          <br />
          ご自宅用にも、ご贈答用にもご提供しております。
          <br />
          各種クレジット払いや他県への発送も承っております。
        </p>
        <BlockChefMovie />
        <BlockProductList />
        <BlockShopGuide />
      </section>
    </>
  );
}
