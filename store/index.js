export const actions = {
  nuxtServerInit({ dispatch }, { app }) {
    const token = app.$cookies.get('token')
    const username = app.$cookies.get('username')
    if (token) {
      dispatch('auth/setToken', token)
    }
    if (username) {
      dispatch('auth/setUsername', username)
    }
  },
}
