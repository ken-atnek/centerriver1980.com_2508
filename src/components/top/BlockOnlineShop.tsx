/* =======================================
 *センターリバー  TOP オンラインショップ
 * URL:src/components/top/BlockOnlineShop.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import { useMemo } from 'react';
import Link from 'next/link';

const BlockOnlineShop = () => {
  const ListData = useMemo(
    () => [
      {
        title: (
          <>
            焦げ目付き
            <br />
            オリジナルハンバーグ
          </>
        ),
        image: '/images/top/item01.webp',
        description: '愛されているセンターリバーの味',
      },
      {
        title: 'プレミアム赤黒ハンバーグ',
        image: '/images/top/item02.webp',
        description:
          'あか牛と黒毛和牛をブレンドした国産牛肉100％のプレミアムハンバーグ。',
      },
      {
        title: 'ダブルハンバーグセット',
        image: '/images/top/item03.webp',
        description: 'オリジナルハンバーグと赤黒ハンバーグのセット',
      },
    ],
    []
  );
  return (
    <article className={styles.blockOnlineShop}>
      <h3>オンラインショップ</h3>
      <p className={styles.sidebarH3}>online shop</p>

      <ul>
        {ListData.map((item, index) => (
          <li key={index}>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt={item.title}
                width={244}
                height={244}
              />
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <Link href="#" className={styles.itemPageLink}>
        <span>商品一覧</span>
      </Link>
    </article>
  );
};
export default BlockOnlineShop;
