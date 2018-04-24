import Vue from 'vue'
import Vuex from 'vuex'
import MessageStore from './MessageStore'

Vue.use(Vuex)

export default {
  createNewStore () {
    return new Vuex.Store({
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
  }
}
