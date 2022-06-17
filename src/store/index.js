import Vue from 'vue'
import Vuex from 'vuex'
import medicine from './modules/medicine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    medicine
  }
})
