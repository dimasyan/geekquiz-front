<template>
  <div class="game-result">
    <p class="text-3xl">Квиз на тему {{ pack.name }}</p>
    <div class="border-4 border-indigo-300 rounded-xl p-6 mx-auto mt-6 w-2/3">
      <p class="text-4xl font-bold text-center">
        Ваш результат {{ score }}/{{ game.questions.length }}
      </p>
      <div class="flex mt-12 justify-center">
        <img class="rounded" src="../../../assets/images/slip.gif" />
      </div>
      <div class="flex justify-center mt-10">
        <button @click="playAgain" class="btn btn-success mr-6">
          Сыграть еще
        </button>
        <nuxt-link to="/">
          <button class="btn btn-blue">Другая тематика</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      pack: (state) => state.packs.pack,
      game: (state) => state.game.activeGame,
      score: (state) => state.game.score,
    }),
  },
  methods: {
    ...mapActions('game', ['reset']),
    playAgain() {
      this.reset()
    },
  },
}
</script>
