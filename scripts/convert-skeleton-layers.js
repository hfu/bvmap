#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the skeleton.json file
const skeletonJsonPath = path.join(__dirname, '../public/skeleton.json');
const skeletonJson = JSON.parse(fs.readFileSync(skeletonJsonPath, 'utf8'));

// Extract layers
const layers = skeletonJson.layers;

// Convert to TypeScript format
function formatValue(value, indent = 0) {
  const spaces = '  '.repeat(indent);
  
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map(item => formatValue(item, indent + 1));
    return `[\n${spaces}  ${items.join(`,\n${spaces}  `)}\n${spaces}]`;
  } else if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    const props = entries.map(([key, val]) => {
      const quotedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
      return `${quotedKey}: ${formatValue(val, indent + 1)}`;
    });
    return `{\n${spaces}  ${props.join(`,\n${spaces}  `)}\n${spaces}}`;
  } else if (typeof value === 'string') {
    return `"${value.replace(/"/g, '\\"')}"`;
  } else {
    return JSON.stringify(value);
  }
}

// Generate TypeScript content
const layersTs = layers.map(layer => {
  return `  ${formatValue(layer, 1)}`;
}).join(',\n');

const tsContent = `export const skeletonLayers = [
${layersTs}
];
`;

// Write to skeleton.ts file
const outputPath = path.join(__dirname, '../style/skeleton.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`Successfully converted ${layers.length} layers from skeleton.json to skeleton.ts`);
