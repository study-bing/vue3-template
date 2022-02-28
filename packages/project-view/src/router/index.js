import { createRouter, createWebHistory } from 'vue-router';

let routes = [];
const routerContext = import.meta.globEager('./**/index.js');

Object.keys(routerContext).forEach(route => {
    const mod = routerContext[route].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routes.push(...modList);
});
// 获取路由信息
// 动态加载pages中所有的路由文件
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
router.beforeEach(async (to, from, next) => {
    next();
});
export default router;
