import to from 'await-to-js'
import api from '~/api/index'

export default {
  async getPacks({ commit }) {
    const [err, resp] = await to(api.packs.getPacks())
    if (err) {
      console.error(err)
    } else {
      commit('setPacks', resp.data.results)
    }
  },
}
