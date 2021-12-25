import Home from '../views/home/Home.vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

/**
 * 路由meta参数说明
 * meta: {
 *  title: 标题
 *  isHide: 菜单是否隐藏
 * }
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: 'home' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: 'Home' },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { title: 'About' },
      },
    ],
  },
  {
    path: '/page',
    name: 'page',
    component: Layout,
    meta: { title: 'Page' },
    children: [
      {
        path: '/page/a',
        name: 'a',
        component: () => import('../views/page/pageA.vue'),
        meta: { title: 'pageA' },
        children: [
          {
            path: '/page/a',
            name: 'a',
            component: () => import('../views/page/pageA.vue'),
            meta: { title: 'pageA' },
          },
        ],
      },
      {
        path: '/page/b',
        name: 'b',
        component: () => import('../views/page/pageB.vue'),
        meta: { title: 'pageB' },
      },
      {
        path: '/page/c',
        name: 'c',
        component: () => import('../views/page/pageC.vue'),
        meta: { title: 'pageC' },
      },
      {
        path: '/page/d',
        name: 'd',
        component: () => import('../views/page/pageD.vue'),
        meta: { title: 'pageD' },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: { title: 'login', isHide: true },
  },
]

export default routes
