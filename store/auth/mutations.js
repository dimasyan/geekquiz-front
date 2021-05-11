export default {
  setUser(state, data) {
    state.token = data.token
    state.username = data.user.username
    state.isAuth = true
    state.id = data.user.id
    this.$cookies.set('token', state.token)
    this.$cookies.set('username', state.username)
    // localStorage.setItem('token', state.token)
    // localStorage.setItem('username', state.username)
  },
  setProfile(state, data) {
    state.profile = { ...data }
  },
  logout(state) {
    state.token = null
    state.username = null
    state.isAuth = false
    state.id = null
    this.$cookies.remove('token')
    this.$cookies.remove('username')
    // localStorage.removeItem('token')
    // localStorage.removeItem('username')
  },
  setToken(state, token) {
    state.token = token
    state.isAuth = true
  },
  setUsername(state, username) {
    state.username = username
    state.isAuth = true
  },
}
