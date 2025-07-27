## このプロジェクトの背景

- https://github.com/unvt/x-24b が成功した結果、国土地理院最適化ベクトルタイルが次の方法でホストされるようになりました。
  - https://tunnel.optgeo.org/bvmap.pmtiles により、PMTiles に直接アクセスする方法。
  - https://tunnel.optgeo.org/martin/bvmap から提供される TileJSON によって、https://tunnel.optgeo.org/martin/bvmap/{z}/{x}/{y} からベクトルタイルにアクセスする方法。
- 結果として、pmtiles.js を用いることなく国土地理院最適化ベクトルタイルにアクセスするウェブ地図を作成できる機会が巡ってきました。

## このプロジェクトの目的

1. https://raw.githubusercontent.com/gsi-cyberjapan/optimal_bvmap/refs/heads/main/style/skeleton.json を踏襲した MapLibre GL JS のウェブ地図を実現します。
2. https://github.com/optgeo/openmaptiles で確立された方法を踏襲します
3. skeleton.json ベースの地図を実現した後は、配色を工夫したスタイル colorful.json を作成し、それらのスタイルが切り替えられるようにします。

## プロジェクト実現の手順

1. このドキュメントの記載内容の説明が不十分なところを充実させ、書き換えます。
2. このドキュメントのここまでの記載に示された URL が実際にアクセス可能であることを確認するとともに、そのコンテンツを読み込んで理解します。
3. MapLibre Style 記述である skeleton.json を作成します。https://raw.githubusercontent.com/gsi-cyberjapan/optimal_bvmap/refs/heads/main/style/skeleton.json のうち、sources.v.tiles が削除され、sources.v.url に https://tunnel.optgeo.org/martin/bvmap を設定することになるでしょう。
4. skeleton.json の内容が適正であることを確認します。
5. MapLibre GL JS サイトを Vite を使って作成します。静的サイトは docs に出力します。
6. 一旦、ウェブ地図として完成させます。
7. colorful.json を作成し、ウェブ地図の左上のドロップダウンメニューから style を切り替えられるようにします。この部分は、https://github.com/optgeo/openmaptiles で確立された方法をなるべく忠実に踏襲します。
