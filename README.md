# Hakuraku Running Club Web

Next.js + React + TypeScript + Tailwind CSS で作成した、モダンで爽やかなランニングクラブのホームページです。

## 使用ライブラリ

- Next.js (App Router)
- React / React DOM
- TypeScript
- Tailwind CSS
- React Icons
- Framer Motion

## フォルダ構成

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   |-- loading.tsx
|   `-- page.tsx
|-- components
|   |-- ActivitiesSection.tsx
|   |-- Footer.tsx
|   |-- GoodsSection.tsx
|   |-- HeroSection.tsx
|   |-- InstagramSection.tsx
|   |-- MapSection.tsx
|   |-- Navbar.tsx
|   |-- RamenSection.tsx
|   |-- Reveal.tsx
|   |-- SatisfactionSection.tsx
|   |-- SectionTitle.tsx
|   `-- TestimonialsSection.tsx
|-- data
|   `-- siteData.ts
|-- types
|   `-- index.ts
|-- .gitignore
|-- eslint.config.mjs
|-- next-env.d.ts
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tailwind.config.ts
`-- tsconfig.json
```

## インストールコマンド

```bash
npm install
```

## 開発実行

```bash
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

## 本番ビルド

```bash
npm run build
npm run start
```

## Vercel 公開方法

1. GitHub に push する
2. Vercel にログインし、New Project からこのリポジトリを選択
3. Framework Preset は Next.js のままで OK
4. Deploy を実行
5. 自動でビルドされ、公開 URL が発行される

## デザインと実装ポイント

- 白ベース + 黒文字 + アクセントブルーで都会的かつ爽やかなトーン
- 余白を広く、角丸と柔らかい影で親しみやすいカード UI
- Framer Motion でスクロールイン演出
- App Router 構成でコンポーネント分割し、後からデータ追加しやすい `data/siteData.ts` を採用
- レスポンシブ対応（PC / タブレット / スマホ）
- モバイル用ハンバーガーメニュー実装
- ローディングアニメーション実装
