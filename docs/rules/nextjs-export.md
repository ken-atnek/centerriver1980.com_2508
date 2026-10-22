# Next.js App Router 静的書き出しメモ

このリポジトリは `output: 'export'` 前提で扱う。

---

## 1. metadata の環境切り替え

- `src/lib/env.ts` の `isRealProduction` を基準に本番判定を行う
- `src/app/layout.tsx` の `metadataBase` は本番時のみ有効化する
- `NEXT_PUBLIC_METADATA_BASE` は末尾スラッシュなしで管理する

---

## 2. `robots.ts` / `sitemap.ts` を追加する時の注意

`src/app/robots.ts` / `src/app/sitemap.ts` を追加する場合は、先頭に `export const dynamic = 'force-static';` を付ける。

```ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
```

- `output: 'export'` でビルドする場合、これがないと metadata route の収集で失敗することがある
- `public/robots.txt` と App Router の `robots.ts` は併用しない

---

## 3. canonical / sitemap URL 生成

- `new URL(pathname, metadataBase).toString()` で URL を組み立てる
- 文字列連結で `https://example.com//path` を作らない

```ts
const canonical = new URL('/products/', metadataBase).toString();
```

---

## 4. `next/image` 利用時の前提

- `next.config.ts` では `images: { unoptimized: true }` を維持する
- export 後の表示崩れ確認まで行う

---

## 5. build 後の確認項目

- `out/index.html`
- `out/concept/index.html`
- `out/products/index.html`
- `out/takeout/index.html`
- `out/news/index.html`
- `out/company/index.html`
- `out/robots.txt`
- `out/sitemap.xml`

---

## 6. この案件で見るポイント

- 本番以外で `noindex, nofollow` になっているか
- `metadataBase` が本番時のみ有効になっているか
- OGP画像参照先が実在しているか
- 各ページの `title` と `description` がページ内容に対応しているか
- `/news/detail?id=◯` のようなクエリページは sitemap に入れず、必要なら `noindex` にする
