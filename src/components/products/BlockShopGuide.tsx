/* =======================================
 *センターリバー お支払いについて他
 * URL:src/components/products/BlockShopGuide.tsx
 * Created: 2025-07-24
 * Last updated: 2025-07-24
 * ======================================= */

import styles from '@/styles/components/BlockShopGuide.module.scss';
import Payment01 from '@/assets/images/icon/visa.webp';
import Payment02 from '@/assets/images/icon/master.webp';
import Payment03 from '@/assets/images/icon/jcb.webp';
import Payment04 from '@/assets/images/icon/amex.webp';
import Payment05 from '@/assets/images/icon/daibiki.webp';
import Image from 'next/image';
import shippingData from '@/data/shippingData';

const BlockShopGuide = () => {
  return (
    <article className={styles.blockShopGuide}>
      <div className={styles.boxPayment}>
        <h3>お支払いについて</h3>
        <p>
          お支払いは、代金引換・クレジットカード決済（VISA、MasterCard、JCB、American
          Express）がご利用頂けます。
        </p>
        <ul>
          <li>
            <Image src={Payment01} alt="VISA" />
          </li>
          <li>
            <Image src={Payment02} alt="master" />
          </li>
          <li className={styles.itemJcb}>
            <Image src={Payment03} alt="JCB" />
          </li>
          <li className={styles.itemAmex}>
            <Image src={Payment04} alt="アメックス" />
          </li>
          <li className={styles.itemDaibiki}>
            <Image src={Payment05} alt="代引き" />
          </li>
        </ul>
        <p>※代金引換手数料（一律324円）はお客様負担となります。</p>
        <p>
          ※代金引換の場合は商品受取り時に配達ドライバーに直接お支払い下さい。
        </p>
        <p>
          ※クレジット決済は決済代行専門会社であるイプシロン株式会社の決済代行システムを利用しております。
        </p>
      </div>
      <div className={styles.boxShipping}>
        <h3>配送・送料について</h3>
        <p>送料は下記の通りです。（下記料金は全て税込です。）</p>
        <ul className={styles.shippingList}>
          {shippingData.map((area, i) => (
            <li key={i} className={styles.itemArea}>
              <h4>{area.areaName}</h4>
              <ul>
                {area.prefectures
                  .filter((pref) => pref && pref.trim() !== '')
                  .map((pref) => (
                    <li key={`${area.areaName}-${pref}`}>{pref}</li>
                  ))}
              </ul>
              <p>{area.shippingFee}</p>
            </li>
          ))}
        </ul>
        <p style={{ color: '#ff0000' }}>
          ※上記送料は１個口あたりの金額となります。
          <br />
          セット商品の場合、２セットまで１個口が目安です。
        </p>
        <p>※宅配便でお送りいたします。またお時間・お日にちの指定も可能です。</p>
      </div>
      <div className={styles.boxReturn}>
        <h3>返品について</h3>
        <p>
          お客様のご都合によるご返品にはご対応できかねますので予めご了承ください。
          <br />
          万一発送中の破損、不良品、あるいはご注文と違う商品が届いた場合は、商品到着後2日以内にE-mailまたはTELにてご連絡下さい。
          <br />
          返送料はこちらが負担いたします。
          <br />
          ※詳しくは【特定商取引法に関する表示】に記載しておりますのでご確認お願い致します。
        </p>
      </div>
    </article>
  );
};
export default BlockShopGuide;
