import { addTag } from '@/utils/tagsview'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 将路由添加到tagsview中，如果是主页，则不需要添加
  addTag(to)
  next()
})

export default router
