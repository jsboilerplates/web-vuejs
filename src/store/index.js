import Vue from 'vue'
import Vuex from 'vuex'
import MessageModule from './MessageModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message: MessageModule
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
