# BVMap

BVMap is a web mapping project that utilizes Japan's GSI (Geospatial Information Authority) optimized vector tiles. This project creates interactive web maps using MapLibre GL JS and supports multiple map styles with dynamic switching capabilities.

国土地理院最適化ベクトルタイルを活用したウェブ地図プロジェクトです。MapLibre GL JS を使用してインタラクティブな地図を表示し、複数のマップスタイルの動的切り替えをサポートします。

## Project Background / プロジェクトの背景

- The GSI optimized vector tiles are hosted through the x-24b project using the following methods:
  - Direct PMTiles access: `https://tunnel.optgeo.org/bvmap.pmtiles`
  - TileJSON-based access: `https://tunnel.optgeo.org/martin/bvmap`
- This project leverages the TileJSON endpoint to build web maps without requiring pmtiles.js

国土地理院最適化ベクトルタイルは、x-24b プロジェクトによって以下の方法でホストされています：

- PMTiles への直接アクセス: `https://tunnel.optgeo.org/bvmap.pmtiles`
- TileJSON を介したアクセス: `https://tunnel.optgeo.org/martin/bvmap`
- このプロジェクトでは、pmtiles.js を使用せずに TileJSON エンドポイントを活用してウェブ地図を構築します

## Key Features / 主な機能

1. **Multiple Map Styles / 複数のマップスタイル**:
   - `std` - Standard colorized style / 標準カラー地図
   - `skeleton` - Outline-only style / 骨格線のみのスタイル
   - `colorful` - Enhanced colorized style / 強化カラースタイル

2. **Dynamic Style Switching / 動的スタイル切り替え**:
   - Dropdown menu for style selection / ドロップダウンメニューでのスタイル選択
   - URL parameter support (`?style=skeleton`) / URL パラメータサポート

3. **Modular Style Management / モジュール式スタイル管理**:
   - TypeScript-based layer definitions / TypeScript ベースのレイヤー定義
   - Automated JSON generation / 自動 JSON 生成

4. **Static Site Generation / 静的サイト生成**:
   - GitHub Pages compatible / GitHub Pages 対応
   - Relative path support / 相対パス対応

## Setup / セットアップ

### Prerequisites / 必要なツール

- Node.js (recommended: 16.x or higher / 推奨: 16.x 以上)
- Deno (for style generation / スタイル生成用)
- npm or yarn

### Installation / インストール

```bash
npm install
```

## Development / 開発

### Start Development Server / 開発サーバーの起動

```bash
make dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the map.
ブラウザで [http://localhost:5173](http://localhost:5173) を開いて地図を確認できます。

### Generate Styles / スタイル生成

```bash
make style
```

This command generates JSON style files from TypeScript definitions:
このコマンドは TypeScript 定義から JSON スタイルファイルを生成します：

- `public/std.json`
- `public/skeleton.json`
- `public/colorful.json`

### Build Static Site / 静的サイトのビルド

```bash
make build
```

The static site is generated in the `docs` directory for GitHub Pages deployment.
GitHub Pages デプロイ用の静的サイトが `docs` ディレクトリに生成されます。

### Preview Built Site / ビルドしたサイトのプレビュー

```bash
make serve
```

## Project Structure / プロジェクト構造

```plaintext
bvmap/
├── .github/           # GitHub configuration / GitHub 設定
├── docs/              # Built static site / ビルド済み静的サイト
├── public/            # Static assets / 静的ファイル
│   ├── std.json       # Standard style / 標準スタイル
│   ├── skeleton.json  # Skeleton style / 骨格スタイル
│   ├── colorful.json  # Colorful style / カラフルスタイル
│   └── index.css      # Global styles / グローバルスタイル
├── style/             # Style definitions / スタイル定義
│   ├── base.ts        # Base style configuration / ベーススタイル設定
│   ├── config.ts      # Style configuration / スタイル設定
│   ├── std.ts         # Standard style layers / 標準スタイルレイヤー
│   ├── skeleton.ts    # Skeleton style layers / 骨格スタイルレイヤー
│   └── colorful.ts    # Colorful style layers / カラフルスタイルレイヤー
├── generate.ts        # Style generation script / スタイル生成スクリプト
├── index.html         # HTML entry point / HTML エントリーポイント
├── index.ts           # TypeScript entry point / TypeScript エントリーポイント
├── Makefile           # Build tasks / ビルドタスク
├── tsconfig.json      # TypeScript configuration / TypeScript 設定
└── vite.config.js     # Vite configuration / Vite 設定
```

## Style Development / スタイル開発

### Adding New Layers / 新しいレイヤーの追加

1. Edit the appropriate TypeScript file in `style/`:
   `style/` 内の適切な TypeScript ファイルを編集：
   - `style/std.ts` for standard style / 標準スタイル用
   - `style/skeleton.ts` for skeleton style / 骨格スタイル用
   - `style/colorful.ts` for colorful style / カラフルスタイル用

2. Generate JSON files: / JSON ファイルを生成：

   ```bash
   make style
   ```

3. Build and test: / ビルドしてテスト：

   ```bash
   make build
   ```

### Style Switching / スタイル切り替え

The application supports style switching through:
アプリケーションは以下の方法でスタイル切り替えをサポートします：

- Dropdown menu in the top-left corner / 左上のドロップダウンメニュー
- URL parameters: `?style=std`, `?style=skeleton`, `?style=colorful`
- URL パラメータ: `?style=std`, `?style=skeleton`, `?style=colorful`

### Color Format Guidelines / 色形式ガイドライン

For consistency across all map styles, follow these color format guidelines:
すべてのマップスタイルで一貫性を保つため、以下の色形式ガイドラインに従ってください：

#### Recommended Color Format / 推奨色形式

1. **Hex Colors / Hex カラー**: Use lowercase 6-digit hex format
   - ✅ `"#ffffff"` (推奨)
   - ❌ `"#FFFFFF"` (大文字は避ける)
   - ❌ `"#fff"` (3桁形式は避ける)

2. **Opaque Colors / 不透明色**: Use hex format for better readability
   - ✅ `"#000000"` (推奨)
   - ❌ `"rgba(0,0,0,1)"` (冗長)

3. **Transparent Colors / 透明色**: Use rgba() only when transparency is needed
   - ✅ `"rgba(255,255,255,0)"` (透明度が必要な場合)
   - ✅ `"rgba(0,0,0,0.5)"` (半透明)

#### Current Status / 現在の状況

The `colorful.json` style currently has mixed color formats that should be standardized:
`colorful.json` スタイルは現在、以下の色形式が混在しており、統一が必要です：

- Hex colors with mixed case: `#FFFFFF`, `#eeeeee`
- Redundant rgba for opaque colors: `rgba(0,0,0,1)` instead of `#000000`
- Inconsistent transparent color notation

大小文字混在のHexカラー、不透明色での冗長なrgba表記、一貫性のない透明色記法が混在しています。

#### Benefits of Standardization / 標準化のメリット

- **Maintainability / 保守性**: Easier to read and modify color values
- **Performance / パフォーマンス**: Slightly better parsing performance with hex colors
- **Consistency / 一貫性**: Uniform codebase across all styles
- **Readability / 可読性**: Cleaner, more professional appearance

色値の読み取りと変更が容易、Hexカラーでの軽微なパフォーマンス向上、全スタイルでの統一されたコードベース、よりクリーンで専門的な外観

## Technology Stack / 技術スタック

- **MapLibre GL JS**: Web mapping library / ウェブ地図ライブラリ
- **TypeScript**: Type-safe JavaScript / 型安全な JavaScript
- **Vite**: Build tool and dev server / ビルドツールと開発サーバー
- **Deno**: TypeScript runtime for style generation / スタイル生成用 TypeScript ランタイム

## References / 参照

- [GSI Optimized Vector Tiles / 国土地理院最適化ベクトルタイル](https://github.com/gsi-cyberjapan/optimal_bvmap)
- [MapLibre GL JS](https://maplibre.org/)
- [Vite](https://vitejs.dev/)
- [PMTiles](https://github.com/protomaps/PMTiles)
- [x-24b Project / x-24b プロジェクト](https://github.com/unvt/x-24b)
- [Technical Background and Philosophy / 技術的な背景と思想](.github/copilot-instructions.md)

## Acknowledgments / 謝辞

This project acknowledges the contributions of:
このプロジェクトは以下の貢献に感謝します：

- Geospatial Information Authority of Japan (GSI) / 国土地理院
- The open-source mapping community / オープンソース地図コミュニティ
- MapLibre GL JS developers / MapLibre GL JS 開発者
- Vite development team / Vite 開発チーム
- UNVT community for the x-24b project / x-24b プロジェクトの UNVT コミュニティ

## License / ライセンス

This project is licensed under the MIT License.
このプロジェクトは MIT ライセンスの下で提供されています。
