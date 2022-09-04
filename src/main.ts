/*
 * @Author: emperor
 * @LastEditors: emperor
 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import router from './router'
import App from './App.vue'
import store from './store'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css


const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(vue3videoPlay)
app.use(store)
app.use(router)
app.mount('#app')
