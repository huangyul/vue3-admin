import { createStore } from 'vuex'
import system from './modules/system'
import test from './modules/test'

import modules from './modules'
import { RooteStateTypes } from './interface'

const store = createStore<RooteStateTypes>({
  modules,
})

export default store
