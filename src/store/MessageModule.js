
export default {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {
    getMessages (state) {
      return state.messages
    }
  },
  mutations: {
    getMessages (state) {
      state.messages = ['Boilerplate', 'Web VueJS']
    }
  },
  actions: {
    getMessages (context) {
      context.commit('getMessages')
    }
  }
}
