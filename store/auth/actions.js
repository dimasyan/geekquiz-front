import to from 'await-to-js'
import api from '~/api/index'

export default {
  async signIn({ commit }, data) {
    const [err, resp] = await to(api.auth.login(data))
    if (err) {
      console.log(err)
    } else {
      commit('setUser', resp.data)
    }
  },
  async register({ commit }, data) {
    const [err, resp] = await to(api.auth.register(data))
    if (err) {
      console.log(err)
    } else {
      commit('setUser', resp.data)
    }
  },
  logout({ commit }) {
    commit('logout')
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
}
