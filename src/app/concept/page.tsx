/* =======================================
 *センターリバー 当店のこだわり＆オススメメニュー
 * URL:src/app/concept/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageConcept.module.scss';
import PageHead from '@/components/common/PageHead';
import BlockCommitment from '@/components/BlockCommitment';
import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
import BlockConcept from '@/components/concept/BlockConcept';
import BoxHamburger from '@/components/concept/BoxHamburger';
import BoxSteak from '@/components/concept/BoxSteak';
import BoxCombi from '@/components/concept/BoxCombi';
export const generateMetadata = (): Metadata => {
  return {
    title: '当店のこだわり＆オススメメニュー ｜センターリバー',
    description:
      'センターリバーのこだわりや創業の想いをご紹介します。手作りハンバーグとステーキに込めた情熱と、お客様への感謝の気持ちを大切にしています。',
  };
};
export default function PageConcept() {
  return (
    <>
      <PageHead title="当店のこだわり＆オススメメニュー" />
      <section className={styles.containerContents}>
        <article>
          <div className="item-breadcrumb">
            <Link href="/">home</Link>
            <span>当店のこだわり＆オススメメニュー</span>
          </div>
          <BlockCommitment />
        </article>
        <BlockConcept />
        <article className={styles.blockMenu}>
          <h3>オススメメニュー</h3>
          <BoxHamburger />
          <BoxSteak />
          <BoxCombi />
          <p className={styles.announce}>
            その他にも、ランチメニューもございます。
            <br />
            セットメニューに関しましては、「その他のメニュー」よりご覧ください。
          </p>
          <ExternalLink
            href="/data/pdf/menu_20241001.pdf"
            className={styles.linkPdf}
            aria-label="センターリバーのメニュー"
          >
            その他のメニューはこちらから
          </ExternalLink>
        </article>
      </section>
    </>
  );
}
