/* =======================================
 *センターリバー  商品一覧
 * URL:src/components/products/BlockProductList.tsx
 * Created: 2025-07-24
 * Last updated: 2025-07-24
 * ======================================= */
'use client';
import styles from '@/styles/components/BlockProductList.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type ProductItem = {
  id: string;
  image: string;
  title: string;
  subTitle?: string;
  price: string;
  taxIncluded: string;
  link: string;
  hasTilde?: boolean;
};
const productList: ProductItem[] = [
  {
    id: 'item01',
    image: '/images/products/original_s.webp',
    title: '焦げ目付き\nオリジナルハンバーグ',
    price: '370円',
    taxIncluded: '税込400円',
    link: '/products/product001/',
  },
  {
    id: 'item02',
    image: '/images/products/img20230515171624910794.webp',
    title: 'プレミアム和牛赤黒ハンバーグ',
    price: '580円',
    taxIncluded: '税込626円',
    link: '/products/product002/',
  },
  {
    id: 'item03',
    image: '/images/products/soup_s.webp',
    title: 'オリジナル\nコーンポタージュスープ',
    price: '435円',
    taxIncluded: '税込470円',
    link: '/products/product003/',
  },
  {
    id: 'item04',
    image: '/images/products/sauce_s.webp',
    title: 'オリジナルソース',
    subTitle: '(ガーリック・レホール・梅肉)',
    price: '389円',
    taxIncluded: '税込420円',
    link: '/products/product004/',
  },
  {
    id: 'item05',
    image: '/images/products/img20240507101505225121.webp',
    title: 'オリジナルスパイス',
    price: '649円',
    taxIncluded: '税込700円',
    link: '#',
  },
  {
    id: 'item06',
    image: '/images/products/img20240507101517296131.webp',
    title: 'オリジナルドレッシング',
    price: '630円',
    taxIncluded: '税込680円',
    link: '#',
    hasTilde: true,
  },
  {
    id: 'item07',
    image: '/images/products/familyset4_s.webp',
    title: 'ファミリーセット',
    price: '2,352円',
    taxIncluded: '税込2,540円',
    link: '#',
    hasTilde: true,
  },
  {
    id: 'item08',
    image: '/images/products/sr.002_20230509131939725.webp',
    title: 'ダブルハンバーグセット',
    subTitle: '(焦げ目付きハンバーグ＆プレミアム和牛赤黒ハンバーグ)',
    price: '4,900円',
    taxIncluded: '税込5,292円',
    hasTilde: true,
    link: '#',
  },
  {
    id: 'item09',
    image: '/images/products/variety_s.webp',
    title: 'バラエティーセット',
    price: '2,833円',
    taxIncluded: '税込3,060円',
    link: '#',
  },
  {
    id: 'item10',
    image: '/images/products/originalset5_s.webp',
    title: '焦げ目付き\nオリジナルハンバーグセット',
    price: '1,944円',
    taxIncluded: '税込2,100円',
    link: '#',
    hasTilde: true,
  },
  {
    id: 'item11',
    image: '/images/products/sr.001.webp',
    title: 'プレミアム和牛赤黒ハンバーグセット',
    price: '3,000円',
    taxIncluded: '税込3,240円',
    link: '#',
    hasTilde: true,
  },
];
const BlockProductList = () => {
  return (
    <article className={styles.blockProductList}>
      <h3>商品一覧</h3>
      <ul className={styles.productList}>
        {productList.map((item) => (
          <li key={item.id} className={styles.item}>
            <Image
              src={item.image}
              alt={item.title.replace(/\n/g, ' ')}
              width={400}
              height={300}
            />
            <div className={styles.wrapName}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: item.title.replace(/\n/g, '<br />'),
                }}
              />
              {item.subTitle && <span>{item.subTitle}</span>}
            </div>
            <div className={styles.wrapPrice}>
              <p className={styles.price}>{item.price}</p>
              <span>{item.taxIncluded}</span>
              {item.hasTilde && '～'}
            </div>
            <Link href={item.link} className={styles.button}>
              購入する
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
export default BlockProductList;
