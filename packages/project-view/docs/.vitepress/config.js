/*
 * @Author: linbin
 * @Date: 2022-02-26 15:24:40
 * @LastEditTime: 2022-02-26 15:40:23
 * @LastEditors: linbin
 * @Description: 文档配置
 * @FilePath: /ct-saas/packages/saas-view/docs/.vitepress/config.js
 */
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
	'/': [
		{ text: '快速开始', link: '/' },
		{
			text: '通用',
			children: [{ text: 'Input 输入框', link: '/components/obInput/' }]
		}
	]
}
const config = {
	themeConfig: {
		sidebar
	},

	// 以下是新增的
	markdown: {
		config: md => {
			// 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
			md.use(demoBlockPlugin)
		}
	}
}
export default config
