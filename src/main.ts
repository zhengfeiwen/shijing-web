import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import * as VideoPlayer from 'vue-video-player/src'
import 'video.js/dist/video-js.css' 
import 'vue-video-player/src/custom-theme.css'// 引入css
import router from './router'
import App from './App.vue'
import store from './store'


const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(VideoPlayer)
app.use(store)
app.use(router)
app.mount('#app')
