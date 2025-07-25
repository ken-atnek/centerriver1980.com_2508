/* =======================================
 *センターリバー センターリバーのお弁当
 * URL:src/app/takeout/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTakeout.module.scss';
import PageHead from '@/components/common/PageHead';
import Link from 'next/link';
import Logo from '@/assets/images/takeout/bentou_logo.webp';
import Image from 'next/image';
import BlockTakeoutMenu from '@/components/takeout/BlockTakeoutMenu';
import ExternalLink from '@/components/common/ExternalLink';
export const generateMetadata = (): Metadata => {
  return {
    title: 'センターリバーのお弁当 ｜センターリバー',
    description:
      'センターリバーの人気メニューをお持ち帰りで！ハンバーグやステーキなど、こだわりの味を自宅でも楽しめるテイクアウトサービスをご案内します。',
  };
};
export default function PageTakeout() {
  return (
    <>
      <PageHead title="センターリバーのお弁当" />
      <section className={styles.containerContents}>
        <article>
          <div className="item-breadcrumb">
            <Link href="/">home</Link>
            <span>センターリバーのお弁当</span>
          </div>
          <div className={styles.boxHead}>
            <div className={styles.logo}>
              <Image src={Logo} alt="なんでリッ！お弁当" />
            </div>
            <p>
              「なんデリっ！」では、センターリバーのハンバーグやステーキを
              <br className="pc" />
              お弁当でご提供しています。
            </p>
          </div>
        </article>
        <BlockTakeoutMenu />
        <article className={styles.blockInfo}>
          <h3>決済方法</h3>
          <div className={styles.boxDetails}>
            <p>こちらへお電話ください</p>
            <ExternalLink
              href="tel:0963720533"
              className={styles.itemTel}
              aria-label="センターリバーへ電話"
            >
              096-372-0533
            </ExternalLink>
            <ul>
              <li>
                <span>営業時間</span>
                平日・土曜 10:00〜18:30
              </li>
              <li>
                <span>定休日</span>
                日曜・祝日
              </li>
            </ul>
            <address>熊本県熊本市中央区世安町７３−１</address>
            <dl>
              <dt>【宅配】</dt>
              <dd>
                宅配は2,000円以上且つお弁当4個以上から、ご対応させていただきます。
                <br />
                宅配にはエリアがあります。お気軽にお尋ねください。
                <br />
                宅配は13時までとなります。
              </dd>
              <dt>【店頭受取】</dt>
              <dd>
                電話受付は、平日・土曜13:30まで。
                <br />
                店頭受け取りは平日・土曜18:30までとなります。
              </dd>
            </dl>
          </div>
        </article>
        <article className={styles.blockMap}>
          <h3>販売店舗</h3>
          <div className={styles.itemMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6709.3674591770605!2d130.70078100000003!3d32.781052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f48bdf3e9ecf%3A0x639c3610a15c4b08!2z44K744Oz44K_44O844Oq44OQ44O844Gq44KT44OH44Oq!5e0!3m2!1sja!2sjp!4v1753269918454!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </article>
      </section>
    </>
  );
}
