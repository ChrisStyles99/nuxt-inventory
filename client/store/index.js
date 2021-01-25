import axios from '@nuxtjs/axios'
const baseUrl = 'http://localhost:3001/api'

export const state = () => ({
  isLoggedIn: document.cookie.includes('isLoggedIn=') || false,
  items: [],
  user: {},
  item: {},
  loginError: null
})

export const getters = () => ({
  loginError: state => state.loginError
})

export const mutations = () => ({
  login_error (state, data) {
    state.loginError = data
  },
  login (state, user) {
    state.user = user
  }
})

export const actions = () => ({
  async login ({ commit }, data) {
    const res = await axios.post(`${baseUrl}/users/login`, data)

    if (res.data.error) {
      return commit('login_error', res.data.msg)
    }

    commit('login', res.data.user)
  }
})
