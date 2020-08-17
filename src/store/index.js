import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carState: false
  },
  mutations: {
    carActive(state){
        state.carState = true
    }
  }
})
export default store