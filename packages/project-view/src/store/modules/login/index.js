import * as types from './types.js'
export default {
    namespaced: true,
    state: {
        userInfo: {
            name: 'admin'
        }
    },
    mutations: {
        [types.SET_INFO](state, data) {
            state.userInfo.name = data.name
        }
    },
    actions: {},
    getters: {
        userInfo: state => {
            return state.userInfo
        }
    }
}
