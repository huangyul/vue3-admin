import { Session } from '@/utils/storage'
import { Module } from 'vuex'
import { RooteStateTypes, userInfoInterface } from '../interface'

const userModule: Module<userInfoInterface, RooteStateTypes> = {
  namespaced: true,
  state: {
    userInfos: {},
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
  },
  actions: {},
  getters: {},
}

export default userModule
