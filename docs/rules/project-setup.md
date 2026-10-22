# プロジェクト概要

Next.js App Router + TypeScript + SCSS による静的書き出しサイト。

## セットアップ

```bash
npm install
```

## 主な確認コマンド

```bash
npm run dev
npm run build
npm run lint
npm run lint:style
```

## このリポジトリの前提

- `next.config.ts` で `output: 'export'` を使用している
- `.env.development` / `.env.production` は置かず、`package.json` の `cross-env` で環境値を切り替える
- 本番判定は `src/lib/env.ts` の `isRealProduction` を使う
- 共通 metadata は `src/app/layout.tsx` で管理している
- 現状は build blocker があるため、不足ファイル解消後に build 確認を行う
