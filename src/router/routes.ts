import Home from '../views/home/Home.vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: 'Home' },
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('../views/Page.vue'),
        meta: { title: 'Page' },
        children: [
          {
            path: '/page/a',
            name: 'a',
            component: () => import('@views/page/pageA.vue'),
            meta: { title: 'Pagea' },
          },
          {
            path: '/page/b',
            name: 'b',
            component: () => import('@views/page/pageB.vue'),
            meta: { title: 'Pageb' },
          },
          {
            path: '/page/c',
            name: 'c',
            component: () => import('@views/page/pageC.vue'),
            meta: { title: 'Pagec' },
          },
          {
            path: '/page/d',
            name: 'd',
            component: () => import('@views/page/pageD.vue'),
            meta: { title: 'Paged' },
          },
        ],
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
    path: '/login',
    name: 'login',
    component: () => import('@views/login/Login.vue'),
  },
]

export default routes
