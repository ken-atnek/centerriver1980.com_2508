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
          <h3 className={styles.itemH3}>会社概要</h3>
          <p className={styles.sidebarH3} style={{ color: '#287500' }}>
            COMPANY PROFILE
          </p>
          <div className={styles.boxProfile}>
            <dl>
              <dt>社名</dt>
              <dd>株式会社センターリバー</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>
                <address>
                  <span>〒860-0823</span>熊本県熊本市中央区世安町73-1
                </address>
              </dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>096-372-2227</dd>
            </dl>
            <dl>
              <dt>代表者</dt>
              <dd>代表取締役　中川　晶雄</dd>
            </dl>
            <dl>
              <dt>設立</dt>
              <dd>昭和58年9月6日</dd>
            </dl>
            <dl>
              <dt>経営理念・社是</dt>
              <dd>
                <ul>
                  <li>
                    <h4>【経営理念】</h4>
                    <p>
                      一、我々は社会に貢献し従業員の幸を願い、お客様の気持ちに成りきる事を企業努力の永遠の課題とする。
                    </p>
                  </li>
                  <li>
                    <h4>【社是】</h4>
                    <p>
                      一、我々はお客様を大切にし我々はお客様の気持ちに成り、お客様が満足のいくサービスを最大の喜びとする。
                    </p>
                  </li>
                  <li>
                    <h4>【社訓】</h4>
                    <p>
                      一、私たちは良い商品を提供する事で豊で健康的な生活向上に貢献する。
                    </p>
                    <p>
                      一、私達は技術の向上とサービス精神によりお客様に喜ばれる様貢献する。
                    </p>
                    <p>
                      一、私たちは人格形成に努め信頼を得ることで明るく健全な社会づくりに貢献する。
                    </p>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>事業内容</dt>
              <dd>
                <span>ステーキとハンバーグ専門のレストラン経営</span>
                <span>鉄板焼専門店経営</span>
                <span>弁当専門店経営</span>
                <span>洋風居酒屋経営</span>
              </dd>
            </dl>
            <dl>
              <dt>資本金</dt>
              <dd>1,000万円</dd>
            </dl>
            <dl>
              <dt>従業員数</dt>
              <dd>180名　（アルバイト・パート含）</dd>
            </dl>
            <dl>
              <dt>営業店舗</dt>
              <dd className={styles.shopListNumber}>
                <div>
                  <span>ハンバーグレストラン　センターリバー</span>
                  <span>熊本県</span>
                  <span>5店舗</span>
                </div>
                <div>
                  <span style={{ textAlign: 'center' }}>〃</span>
                  <span>福岡県</span>
                  <span>2店舗</span>
                </div>
                <div>
                  <span style={{ textAlign: 'center' }}>〃</span>
                  <span>鹿児島県</span>
                  <span>1店舗</span>
                </div>
                <div>
                  <span>お弁当のなんデリッ！</span>
                  <span>熊本県</span>
                  <span>1店舗</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>売上高</dt>
              <dd>年商　7億円</dd>
            </dl>
            <dl>
              <dt>主要取引</dt>
              <dd>
                <span>熊本銀行花畑支店</span>
                <span>熊本中央信金平田支店</span>
              </dd>
            </dl>
          </div>
        </article>
      </section>
    </>
  );
}
