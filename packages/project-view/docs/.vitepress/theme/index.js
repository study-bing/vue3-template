/*
 * @Author: linbin
 * @Date: 2022-02-26 15:25:44
 * @LastEditTime: 2022-02-28 09:56:11
 * @LastEditors: linbin
 * @Description: 配置文档主题
 * @FilePath: /ct-saas/packages/saas-view/docs/.vitepress/theme/index.js
 */
import Theme from 'vitepress/dist/client/theme-default'
import ObInput from '$components/obInput'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

export default {
	...Theme,
	enhanceApp({ app }) {
		registerComponents(app)
        app.use(ElementPlus)
        app.use(ObInput)
	}
}
