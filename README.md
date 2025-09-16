# ChatBot FE

## プロジェクト概要

このプロジェクトは、社内向けチャットボットのフロントエンドです。  
バックエンドからの回答APIと連携し、チャット形式でドキュメントベースのQA機能を提供します。

React + TypeScript + Vite をベースに構築されています。

---

## 前提条件

- **Node.js 24.x 以上を推奨**

  Node.js のバージョン確認：

  ```bash
  node -v
  ```

  出力例：

  ```bash
  v24.2.0
  ```

- **Yarn（パッケージマネージャ）がインストールされていること**

  Yarn のインストール状況を確認：

  ```bash
  yarn -v
  ```

  Yarn が未インストールの場合、以下のコマンドでグローバルインストールします：

  ```bash
  npm install -g yarn
  ```

  このコマンドは、Node.js 付属の `npm` を使用して、Yarn を**グローバル環境**（どのプロジェクトでも使える状態）にインストールします。  
  以降、プロジェクトごとの依存管理やスクリプト実行を Yarn で行うことができます。

---


## 環境構築手順

1. リポジトリをクローン

以下は **SSH を使用した場合の例** です。HTTPS を使用する場合は GitHub 上でリポジトリのクローン用 URL を変更してください。

```bash
git clone git@github.com:novel-muraguchi/chatbot-fe.git
cd chatbot-fe
```

2. 依存パッケージをインストール

```bash
yarn install
```

> 初回実行時、`yarn.lock`および node_modulesフォルダが自動生成されます。

3. 開発サーバーを起動

```bash
yarn dev
```

4. ブラウザでアクセス  
   `http://localhost:5173`

---

