import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import { initializeI18n } from './i18n'

// Initialize the Vue application with i18n
const app = createApp(App)
const i18n = initializeI18n()

app.use(i18n)
app.mount('#app')

