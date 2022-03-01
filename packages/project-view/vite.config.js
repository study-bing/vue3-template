import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('src'),
            $components: path.resolve('src/components'),
            $assets: path.resolve('src/assets'),
            $services: path.resolve('src/services'),
            $pages: path.resolve('src/pages'),
            $modules: path.resolve('src/modules'),
        },
    },
    server: {
        host: '0.0.0.0',
    },
})
