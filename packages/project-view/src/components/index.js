/*
 * @Author: linbin
 * @Date: 2022-03-01 18:58:45
 * @LastEditTime: 2022-03-01 19:04:08
 * @LastEditors: linbin
 * @Description: 自动加载global下的组件
 * @FilePath: /vue3-template-vite/packages/project-view/src/components/index.js
 */
let comList = []
const comContext = import.meta.globEager('../components/global/**/index.js')
Object.keys(comContext).forEach(com => {
    const mod = comContext[com].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    comList.push(...modList)
})
export default {
    // 实现vue3插件，需要实现一个install方法
    // 将来接收一个App实例，createApp()
    install(app) {
        comList.forEach(com => {
            app.use(com)
        })
    },
}
