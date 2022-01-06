import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

// element
import ElementPlus from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'

import '@assets/styles/base/index.scss'

// 批量引入svg文件
import '@/assets/icons'

const app = createApp(App)

// 注册图标组件
import { registerComponent } from './utils/helper'
registerComponent(app)

app.use(store)
app.use(router)
// 中文化
app.use(ElementPlus, { locale: lang })
app.mount('#app')

// 添加事件总线
app.config.globalProperties.mittBus = mitt()
