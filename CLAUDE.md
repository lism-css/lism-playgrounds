# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## リポジトリ概要

このリポジトリは、lism-css という UI ライブラリのプレイグラウンドプロジェクト集です。異なるフレームワークでの実装例を提供しています。

## プロジェクト別コマンド

### lism-with-astro

```bash
npm run dev      # 開発サーバー起動 (localhost:4321)
npm run build    # プロダクションビルド
```

### lism-with-vite

```bash
npm run dev      # 開発サーバー起動
npm run build    # TypeScriptチェック + ビルド
```

### lism-with-html

```bash
python3 -m http.server 8000  # 開発サーバー起動
```

## アーキテクチャ概要

### 共通の依存関係

-   **lism-css**: 全プロジェクトで使用される UI ライブラリ
    -   Astro/Vite プロジェクト: npm 経由でインストール
    -   HTML プロジェクト: CDN 経由で読み込み

### プロジェクト構成

1. **lism-with-astro**: Astro の.astro コンポーネントを使用。ファイルベースルーティング（src/pages/）
2. **lism-with-html**: htmx を使用した動的コンテンツ読み込み。header/footer を別ファイルで管理
3. **lism-with-vite**: React + TypeScript 構成。コンポーネントベースアーキテクチャ

### 重要な設定ファイル

-   Astro: `astro.config.mjs`
-   Vite: `vite.config.ts`, `tsconfig.json`
-   HTML: 設定ファイルなし（シンプルな静的サーバー）

各プロジェクトは独立しており、個別に開発・ビルドが可能です。
