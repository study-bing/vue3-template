import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.globEager('../pages/**/router.js')
let routeModuleList = []
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
})
// 获取路由信息
// 动态加载pages中所有的路由文件
const router = createRouter({
    history: createWebHistory(),
    routes: routeModuleList,
})

export default router
