/* =======================================
 *センターリバー ハンバーグコンビ
 * URL:src/components/takeout/BlockTakeoutMenu.tsx
 * Referenced in:src/app/takeout/page.tsx
 * Created: 2025-07-23
 * Last updated: 2025-07-23
 * ======================================= */
import type { StaticImageData } from 'next/image';
import styles from '@/styles/PageTakeout.module.scss';
import Image01 from '@/assets/images/takeout/item01.webp';
import Image02 from '@/assets/images/takeout/item02.webp';
import Image03 from '@/assets/images/takeout/item03.webp';
import Image04 from '@/assets/images/takeout/item04.webp';
import Image05 from '@/assets/images/takeout/item05.webp';
import Image06 from '@/assets/images/takeout/item06.webp';
import Image07 from '@/assets/images/takeout/item07.webp';
import Image08 from '@/assets/images/takeout/item08.webp';

import { useMemo } from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';
type ImageList = {
  image: StaticImageData;
  catch?: ReactNode;
  title: ReactNode;
  alt: string;
  price: number;
};
type TextList = {
  title: string;
  price: number;
};
const BlockTakeoutMenu = () => {
  const imageList: ImageList[] = useMemo(
    () => [
      {
        image: Image01,
        title: <>俵ハンバーグ</>,
        alt: '俵ハンバーグ',
        price: 600,
      },
      {
        image: Image02,
        catch: <>1番人気</>,
        title: (
          <>
            ハンバーグ＆
            <br /> チキン南蛮
          </>
        ),
        alt: 'ハンバーグ＆チキン南蛮',
        price: 650,
      },
      {
        image: Image03,
        title: (
          <>
            ハンバーグ＆
            <br />
            から揚げ・白身フライ
          </>
        ),
        alt: 'ハンバーグ＆から揚げ・白身フライ',
        price: 650,
      },
      {
        image: Image04,
        title: <>月見ハンバーグカレー</>,
        alt: '月見ハンバーグカレー',
        price: 650,
      },
      {
        image: Image05,
        title: (
          <>
            ハンバーグ ＆<br />
            ヒレカツ・海老フライ
          </>
        ),
        alt: 'ハンバーグ＆ヒレカツ・海老フライ',
        price: 700,
      },
      {
        image: Image06,
        catch: (
          <>
            おいしく
            <br />
            リニューアル
          </>
        ),
        title: <>ハンバーグ＆焼肉</>,
        alt: 'ハンバーグ＆焼肉',
        price: 780,
      },
      {
        image: Image07,
        catch: <>スタッフ一押し</>,
        title: <>俵ハンバーグ＆ステーキ</>,
        alt: '俵ハンバーグ＆ステーキ',
        price: 980,
      },
      {
        image: Image08,
        title: <>デラックス俵ハンバーグ</>,
        alt: 'デラックス俵ハンバーグ',
        price: 900,
      },
    ],
    []
  );
  const textList: TextList[] = useMemo(
    () => [
      {
        title: '俵ハンバーグえびえび唐揚げ弁当',
        price: 740,
      },
      {
        title: '俵ハンバーグスペシャル弁当',
        price: 950,
      },
      {
        title: 'サバの味噌煮弁当',
        price: 650,
      },
      {
        title: 'ハンバーグ＆から揚げ弁当',
        price: 630,
      },
      {
        title: 'ハンバーグ＆ショウガ焼き弁当',
        price: 700,
      },
      {
        title: '特注弁当',
        price: 1500,
      },
    ],
    []
  );
  return (
    <article className={styles.blockMenu}>
      <ul className={styles.imageList}>
        {imageList.map((item, index) => (
          <li key={index}>
            {item.catch && <p className={styles.catch}>{item.catch}</p>}
            <div className={styles.itemImage}>
              <Image src={item.image} alt={item.alt} width={330} height={230} />
            </div>
            <h5>{item.title}</h5>
            <span className={styles.price}>
              ¥{item.price.toLocaleString()} / 税込
            </span>
          </li>
        ))}
      </ul>
      <ul className={styles.textList}>
        {textList.map((item, index) => (
          <li key={index}>
            <h5>・{item.title}</h5>
            <div className={styles.price}>
              ¥{item.price.toLocaleString()} / 税込
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.notice}>
        ※特注弁当、俵HBスペシャル弁当、えびえび唐揚弁当は3日前までのご注文になります。
      </p>
    </article>
  );
};
export default BlockTakeoutMenu;
