import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedin: false,
    admin: false,
    user: false,
    engg: false
  },
  mutations: {
    setUser (state,user) {
      state.user = user
    },
    loggedIn (state,isLoggedin) {
      state.isLoggedin = isLoggedin
    },
    isAdmin (state,admin) {
      state.admin = admin
    },
    isUser (state,user) {
      state.user = user
    },
    isEngg (state,engg) {
      state.engg = engg
    }
  },
  actions: {
    setUser ({commit},user) {
      commit('setUser',user)
    },
    loggedIn ({commit},isLoggedIn) {
      commit('loggedIn',isLoggedIn)
    },
    isAdmin ({commit},admin) {
      commit('isAdmin',admin)
    },
    isUser ({commit},user) {
      commit('isAdmin',user)
    },
    isEngg ({commit},engg) {
      commit('isAdmin',engg)
    }
  }
})
