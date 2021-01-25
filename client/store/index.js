const baseUrl = 'http://localhost:3001/api'

export const state = () => ({
  products: [],
  product: {},
  loginError: null,
  productsError: null
})

export const getters = {
  loginError: state => state.loginError
}

export const mutations = {
  login_error (state, data) {
    state.loginError = data
  },
  login_success (state) {
    state.loginError = null
  },
  get_products_error (state, data) {
    state.productsError = data
  },
  get_products (state, data) {
    state.products = data
  }
}

export const actions = {
  async login ({ commit }, data) {
    const res = await this.$axios.post(`${baseUrl}/users/login`, data, { withCredentials: true })

    if (res.data.error) {
      return commit('login_error', res.data.msg)
    }

    commit('login_success')
  },
  async getProducts({commit}) {
    const res = await this.$axios.get(`${baseUrl}/products/`, { withCredentials: true })
    if (res.data.error) {
      return commit('get_products_error', res.data.msg)
    }
    commit('get_products', res.data.products)
  }
}
