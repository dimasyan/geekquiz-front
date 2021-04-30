export default {
  setUser(state, data) {
    state.token = data.token
    state.username = data.user.username
    state.isAuth = true
    state.id = data.user.id
    localStorage.setItem('token', state.token)
    localStorage.setItem('username', state.username)
  },
  logout(state) {
    state.token = null
    state.username = null
    state.isAuth = false
    state.id = null
    localStorage.removeItem('token')
    localStorage.removeItem('username')
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
