export const actions = {
  nuxtServeInit({ dispatch }) {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if (token) {
      dispatch('auth/setToken', token)
    }
    if (username) {
      dispatch('auth/setUsername', username)
    }
  },
}
