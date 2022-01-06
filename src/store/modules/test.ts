const test: any = {
  namespaced: true,

  state() {
    return {
      count: 0,
    }
  },

  mutations: {
    add(state) {
      state.count++
    },
  },
}

export default test
