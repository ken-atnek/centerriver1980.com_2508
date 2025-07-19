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

export const generateMetadata = (): Metadata => {
  return {
    title: 'ステーキ&ハンバーグ センターリバー',
    description:
      '熊本をはじめ九州のハンバーグ専門店として愛されてきたセンターリバー。当店自慢のハンバーグは、お客様にご注文いただいてから、一品一品形にしてじっくりと焼き上げる「プロハンバーグ」です。センターリバーオンラインショップでは、お店の味をそのままパックした冷凍ハンバーグをはじめ、人気のソースやドレッシングを通信販売で全国へお届けします。',
  };
};
export default function Home() {
  return <></>;
}
