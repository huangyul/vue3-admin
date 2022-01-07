import { createStore } from 'vuex'
import system from './modules/system'
import test from './modules/test'

import modules from './modules'

const store = createStore({
  modules,
  // modules: {
  //   system,
  //   test,
  // },
})

export default store
