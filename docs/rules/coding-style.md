# コーディング規約メモ

## 基本方針

- 既存コードに自然に合わせる
- 大きな再設計はせず、必要箇所だけ直す
- ページごとの metadata は各 `page.tsx` で管理する

## TSX

- ファイル先頭のコメントヘッダー形式は既存に合わせる
- 内部リンクは `Link`、外部リンクは `ExternalLink` を使う
- 画像は原則 `next/image` を使う

## SCSS

- 既存の `src/styles/` 構成に合わせる
- ページ単位スタイルは `src/styles/Page*.module.scss`
- コンポーネント単位スタイルは `src/styles/components/` 配下

## SEO運用

- metadata 文言変更時は `docs/seo/SEO_SETUP.md` も必要に応じて更新する
- 公開URLや canonical 方針が変わったら `docs/rules/nextjs-export.md` も更新する
