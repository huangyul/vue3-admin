import { Session } from '@/utils/storage'
import { Module } from 'vuex'
import { RooteStateTypes, userInfoInterface } from '../interface'

const userModule: Module<userInfoInterface, RooteStateTypes> = {
  namespaced: true,
  state: {
    userInfos: {},
    // 侧边菜单是否展开
    menuCollapse: true,
    // 路由
    routeList: [],
  },
  mutations: {
    setUserInfo(state, value) {
      state.userInfos = value
    },
    getUserInfo(state) {
      const token: string = Session.get('token')
      const username: string = token == 'admin' ? 'admin' : 'visitor'
      state.userInfos = {
        name: username,
        roles: Array.of(username),
      }
    },
    setMenu(state: any, value: boolean) {
      state.menuCollapse = value
    },
    setRouteList(state: any, value: boolean) {
      state.routeList = value
    },
    resetState(state) {
      state.userInfos = {}
      state.menuCollapse = true
      state.routeList = []
    },
  },
  actions: {
    setMenu({ commit }, value: boolean) {
      commit('setMenu', value)
    },
  },
  getters: {},
}

export default userModule
