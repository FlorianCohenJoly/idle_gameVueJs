import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

// const options: PluginOptions = {
//     // You can set your default options here
// };

app.use(createPinia())
app.use(router)
app.use(Toast);

app.mount('#app')
