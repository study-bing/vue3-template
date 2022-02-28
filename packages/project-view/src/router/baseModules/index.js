/*
 * @Author: linbin
 * @Date: 2022-02-28 10:46:18
 * @LastEditTime: 2022-02-28 11:21:49
 * @LastEditors: linbin
 * @Description: 基础模块的路由
 * @FilePath: /ct-saas/packages/saas-view/src/router/baseModules/index.js
 */
const Login = () => import('$pages/login/Login.vue');
const Home = () => import('$pages/home/Home.vue');
let routerList = [
    {
        meta: {
            title: '登录',
            activePath: 'login'
        },
        path: '/login',
        component: Login
    },
    {
        meta: {
            title: 'Home',
            activePath: 'home'
        },
        path: '/home',
        component: Home
    }
];
export default routerList;
