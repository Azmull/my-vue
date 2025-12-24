import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

window.js_global_title = '這是javascript全域變數'
app.config.globalProperties.$propertyTitle='這是全域屬性變數'

app.provide('provideTitle','這是provide變數')






// mount這行要放最後
app.mount('#app')