# SEO初期設定メモ

センターリバーの既存サイト運用・更新前提で、最低限押さえるSEO整理用メモです。

---

## サイト基本情報

- サイト名: センターリバー
- 会社名: 株式会社センターリバー
- 現行サイトURL: `https://centerriver1980.com/`
- ドメイン: `centerriver1980.com`
- 公開URL:
- 公開ステータス:
- 案件種別: 既存サイト更新

---

## 実装前提メモ

- `.env.development` / `.env.production` は持たず、環境値は `package.json` の `cross-env` と実行環境から渡す
- `NEXT_PUBLIC_IS_REAL_PROD=true` のときだけ `metadataBase` / `index, follow` を有効化する
- `NEXT_PUBLIC_METADATA_BASE` は末尾スラッシュなしで管理する
- `src/app/robots.ts` / `src/app/sitemap.ts` を App Router 側で管理する
- `public/robots.txt` は App Router の `robots.ts` と重複させない
- `title` / `description` はページ固有の意図が分かる文言にする
- クエリページ `/news/detail?id=◯` は常時 `noindex` で扱う

---

## 更新時の確認項目

- 既存公開サイトの `title` / `description` の確認
- 主要ページの `canonical` 設定方針の確認
- `h1` と見出し階層の確認
- OGP画像の有無と実在確認
- `robots.txt` / `sitemap.xml` の出力確認
- 画像 `alt` の不足確認

---

## ページ別メタ情報

### トップページ `/`

- title: `ステーキ&ハンバーグ センターリバー`
- description: 現在 `src/app/page.tsx` で設定済み。更新時は公開内容に合わせて見直す
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 当店のこだわり＆オススメメニュー `/concept/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### オンラインショップ `/products/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### センターリバーのお弁当 `/takeout/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### お知らせ `/news/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 店舗案内 / 会社概要 `/company/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### プライバシーポリシー `/policy/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 利用規約 `/kiyaku/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 特定商取引法に基づく表記 `/tokutei/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

---

## 技術SEOメモ

- `src/app/layout.tsx` で共通 metadata を管理している
- `src/lib/env.ts` の `isRealProduction` / `metadataBase` を基準に本番 / 非本番を切り替える
- `npm run build:demo` / `npm run build:prod` が環境値の基準
- `src/app/robots.ts` と `src/app/sitemap.ts` は `force-static` を付ける
- OGP画像は `/public/ogp.png` の実在確認が必要
- 静的書き出し後は `out/robots.txt` / `out/sitemap.xml` / 各HTMLの `title` `description` `canonical` を確認する
