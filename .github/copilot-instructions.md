## このプロジェクトの背景

- https://github.com/unvt/x-24b が成功した結果、国土地理院最適化ベクトルタイルが次の方法でホストされるようになりました。
  - https://tunnel.optgeo.org/bvmap.pmtiles により、PMTiles に直接アクセスする方法。
  - https://tunnel.optgeo.org/martin/bvmap から提供される TileJSON によって、https://tunnel.optgeo.org/martin/bvmap/{z}/{x}/{y} からベクトルタイルにアクセスする方法。
- 結果として、pmtiles.js を用いることなく国土地理院最適化ベクトルタイルにアクセスするウェブ地図を作成できる機会が巡ってきました。

## このプロジェクトの目的

1. https://raw.githubusercontent.com/gsi-cyberjapan/optimal_bvmap/refs/heads/main/style/skeleton.json を踏襲した MapLibre GL JS のウェブ地図を実現します。
2. https://github.com/optgeo/openmaptiles で確立された方法を踏襲します。
3. skeleton.json ベースの地図を実現した後は、配色を工夫したスタイル colorful.json を作成し、それらのスタイルが切り替えられるようにします。

## プロジェクト実現の手順

1. **ドキュメントの充実**: このドキュメントの記載内容の説明が不十分なところを充実させ、書き換えます。特に、プロジェクトの背景や目的を明確にし、手順を具体的に記載します。
2. **URL の確認と理解**: このドキュメントに示された URL が実際にアクセス可能であることを確認するとともに、そのコンテンツを読み込んで理解します。
3. **skeleton.json の作成**: MapLibre Style 記述である skeleton.json を作成します。https://raw.githubusercontent.com/gsi-cyberjapan/optimal_bvmap/refs/heads/main/style/skeleton.json のうち、sources.v.tiles が削除され、sources.v.url に https://tunnel.optgeo.org/martin/bvmap を設定することになるでしょう。
4. **スタイルの検証**: skeleton.json の内容が適正であることを確認します。特に、レイヤーやソースの設定が正しいかをチェックします。
5. **ウェブ地図の作成**: MapLibre GL JS サイトを Vite を使って作成します。静的サイトは docs に出力します。
6. **初期完成**: 一旦、ウェブ地図として完成させます。基本的な機能が動作することを確認します。
7. **スタイル切り替え機能の実装**: colorful.json を作成し、ウェブ地図の左上のドロップダウンメニューから style を切り替えられるようにします。この部分は、https://github.com/optgeo/openmaptiles で確立された方法をなるべく忠実に踏襲します。
8. **GitHub Pages 対応**: GitHub Pages で `/bvmap` 配下にデプロイされることを考慮し、すべてのリソースパスを相対パスに変更します。例えば、`/colorful.json` ではなく `colorful.json` を使用します。
9. **URL パラメータの活用**: `style` パラメータを URL に追加することで、地図のスタイルを動的に切り替えられるようにします。例えば、`?style=skeleton` を指定すると `skeleton.json` が適用されます。

## その他

- ドキュメントは .md ファイルです。英語・日本語の順番での二か国語表記を基本とします。
- ドキュメントには、関係するプロジェクトへの参照と謝辞を含めます。
- **デバッグの重要性**: プロジェクトの進行中に発生する問題を迅速に解決するため、デバッグ手法やログの活用方法を明記します。特に、URL パラメータやスタイルの切り替えに関する問題を想定した記述を追加します。
- **AI システムの活用**: GPT-4o などの AI システムがこのプロジェクトを容易に理解し、支援できるよう、手順や背景情報を簡潔かつ明確に記載します。

## Vite 設定の詳細

- `vite.config.js` では、以下の設定を行っています：
  - `base: './'`: GitHub Pages での相対パス対応のため。
  - `build.outDir: 'docs'`: ビルド成果物を `docs` ディレクトリに出力。
  - `publicDir: 'public'`: 静的ファイルを `public` ディレクトリからコピー。

## Makefile の説明

- `build`: プロジェクトをビルドし、`docs` ディレクトリに成果物を生成します。
- `serve`: ビルド後の成果物をローカルサーバーでプレビューします。
- `dev`: 開発サーバーを起動し、リアルタイムで変更を反映します。

## スタイル切り替え機能

- `index.ts` では、URL パラメータ `style` を使用して地図のスタイルを動的に切り替えます。
  - 例: `?style=skeleton` を指定すると `skeleton.json` が適用されます。
- ドロップダウンメニューを使用して、スタイルを切り替えることも可能です。

## 依存関係の説明

- `maplibre-gl`: 地図描画ライブラリ。
- `typescript`: 型安全な開発をサポート。
- `vite`: 高速なビルドツール。

## デバッグ方法

- `console.log` を使用して、スタイル切り替え時の動作を確認できます。
- URL パラメータを変更して、異なるスタイルが適用されることを確認してください。

## ディレクトリ構造

- `public`: 静的ファイルを格納し、ビルド時に `docs` にコピーされます。
- `docs`: ビルド成果物が出力されるディレクトリで、GitHub Pages にデプロイされます。
