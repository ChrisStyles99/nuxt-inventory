const baseUrl = 'http://localhost:3001/api'

let isLoggedInToken = false

if (process.client) {
  isLoggedInToken = window.document.cookie.includes('isLoggedIn=')
}

export const state = () => ({
  isLoggedIn: isLoggedInToken,
  items: [],
  item: {},
  loginError: null
})

export const getters = {
  loginError: state => state.loginError
}

export const mutations = {
  login_error (state, data) {
    state.loginError = data
  },
  login_success (state) {
    state.isLoggedIn = true
  }
}

export const actions = {
  async login ({ commit }, data) {
    const res = await this.$axios.post(`${baseUrl}/users/login`, data, { withCredentials: true })
    console.log(res.data)

    if (res.data.error) {
      return commit('login_error', res.data.msg)
    }

    commit('login_success')
  }
}
