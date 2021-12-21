import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element
import ElementPlus from 'element-plus'
import '@assets/styles/base/index.scss'

const app = createApp(App)

// 注册图标组件
import { registerComponent } from './utils/helper'
registerComponent(app)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
