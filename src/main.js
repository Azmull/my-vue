import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persistedstate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

// app.use(createPinia())
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

window.js_global_title = '這是javascript全域變數'
app.config.globalProperties.$propertyTitle='這是全域屬性變數'

app.provide('provideTitle','這是provide變數')






// mount這行要放最後
app.mount('#app')
