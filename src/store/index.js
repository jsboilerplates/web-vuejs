import Vue from 'vue'
import Vuex from 'vuex'
import MessageStore from './MessageStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message: MessageStore
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
