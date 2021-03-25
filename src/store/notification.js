import Vue from 'vue'
import Vuex from 'vuex'
import { toast } from 'bulma-toast'
Vue.use(Vuex)
export const notification = {
  state: () => ({
    message: ''
  }),

  mutations: {
    Show_message (state, payload) {
      state.message = payload
    }
  },
  actions: {
    showMessage ({ commit }, payload) {
      toast({
        message: payload,
        type: 'is-primary',
        position: 'bottom-right',
        closeOnClick: true,
        pauseOnHover: true,
        opacity: 0.8
      })
      commit('Show_message', payload)
    }

  },
  getters: {

  }
}
