// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import test from './Test.vue'
// 为组件提供 install 安装方法，供按需引入
test.install = app => {
    app.component(test.name, test)
}

// 单独引入，为后面按需做基础
export default {
    title: 'test',
    category: '',
    status: '100%',
    install(app) {
        app.use(test)
    },
}

export { test }
