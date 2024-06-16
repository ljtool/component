import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import appInfo from './package.json'
import { join } from 'path'

const resolve = (path: string) => {
  return join(__dirname, path)
}
export default defineConfig({
  plugins: [UnoCSS()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  define: {
    APP_VERSION: JSON.stringify(
      appInfo.version + '@' + new Date().toLocaleString(),
    ),
  },
})
