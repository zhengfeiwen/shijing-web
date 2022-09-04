import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import store from './store'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
