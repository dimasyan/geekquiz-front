<template>
  <div class="game-game">
    <p class="text-3xl">Квиз на тему {{ pack.name }}</p>
    <div
      class="game-question border-2 border-indigo-700 rounded p-8 mx-auto mt-6 w-2/3"
      v-if="activeQuestion"
    >
      <p class="text-2xl">Вопрос №{{ questionIndex + 1 }}</p>
      <p class="text-xl mt-4">
        {{ activeQuestion.question_text }}
      </p>
      <div class="game-question-choices flex flex-wrap justify-between mt-8">
        <div
          class="w-5/12 p-4 rounded border-2 border-indigo-400 cursor-pointer mb-5"
          v-for="choice in activeQuestion.choices"
          :key="choice.id"
          @click="submitAnswer(choice)"
        >
          {{ choice.choice_text }}
        </div>
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
      questionIndex: (state) => state.game.questionIndex,
      finished: (state) => state.game.finished,
      score: (state) => state.game.score,
      status: (state) => state.game.status,
    }),
    activeQuestion() {
      return this.status === 1 ? this.game.questions[this.questionIndex] : null
    },
  },
  watch: {
    finished(val) {
      if (val) {
        this.finishGame({
          gameId: this.game.id,
          score: this.score,
        })
      }
    },
  },
  methods: {
    ...mapActions('game', ['finishGame', 'answer']),
    submitAnswer(choice) {
      this.answer(choice.is_correct)
    },
  },
}
</script>
