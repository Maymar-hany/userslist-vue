import Vue from 'vue'
import Vuex from 'vuex'
import { notification } from './notification'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    notification: notification

  },
  state: {
    users: [],
    user: {},
    total: ' ',
    currentPage: ''

  },

  mutations: {
    saveUsers (state, users) {
      state.users = users
    },

    totalPages (state, total) {
      state.total = total
    },
    User_Profile (state, userid) {
      state.user = state.users.find(u => u.id === userid)
    },
    DELETE_USER (state, user) {
      var index = state.users.findIndex(u => u.id === user)
      state.users.splice(index, 1)
    },

    setData (state, payload) {
      state[payload.name] = payload.data

      var index = state.users.findIndex(u => u.id === payload.data.id)
      state.users.splice(index, 1, payload.data)
    },
    Current_Page (state, payload) {
      state.currentPage = payload
    }

  },
  actions: {
    loadUsers  ({ commit }, payload) {
      Vue.http.get('https://reqres.in/api/users?page=' + payload).then(function (data) {
        commit('totalPages', data.body.total_pages)
        commit('saveUsers', data.body.data)
      })
    },
    getUser ({ commit }, payload) {
      commit('User_Profile', payload)
    }

  },
  getters: {

    userData: state => {
      return state.user
    },
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === id)
    },
    getUsers: (state) => {
      return state.users
    },
    getPage: (state) => {
      return state.currentPage
    }

  }
}

)
