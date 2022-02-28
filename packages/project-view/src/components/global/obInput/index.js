/*
 * @Author: linbin
 * @Date: 2021-10-27 16:45:57
 * @LastEditTime: 2022-02-28 09:46:18
 * @LastEditors: linbin
 * @Description:
 * @FilePath: /ct-saas/packages/saas-view/src/components/obInput/index.js
 */
// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import ObInput from './ObInput.vue'
// 为组件提供 install 安装方法，供按需引入
ObInput.install = app => {
	app.component(ObInput.name, ObInput)
}

// 单独引入，为后面按需做基础
export default {
	title: 'Input 输入框',
	category: '表单',
	status: '100%',
	install(app) {
		app.use(ObInput)
	}
}

export { ObInput }
