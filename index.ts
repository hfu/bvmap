import maplibregl from 'maplibre-gl';

const urlParams = new URLSearchParams(window.location.search);
const styleParam = urlParams.get('style');
const defaultStyle = styleParam ? `./${styleParam}.json` : './colorful.json'; // Default to relative path for skeleton.json

type MapOptions = {
  container: string;
  style: string;
  center: [number, number];
  zoom: number;
  minzoom: number;
  maxzoom: number;
  hash: boolean;
};

const mapOptions: MapOptions = {
  container: 'map',
  style: defaultStyle, // Dynamically set style based on URL parameter
  center: [139.6917, 35.6895], // Tokyo
  zoom: 10,
  minzoom: 4,
  hash: true
};

const map = new maplibregl.Map(mapOptions);

map.on('load', () => {
  // GlobeControl を追加
  map.addControl(new maplibregl.GlobeControl(), 'top-right');

  // ZoomControl を追加
  map.addControl(new maplibregl.NavigationControl(), 'top-right');
});

// スタイル切替用のドロップダウンメニューを作成
const styleSwitcher = document.createElement('select');
styleSwitcher.id = 'styleSwitcher';
styleSwitcher.innerHTML = `
  <option value="colorful.json">Colorful</option>
  <option value="skeleton.json">Skeleton</option>
`;
styleSwitcher.value = styleParam ? `${styleParam}.json` : 'colorful.json'; // Set dropdown to match URL parameter

styleSwitcher.addEventListener('change', (event) => {
  const target = event.target as HTMLSelectElement;
  const newStyle = `./${target.value}`; // Use relative path for style
  console.log(`Switching to style: ${newStyle}`); // Debug log
  map.setStyle(newStyle);

  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set('style', target.value.replace('.json', ''));
  window.history.replaceState({}, '', newUrl); // Update URL with new style
});

// ドロップダウンメニューにインラインスタイルを追加
styleSwitcher.style.position = 'absolute';
styleSwitcher.style.top = '10px';
styleSwitcher.style.left = '10px';
styleSwitcher.style.zIndex = '1000';

document.body.appendChild(styleSwitcher);

map.on('click', (event) => {
  const features = map.queryRenderedFeatures(event.point);
  if (features.length) {
    const popupContent = features.map((feature) => {
      const sourceLayer = feature.layer['source-layer'];
      const properties = JSON.stringify(feature.properties, null, 2);
      return `<pre>${sourceLayer}\n${properties}</pre>`;
    }).join('<hr>');

    // Create a popup
    new maplibregl.Popup()
      .setLngLat(event.lngLat)
      .setHTML(popupContent)
      .addTo(map);
  }
});
