import to from 'await-to-js'
import api from '~/api/index'

export default {
  async createGame({ commit, rootState }, packId) {
    const [err, resp] = await to(
      api.game.createGame(packId, rootState.auth.token)
    )
    if (err) {
      console.log(err)
    } else {
      commit('setNewGame', resp.data)
    }
  },
  async finishGame({ commit, rootState }, data) {
    const [err, resp] = await to(
      api.game.updateGame(data.gameId, data.score, rootState.auth.token)
    )
    if (err) {
      console.log(err)
    } else {
      commit('finishGame', resp.data)
    }
  },
  answer({ commit }, isCorrect) {
    commit('answerQuestion', isCorrect)
  },
  reset({ commit }) {
    commit('reset')
  },
  async getGamesHistory({ commit, rootState }) {
    const [err, resp] = await to(api.game.getHistory(rootState.auth.token))
    if (err) {
      console.log(err)
    } else {
      commit('setGamesHistory', resp.data)
    }
  },
}
