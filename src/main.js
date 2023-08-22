import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import '../public/index.css'
// axios.defaults.headers = {
//     'Headers': store.state.token,
//     'Content-Type':'application/json'
// }


// Set default headers for Axios




createApp(App).use(store).use(router).mount('#app')
