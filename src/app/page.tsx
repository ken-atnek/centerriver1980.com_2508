/* =======================================
 *センターリバー TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import Header from '@/components/common/Header';
import Logo from '@/assets/images/logo.webp';
import BlockCommitment from '@/components/top/BlockCommitment';
import BlockMenu from '@/components/top/BlockMenu';
import BlockOnlineShop from '@/components/top/BlockOnlineShop';
import BlockNews from '@/components/top/BlockNews';
export const generateMetadata = (): Metadata => {
  return {
    title: 'ステーキ&ハンバーグ センターリバー',
    description:
      '熊本をはじめ九州のハンバーグ専門店として愛されてきたセンターリバー。当店自慢のハンバーグは、お客様にご注文いただいてから、一品一品形にしてじっくりと焼き上げる「プロハンバーグ」です。センターリバーオンラインショップでは、お店の味をそのままパックした冷凍ハンバーグをはじめ、人気のソースやドレッシングを通信販売で全国へお届けします。',
  };
};
export default function Home() {
  return (
    <>
      <section className={styles.containerHero}>
        <h1>
          <Image src={Logo} alt="センターリバー" width={250} height={36} />
        </h1>
      </section>
      <Header />
      <section className={styles.containerContents}>
        <BlockCommitment />
        <BlockMenu />
        <BlockOnlineShop />
        <BlockNews />
      </section>
    </>
  );
}
