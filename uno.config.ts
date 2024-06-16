// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetLj from '@ljtool/unocss-preset'
import presetRemToPx from '@unocss/preset-rem-to-px'
export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
      prefix: 'u-',
      prefixedOnly: true,
    }),
    presetUno(),
    presetLj(),
    presetRemToPx({ baseFontSize: 4 }),
    // ...custom presets
  ],
  rules: [],
})
