/*
 * @Author: linbin
 * @Date: 2022-02-26 15:24:40
 * @LastEditTime: 2022-03-01 20:06:48
 * @LastEditors: linbin
 * @Description: 文档配置
 * @FilePath: /vue3-template-vite/packages/project-view/docs/.vitepress/config.js
 */
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
            text: '全局组件',
            children: [
                { text: 'test', link: '/components/test/' },
                { text: 'Input 输入框', link: '/components/global/obInput/' },
                { text: 'SvgIcon 图标', link: '/components/global/svgicon/' },
            ],
        },
    ],
}
const config = {
    title: '组件文档',
    themeConfig: {
        sidebar,
    },

    // 以下是新增的
    markdown: {
        config: md => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            md.use(demoBlockPlugin)
        },
    },
}
export default config
