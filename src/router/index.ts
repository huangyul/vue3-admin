import store from '@/store'
import { Local, Session } from '@/utils/storage'
import { addTag } from '@/utils/tagsview'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { dynamicRoutes, routes } from './routes'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 进度条配置
Nprogress.configure({
  showSpinner: false, // 是否显示圈圈
})

router.beforeEach((to, from, next) => {
  // 将路由添加到tagsview中，如果是主页，则不需要添加
  // addTag(to)
  // 开启进度条
  Nprogress.start()

  // 判断是否有token
  if (!Session.get('token')) {
    // 没有token的情况下，清空所有缓存
    Session.clear()
    Local.clear()
    // 如果去登录页，就放行
    if (to.path == '/login') {
      next()
    } else {
      // 回到登录页
      next('/login')
    }
  } else {
    // 判断有没有用户信息，防止刷新时vuex丢失数据
    const userInfo: any = store.state.userInfos.userInfos
    if (!userInfo.roles) {
      // 如果没有用户信息，重新获取一次用户信息
      store.commit('userInfos/getUserInfo')
      // 添加动态路由
      addDynamicRoute()
      next({ ...to, replace: true })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})

/**
 * 根据权限生成路由
 */
function generateRoute(): Array<RouteRecordRaw> {
  const userInfo: any = store.state.userInfos.userInfos
  const asyncRoute = dynamicRoutes
  return comparePermission(userInfo.roles, asyncRoute)
}

/**
 * 对比权限
 * @param roles
 * @param routes
 */
function comparePermission(
  roles: Array<string>,
  routes: Array<RouteRecordRaw>
): Array<RouteRecordRaw> {
  const asyncRoute: Array<RouteRecordRaw> = []
  routes.forEach((route) => {
    asyncRoute.push(judgmentRoute(route, roles))
  })
  return asyncRoute
}

function judgmentRoute(route: RouteRecordRaw, roles: Array<string>) {
  const routes: RouteRecordRaw = {
    ...route,
  }
  // debugger
  routes.children = []
  route.children.forEach((r) => {
    if (r.children && r.children.length > 0) {
      r.children = judgmentRoute(r, roles).children
    }
    if (!r.meta.roles) {
      routes.children.push(r)
    } else {
      if (hasPermission(roles, r)) {
        routes.children.push(r)
      }
    }
  })
  return routes
}

/**
 * 判断菜单是否有权限
 * @param roles 用户的权限
 * @param route 当前要判断的菜单
 * @returns boolean
 */
function hasPermission(roles: Array<string>, route: RouteRecordRaw): boolean {
  return roles.some((role) => {
    const roles: Array<string> = route.meta.roles as Array<string>
    return roles.includes(role)
  })
}

/**
 * 添加路由到路由表中
 * @param routes
 */
function addDynamicRoute() {
  const routes: Array<RouteRecordRaw> = generateRoute()
  routes.forEach((route) => {
    router.addRoute(route)
  })
  // 将路由表保存到vuex中
  store.commit('userInfos/setRouteList', [...router.options.routes, ...routes])
}

/**
 * 删除路由
 */
export function resetRoute() {
  generateRoute().forEach((route) => {
    const routeName = route.name
    router.hasRoute(routeName) && router.removeRoute(routeName)
  })
}

export default router
