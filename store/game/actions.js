import to from 'await-to-js'
import api from '~/api/index'

export default {
  async createGame({ commit }, packId) {
    const [err, resp] = await to(api.game.createGame(packId))
    if (err) {
      console.log(err)
    } else {
      commit('setNewGame', resp.data)
    }
  },
  async finishGame({ commit }, data) {
    console.log(data.gameId)
    console.log(data.score)
    const [err, resp] = await to(api.game.updateGame(data.gameId, data.score))
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
}
