/* 模拟登陆相关方法 */

import { Session } from './storage'

const login = (username: string) => {
  // 设置token
  setToken()
  // 判断是什么用户
  if (username == 'admin') {
    adminLogin()
  } else {
    visitorLogin()
  }
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
}

/**
 * 游客登陆
 */
function visitorLogin() {}

/**
 * 设置token
 */
function setToken() {
  Session.set('token', 'token')
}

export default login
