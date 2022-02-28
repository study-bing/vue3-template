import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src'),
            $components: path.join(__dirname, '../src/components'),
            $assets: path.join(__dirname, '../src/assets'),
            $services: path.join(__dirname, '../src/services'),
            $pages: path.join(__dirname, '../src/pages'),
            $modules: path.join(__dirname, '../src/modules')
        }
    },
    // 服务配置
    server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: false,
        https: false,
        // 反向代理
        // proxy: {
        //   '/admin': {
        //     target: '',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/admin/, '')
        //   },
        // }
    }
})
