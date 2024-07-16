import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import router from './router/router.ts'
import App from './App.vue'

const store = createPinia()
const app = createApp(App)

app.use(router).use(store).mount('#app')