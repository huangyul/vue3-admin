/* 模拟登陆相关方法 */

import store from '@/store'
import { Session } from './storage'

const login = (username: string) => {
  // 设置token
  setToken(username)
  // // 判断是什么用户
  // if (username == 'admin') {
  //   adminLogin()
  // } else {
  //   visitorLogin()
  // }
}

/**
 * 管理员登陆
 */
function adminLogin() {
  // 设置用户信息
  const userInfo = {
    name: 'admin',
    roles: ['admin'],
  }
  store.commit('userInfos/setUserInfo', userInfo)
}

/**
 * 游客登陆
 */
function visitorLogin() {
  // 设置用户信息
  const userInfo = {
    name: 'visitor',
    roles: ['visitor'],
  }
  store.commit('userInfos/setUserInfo', userInfo)
}

/**
 * 设置token
 */
function setToken(username: string) {
  Session.set('token', username)
}

export default login
