import { writeFileSync } from "node:fs";
import { config } from "./style/config.ts";
import { base } from "./style/base.ts";

const populateDefaults = (base: any, overrides: any) => {
  return { ...base, ...overrides };
};

async function generateStyles() {
  for (const name of config.jsons) {
    const module = await import(`./style/${name}.ts`);
    const layers = module[`${name}Layers`];

    const styleConfig = populateDefaults(base, { layers });
    
    styleConfig.name = name;
    
    const filePath = `public/${name}.json`;
    writeFileSync(filePath, JSON.stringify(styleConfig, null, 2));
    console.log(`${filePath} を生成しました`);
  }
}

generateStyles().catch((error) => {
  console.error("スタイル生成中にエラーが発生しました:", error);
});
