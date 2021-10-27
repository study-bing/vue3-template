import { createRouter, createWebHistory } from 'vue-router'

// 获取路由信息
// 动态加载pages中所有的路由文件
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require(`@/pages${ key.replace('.', '')}`);
  return page.default;
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
