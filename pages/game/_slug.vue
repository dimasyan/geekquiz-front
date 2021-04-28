<template>
  <div class="container mx-auto">
    <div class="game-container">
      <Intro v-if="gameStatus === 0" />
      <Game v-if="gameStatus === 1" />
      <Result v-if="gameStatus === 2" />
    </div>
  </div>
</template>

<script>
import Intro from '@/components/pages/game/Intro'
import Game from '@/components/pages/game/Game'
import Result from '@/components/pages/game/Result'
import { mapState } from 'vuex'
export default {
  components: { Intro, Game, Result },
  async fetch({ store, params }) {
    try {
      await store.dispatch('packs/getPack', params.slug)
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    ...mapState({
      gameStatus: (state) => state.game.status,
      score: (state) => state.game.score,
    }),
  },
}
</script>
