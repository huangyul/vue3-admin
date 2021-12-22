const systemModule: any = {
  namespaced: true,
  state: {
    // 侧边菜单是否展开
    menuCollapse: false,
  },
  mutations: {
    setMenu(state: any, value: boolean) {
      state.menuCollapse = value
    },
  },
  actions: {
    setMenu({ commit }, value: boolean) {
      commit('setMenu', value)
    },
  },
  getters: {
    isCollapse(state: any) {
      return state.menuCollapse
    },
  },
}

export default systemModule
