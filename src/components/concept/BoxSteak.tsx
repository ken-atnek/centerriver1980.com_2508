/* =======================================
 *センターリバー ステーキ&グリル
 * URL:src/components/concept/BoxSteak.tsx
 * Referenced in:src/app/concept/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */
import type { StaticImageData } from 'next/image';
import styles from '@/styles/PageConcept.module.scss';
import ImageSteak01 from '@/assets/images/concept/steak01.webp';
import ImageSteak02 from '@/assets/images/concept/steak02.webp';
import ImageSteak03 from '@/assets/images/concept/steak03.webp';
import ImageSteak04 from '@/assets/images/concept/steak04.webp';
import { useMemo } from 'react';
import Image from 'next/image';
type ItemPrice = {
  weight: number;
  price: number;
};
type ImageList = {
  image: StaticImageData;
  title: string;
  price: number;
};
const BoxSteak = () => {
  const itemsPrice: ItemPrice[] = useMemo(
    () => [
      { weight: 150, price: 1370 },
      { weight: 200, price: 1580 },
      { weight: 300, price: 1980 },
    ],
    []
  );
  const imageList: ImageList[] = useMemo(
    () => [
      { image: ImageSteak02, title: '牛ヒレステーキ', price: 2530 },
      { image: ImageSteak03, title: '牛サーロインステーキ', price: 2530 },
      { image: ImageSteak04, title: '赤鶏香草焼き', price: 1630 },
    ],
    []
  );
  return (
    <div className={styles.boxSteak}>
      <h4>ステーキ&グリル</h4>
      <p className={styles.sidebarH4}>Steak & Grill</p>
      <ul className={styles.menuList}>
        <li className={styles.menuDetail}>
          <div className={styles.itemImage}>
            <Image
              src={ImageSteak01}
              alt="ヤングステーキ"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.wrapText}>
            <h5>ヤングステーキ</h5>
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
      </ul>
      <ul className={styles.imageList}>
        {imageList.map((item, index) => (
          <li key={index}>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt={item.title}
                width={330}
                height={230}
              />
            </div>
            <h5>{item.title}</h5>
            <div className={styles.price}>
              単品
              <span>{item.price.toLocaleString()}円</span>
              <span>
                (税込{Math.round(item.price * 1.1).toLocaleString()}円)
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BoxSteak;
