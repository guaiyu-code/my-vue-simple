import { createApp } from 'vue'
import 'element-plus/dist/index.css'

import App from './App.vue'
import ElementPlus from 'element-plus'
import { store } from '@/pinia'

const app = createApp(App)

app
.use(ElementPlus, { locale: "zhCn"})
.use(store)
.mount('#app')

export default app