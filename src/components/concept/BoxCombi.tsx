/* =======================================
 *センターリバー ハンバーグコンビ
 * URL:src/components/concept/BoxCombi.tsx
 * Referenced in:src/app/concept/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */
import type { StaticImageData } from 'next/image';
import styles from '@/styles/PageConcept.module.scss';
import ImageCombi01 from '@/assets/images/concept/combi01.webp';
import ImageCombi02 from '@/assets/images/concept/combi02.webp';
import ImageCombi03 from '@/assets/images/concept/combi03.webp';
// import ImageCombi04 from '@/assets/images/concept/combi04.webp';
import ImageCombi05 from '@/assets/images/concept/combi05.webp';
import ImageCombi06 from '@/assets/images/concept/combi06.webp';
import { useMemo } from 'react';
import Image from 'next/image';

type ImageList = {
  image: StaticImageData;
  title: string;
  //text?: string;
  price: number;
};
const BoxCombi = () => {
  const imageList: ImageList[] = useMemo(
    () => [
      { image: ImageCombi01, title: 'ハンバーグ＆ステーキ', price: 1580 },
      { image: ImageCombi02, title: 'ハンバーグ＆エビフライ', price: 1680 },
      { image: ImageCombi03, title: 'ハンバーグ＆エビグラタン', price: 1680 },
      // {
      //   image: ImageCombi04,
      //   title: 'カウボーイ',
      //   text: 'ハンバーグ＆コロコロステーキ',
      //   price: 1530,
      // },
      {
        image: ImageCombi05,
        title: 'ハンバーグ＆ヒレステーキ',
        //text: 'ハンバーグ＆ヒレステーキ',
        price: 1980,
      },
      { image: ImageCombi06, title: 'ハンバーグ＆赤鶏香草焼き', price: 1830 },
    ],
    []
  );
  return (
    <div className={styles.boxCombi}>
      <h4>ハンバーグコンビ</h4>
      <p className={styles.sidebarH4}>Hamburger Combi</p>
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
            <h5>
              {item.title}
              {/* {item.text && <span>（{item.text}）</span>} */}
            </h5>
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
export default BoxCombi;
