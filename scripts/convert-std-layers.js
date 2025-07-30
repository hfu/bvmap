#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the std.json file
const stdJsonPath = path.join(__dirname, '../public/std.json');
const stdJson = JSON.parse(fs.readFileSync(stdJsonPath, 'utf8'));

// Extract layers
const layers = stdJson.layers;

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

const tsContent = `export const stdLayers = [
${layersTs}
];
`;

// Write to std.ts file
const outputPath = path.join(__dirname, '../style/std.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`Successfully converted ${layers.length} layers from std.json to std.ts`);
