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
  maxzoom?: number;
  hash: boolean;
};

const mapOptions: MapOptions = {
  container: 'map',
  style: defaultStyle, // Dynamically set style based on URL parameter
  center: [139.6917, 35.6895], // Tokyo
  zoom: 10,
  minzoom: 4,
  maxzoom: 18,
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
  <option value="colorful.json">colorful</option>
  <option value="skeleton.json">skeleton</option>
  <option value="std.json">std</option>
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

// マップクリック時に属性を吹き出し表示（optgeo/openmaptiles と同様の形式）
map.on('click', (event) => {
  const features = map.queryRenderedFeatures(event.point);
  if (features.length > 0) {
    const popupContent = features.map((feature) => {
      const layerId = feature.layer.id;
      const sourceLayer = (feature.layer as any)['source-layer'];
      const properties = JSON.stringify(feature.properties, null, 2);
      
      return `<div style="margin-bottom: 10px;">
        <strong style="color: #0066cc;">${layerId}</strong>
        ${sourceLayer ? `<br><small style="color: #666;">Source: ${sourceLayer}</small>` : ''}
        <pre style="background: #f5f5f5; padding: 8px; margin: 4px 0; border-radius: 4px; font-size: 11px; overflow-x: auto;">${properties}</pre>
      </div>`;
    }).join('<hr style="margin: 8px 0; border: none; border-top: 1px solid #ddd;">');

    // Create a popup with improved styling
    new maplibregl.Popup({ 
      closeOnClick: true,
      maxWidth: '400px'
    })
      .setLngLat(event.lngLat)
      .setHTML(`<div style="max-height: 300px; overflow-y: auto;">${popupContent}</div>`)
      .addTo(map);
  }
});
