/* =======================================
 *センターリバー  TOP メニュー
 * URL:src/components/top/BlockMenu.tsx
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import { useMemo } from 'react';
import Link from 'next/link';

const BlockMenu = () => {
  const ListData = useMemo(
    () => [
      {
        title: 'オリジナルハンバーグ',
        image: '/images/top/menu01.webp',
      },
      {
        title: 'ヤングステーキ',
        image: '/images/top/menu02.webp',
      },
      {
        title: 'トマトチーズハンバーグ',
        image: '/images/top/menu03.webp',
      },
    ],
    []
  );

  return (
    <article className={styles.blockMenu}>
      <h3>メニュー</h3>
      <p className={styles.sidebarH3}>Menu</p>

      <ul>
        {ListData.map((item, index) => (
          <li key={index}>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt={item.title}
                width={317}
                height={222}
              />
            </div>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
      <Link href="/concept/#BlockMenu" className={styles.itemPageLink}>
        <span>メニュー一覧</span>
      </Link>
    </article>
  );
};
export default BlockMenu;
