// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
export default defineConfig({
  rules: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-useless-escape
    [/^fs-([\d]+)$/, ([_, num]) => ({ 'font-size': `${num}px` })],
    [/^flex([\d]+)$/, ([_, num]) => ({ flex: `${num}` })],
  ],
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
    // ...custom presets
  ],
});
