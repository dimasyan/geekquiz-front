import to from 'await-to-js'
import api from '~/api/index'

export default {
  async signIn({ commit }, data) {
    const [err, resp] = await to(api.auth.login(data))
    if (err) {
      console.log(err)
    } else {
      commit('signIn', resp.data)
    }
  },
  async register({ commit }, data) {
    const [err, resp] = await to(api.auth.register(data))
    if (err) {
      console.log(err)
    } else {
      commit('register', resp.data)
    }
  },
  logout({ commit }) {
    commit('logout')
  },
}
