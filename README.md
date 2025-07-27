# BVMap

BVMap プロジェクトは、国土地理院最適化ベクトルタイルを活用したウェブ地図を構築するためのプロジェクトです。このプロジェクトでは、MapLibre GL JS を使用して地図を表示し、Vite を利用して開発およびビルドを行います。

## プロジェクトの背景

- 国土地理院最適化ベクトルタイルは、以下の方法でホストされています：
  - [PMTiles に直接アクセス](https://tunnel.optgeo.org/bvmap.pmtiles)
  - [TileJSON を介したアクセス](https://tunnel.optgeo.org/martin/bvmap)
- このプロジェクトでは、これらのタイルを利用してウェブ地図を構築します。

## 主な機能

1. MapLibre GL JS を使用した地図の表示
2. `skeleton.json` スタイルをベースにした地図スタイルの適用
3. 静的サイトとして `docs` ディレクトリにビルド

## セットアップ

### 必要なツール

- Node.js (推奨バージョン: 16.x 以上)
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
make dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて地図を確認できます。

### ビルド

```bash
make build
```

静的サイトが `docs` ディレクトリに生成されます。

### ビルドプロセスの詳細

`index.ts` は Vite によって自動的にトランスパイルされ、`docs/index.js` が生成されます。また、`public` ディレクトリ内のファイル（例: `skeleton.json`, `colorful.json`, `vite.svg`）は `docs` ディレクトリにコピーされます。

ビルド後、`docs` ディレクトリ内のファイルをブラウザで確認することで、スタティック環境での動作を検証できます。

```bash
make build
```

```plaintext
bvmap/
├── src/          # ソースコード
├── public/       # 静的ファイル
├── docs/         # ビルドされた静的サイト
├── index.html    # エントリーポイント
├── Makefile      # ビルドタスク
├── tsconfig.json # TypeScript 設定
└── vite.config.js # Vite 設定
```

## 参照

- [国土地理院最適化ベクトルタイル](https://github.com/gsi-cyberjapan/optimal_bvmap)
- [MapLibre GL JS](https://maplibre.org/)
- [Vite](https://vitejs.dev/)
- [PMTiles](https://github.com/protomaps/PMTiles)

## 謝辞

このプロジェクトは、国土地理院および関連するオープンソースコミュニティの貢献に感謝します。また、MapLibre GL JS や Vite の開発者に感謝の意を表します。

## ライセンス

このプロジェクトは MIT ライセンスの下で提供されています。
