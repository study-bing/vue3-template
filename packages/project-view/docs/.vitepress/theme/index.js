/*
 * @Author: linbin
 * @Date: 2022-02-26 15:25:44
 * @LastEditTime: 2022-02-28 14:59:13
 * @LastEditors: linbin
 * @Description: 配置文档主题
 * @FilePath: /vue3-template-vite/packages/project-view/docs/.vitepress/theme/index.js
 */
import Theme from 'vitepress/dist/client/theme-default'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'
let comList = []
const comContext = import.meta.globEager('../../../src/components/**/index.js')
console.log(comContext)
Object.keys(comContext).forEach(com => {
    const mod = comContext[com].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    comList.push(...modList)
})
export default {
    ...Theme,
    enhanceApp({ app }) {
        registerComponents(app)
        app.use(ElementPlus)
        comList.forEach(com => {
            app.use(com)
        })
    },
}
