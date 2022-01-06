import { createStore } from 'vuex'
import system from './modules/system'
import test from './modules/test'

const store = createStore({
  modules: {
    system,
    test,
  },
})

export default store
