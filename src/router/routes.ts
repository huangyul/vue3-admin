import Home from '../views/home/Home.vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

/**

 * 测试
 */

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: { title: 'login', isHide: true },
  },
]

/**
 * 根据权限动态加入的路由
 * 路由meta参数说明
 * meta: {
 *  title: 标题
 *  isHide: 菜单是否隐藏
 *  icon: 图标
 *  roles: 权限
 * }
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: 'home', icon: 'dashboard' },
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
    path: '/a',
    name: 'aabout',
    component: Layout,
    redirect: '/a/about',
    meta: { icon: 'eye', title: 'about' },
    children: [
      {
        path: '/a/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { roles: ['admin', 'visitor'] },
      },
    ],
  },
  {
    path: '/page',
    name: 'page',
    component: Layout,
    redirect: '/page/a',
    meta: { title: 'Page', icon: 'eye' },
    children: [
      {
        path: '/page/a',
        name: 'a',
        component: () => import('../views/page/pageA.vue'),
        meta: { title: 'pageA', roles: ['admin', 'visitor'] },
      },
      {
        path: '/page/b',
        name: 'b',
        component: () => import('../views/page/pageB.vue'),
        meta: { title: 'pageB', roles: ['admin'] },
      },
      {
        path: '/page/c',
        name: 'c',
        component: () => import('../views/page/pageC.vue'),
        meta: { title: 'pageC', roles: ['admin'] },
      },
    ],
  },
]
