import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount("#app");