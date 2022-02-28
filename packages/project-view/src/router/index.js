import { createRouter, createWebHistory } from 'vue-router'

let routes = []
const routerContext = import.meta.globEager('./**/index.js')

Object.keys(routerContext).forEach(route => {
    const mod = routerContext[route].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routes.push(...modList)
})
// 获取路由信息
// 动态加载pages中所有的路由文件
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
})
router.beforeEach(async (to, from, next) => {
    document.title = `${to.meta.title}`
    // const role = localStorage.getItem('ms_username')
    // if (!role && to.path !== '/login') {
    //     next('/login')
    // } else if (to.meta.permission) {
    //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    //     role === 'admin' ? next() : next('/403')
    // } else {
    //     next()
    // }
    next()
})
export default router
