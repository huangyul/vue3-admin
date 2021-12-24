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
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('../views/Page.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
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
