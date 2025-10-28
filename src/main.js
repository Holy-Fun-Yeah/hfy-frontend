import { createApp } from 'vue'

import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import { applyBrandConfig } from "@/config/brand"

applyBrandConfig()

createApp(App).use(router).mount('#app')
