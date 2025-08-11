/* =======================================
 * 商品詳細 共通化
 * URL: src/components/products/ProductCommon.tsx
 * Created: 2025-08-05
 * Last updated: 2025-08-05
 * ======================================= */

import Image from 'next/image';
import styles from '@/styles/PageProductsItem.module.scss';
import Link from 'next/link';
export const ProductTitle = ({
  name,
  subName,
}: {
  name: string;
  subName?: string;
}) => (
  <h3 className={styles.headItemName}>
    {name}
    {subName && <span>{subName}</span>}
  </h3>
);
export const ProductBreadCrumb = ({ name }: { name: string }) => (
  <div className={styles.itemBreadCrumb}>
    <Link href="/">HOME</Link>
    <Link href="/products/">オンラインショップ</Link>
    <p>{name}</p>
  </div>
);

export const ProductImage = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => (
  <div className={styles.boxImage}>
    <Image src={image} alt={name} width={600} height={400} />
  </div>
);

export const ProductPurchase = ({
  name,
  code,
  price,
  subName,
}: {
  name: string;
  code: string;
  price: number;
  subName?: string;
}) => (
  <div className={styles.boxPurchase}>
    <div className={styles.wrapInfo}>
      <dl>
        <dt>商品番号</dt>
        <dd>{code}</dd>
      </dl>
      <dl>
        <dt>商品名</dt>
        <dd>
          {name}
          {subName && <span>{subName}</span>}
        </dd>
      </dl>
      <dl>
        <dt>価格（税込）</dt>
        <dd>{price.toLocaleString()}円(税込)</dd>
      </dl>
    </div>
    <div className={styles.wrapInput}>
      <label>
        購入数量
        <input type="number" name="quantity" min="1" defaultValue={1} />個
      </label>
      <input type="hidden" />
    </div>
    <button type="button">
      <span>カートに入れる</span>
    </button>
  </div>
);
