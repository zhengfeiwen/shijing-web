import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import './style.css'
import router from './router'
import App from './App.vue'
import store from './store'


const app = createApp(App)
app.use(ArcoVue)
app.use(store)
app.use(router)
app.mount('#app')
