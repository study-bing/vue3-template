/*
 * @Author: linbin
 * @Date: 2022-02-28 10:46:18
 * @LastEditTime: 2022-02-28 16:09:04
 * @LastEditors: linbin
 * @Description: 基础模块的路由
 * @FilePath: /vue3-template-vite/packages/project-view/src/router/baseModules/index.js
 */
const Login = () => import('$pages/login/Login.vue')
const Home = () => import('$pages/home/Home.vue')
const noPage = () => import(/* webpackChunkName: "404" */ '$pages/base/404.vue')
const noRoot = () => import(/* webpackChunkName: "403" */ '$pages/base/403.vue')
let routerList = [
    {
        meta: {
            title: '登录',
            activePath: 'login',
        },
        path: '/',
        component: Login,
    },
    {
        meta: {
            title: 'Home',
            activePath: 'home',
        },
        path: '/home',
        component: Home,
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '找不到页面',
        },
        component: noPage,
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: noRoot,
    },
]
export default routerList
