import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import routerb from './router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(routerb)

app.mount('#app')
