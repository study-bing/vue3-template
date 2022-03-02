import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'
import components from '$components'
createApp(App).use(router).use(store).use(components).mount('#app')
