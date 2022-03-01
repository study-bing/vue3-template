// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import svgIcon from './svgIcon.vue'
// 为组件提供 install 安装方法，供按需引入
svgIcon.install = app => {
	app.component(svgIcon.name, svgIcon)
}

// 单独引入，为后面按需做基础
export default {
	title: 'svgIcon',
	category: '',
	status: '100%',
	install(app) {
		app.use(svgIcon)
	}
}

export { svgIcon }
