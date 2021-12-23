import Home from '../views/Home.vue'
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
    ],
  },
  {
    path: '/a',
    name: 'a',
    redirect: '/about',
    component: Layout,
    children: [
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
