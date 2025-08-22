'use client';
/* =======================================
 * 商品詳細 共通化
 * URL: src/components/products/ProductCommon.tsx
 * Created: 2025-08-05
 * Last updated: 2025-08-05
 * ======================================= */

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/PageProductsItem.module.scss';
import Link from 'next/link';

type AddCartResponse = {
  ok: boolean;
  cart?: {
    count: number;
  };
  item?: {
    product_id: number;
    product_class_id: number;
    quantity: number;
  };
  error?: string;
  message?: string;
};

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
  ecId,
  ecClassId,
  code,
  price,
  subName,
}: {
  name: string;
  ecId: string;
  ecClassId: string;
  code: string;
  price: number;
  subName?: string;
}) => {
  // 数量の状態を保持
  const [quantity, setQuantity] = useState<number>(1);
  // 入力の正規化とバリデーション（1以上の整数に丸める）
  const normalizeQuantity = (v: number) => {
    if (Number.isNaN(v) || v < 1) return 1;
    // 上限を設けたい場合はここで clamp（例: Math.min(v, 999)）
    return Math.floor(v);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuantity(normalizeQuantity(Number(e.target.value)));
  };
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const fixed = normalizeQuantity(Number(e.target.value));
    if (fixed !== quantity) setQuantity(fixed);
  };

  const handleClick = async () => {
    const q = normalizeQuantity(quantity);
    // まずは数量が正しく取得できているかを確認
    console.log('[add-to-cart] ecId:', ecId, 'quantity:', q);
    alert(`数量を取得しました: ${q} 個（商品コード: ${ecId}／商品クラスID: ${ecClassId}）`);

    try {
      const res = await fetch('/online-shop/custom-api/cart/add', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: Number(ecId),
          product_class_id: Number(ecClassId),
          quantity: Number(quantity),
        }),
        cache: 'no-store',
      });
      const text = await res.text();
      let data:  AddCartResponse | null = null;
      try { data = JSON.parse(text); } catch {}

      if (!res.ok || !data?.ok) {
        alert((data && data.message) ? data.message : `カート追加に失敗しました (${res.status})`);
        return;
      }

      alert('カートに追加しました');
      // 必要ならここで data.cart.count などを使ってヘッダーのカート数を更新
    } catch (err) {
      console.error(err);
      alert('通信に失敗しました。ネットワークをご確認ください。');
    }
  };


  return (
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
        <input type="number" name="quantity" min={1} inputMode="numeric" value={quantity} onChange={handleChange} onBlur={handleBlur} />個
      </label>
      <input type="hidden" />
    </div>
    <button type="button" onClick={handleClick}>
      <span>カートに入れる</span>
    </button>
  </div>
);
}