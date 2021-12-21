import { createStore } from 'vuex'
import system from './modules/system'

const store = createStore({
  modules: {
    system,
  },
})

export default store
