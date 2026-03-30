# Lism UI Playgrounds

lism-css ライブラリの使用例を示すプレイグラウンドプロジェクト集です。

## プロジェクト一覧

### 🚀 lism-with-astro

Astro フレームワークを使用した実装例

-   メインページ: `lism-with-astro/src/pages/index.astro`
-   レイアウト: `lism-with-astro/src/layouts/Layout.astro`

リポジトリルートで依存関係をまとめて入れる場合:

```bash
pnpm install
pnpm dev:astro
```

各プロジェクト単体で動かす場合:

```bash
cd lism-with-astro
pnpm install
pnpm dev
```

### 📄 lism-with-htmx

HTMX での実装例

-   メインページ: `lism-with-htmx/index.html`

```bash
cd lism-with-htmx
pnpm dev
```

またはリポジトリルートから `pnpm dev:htmx`。従来どおり `python3 -m http.server 8000` でも可。

または、 `lism-with-htmx`をプロジェクトルートとして VS Code で開き、Live Server 拡張機能などを使って確認してください。

### ⚡ lism-with-vite

React + TypeScript + Vite を使用した実装例

-   メインコンポーネント: `lism-with-vite/src/App.tsx`
-   エントリーポイント: `lism-with-vite/src/main.tsx`

```bash
cd lism-with-vite
pnpm install
pnpm dev
```

またはリポジトリルートから `pnpm dev:vite`。

## 特徴

-   **lism-css**: 全プロジェクトで共通の UI ライブラリとして使用
-   **複数のフレームワーク**: 異なる技術スタックでの実装例を提供
-   **独立したプロジェクト**: 各プロジェクトは個別に動作

## 必要な環境

-   Node.js (Astro/Vite プロジェクト用)
-   (Python 3) (HTML プロジェクトの開発サーバー用)
