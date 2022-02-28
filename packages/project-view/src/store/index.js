import { createStore } from 'vuex'

// import * as types from './types'

// 动态加载modules
const modules = {}
const files = import.meta.globEager('./modules/**/index.js')
Object.keys(files).forEach((key) => {
    // 获取名字
    const modulePath = key.replace('./modules/', '')
    const moduleName = modulePath.replace('/index.js', '')
    modules[`${moduleName}`] = files[key].default || {}
})
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: modules,
})
export default store
