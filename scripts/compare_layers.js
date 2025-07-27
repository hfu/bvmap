import fs from 'fs';

// Load skeleton.json and colorful.json
const skeleton = JSON.parse(fs.readFileSync('./docs/skeleton.json', 'utf-8'));
const colorful = JSON.parse(fs.readFileSync('./public/colorful.json', 'utf-8'));

// Extract layer IDs
const skeletonLayerIds = skeleton.layers.map(layer => layer.id);
const colorfulLayerIds = colorful.layers.map(layer => layer.id);

// Find missing layers
const missingInColorful = skeletonLayerIds.filter(id => !colorfulLayerIds.includes(id));

console.log('Layers missing in colorful.json:', missingInColorful);
