const systemModule: any = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {
    isCollapse(state: any) {
      return state.menuCollapse
    },
  },
}

export default systemModule
