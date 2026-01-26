/* =======================================
 *センターリバー  ハンバーグ
 * URL:src/components/concept/BoxHamburger.tsx
 * Referenced in:src/app/concept/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */
import styles from '@/styles/PageConcept.module.scss';
import ImageHamburger01 from '@/assets/images/concept/hamburger01.webp';
import ImageHamburger02 from '@/assets/images/concept/hamburger02.webp';
import { useMemo } from 'react';
import Image from 'next/image';
type ItemPrice = {
  weight: number;
  price: number;
};
const BoxHamburger = () => {
  const itemsPrice: ItemPrice[] = useMemo(
    () => [
      { weight: 150, price: 1130 },
      { weight: 200, price: 1230 },
      { weight: 300, price: 1550 },
      { weight: 400, price: 1830 },
    ],
    []
  );
  return (
    <div className={styles.boxHamburger}>
      <h4>ハンバーグ</h4>
      <p className={styles.sidebarH4}>Hamburger</p>
      <ul className={styles.menuList}>
        <li className={styles.menuDetail}>
          <div className={styles.itemImage}>
            <Image
              src={ImageHamburger01}
              alt="オリジナルハンバーグ"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.wrapText}>
            <h5>オリジナルハンバーグ</h5>
            <p>
              創業以来愛され続けている
              <br />
              厳選ビーフ100%のハンバーグ
            </p>
            <ul className={styles.priceList}>
              {itemsPrice.map((item, index) => (
                <li key={index}>
                  <div className={styles.weight}>{item.weight}g</div>
                  単品
                  <div className={styles.price}>
                    <span>{item.price.toLocaleString()}円</span>
                    <span>
                      (税込{Math.round(item.price * 1.1).toLocaleString()}円)
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className={styles.menuDetail}>
          <div className={styles.itemImage}>
            <Image
              src={ImageHamburger02}
              alt="トマトチーズハンバーグ"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.wrapText}>
            <h5>トマトチーズハンバーグ</h5>
            <div className={styles.wrpPrice}>
              <span>単品</span>
              <span>1,380円</span>
              <span>（税込1,518円）</span>
            </div>
            <p>子供や女性に大人気！</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default BoxHamburger;
