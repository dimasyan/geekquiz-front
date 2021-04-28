export default {
  setNewGame(state, game) {
    state.activeGame = game
    state.status = 1
  },
  finishGame(state) {
    state.status = 2
  },
  answerQuestion(state, isCorrect) {
    if (state.questionIndex + 1 !== state.activeGame.questions.length) {
      state.questionIndex++
    } else {
      state.finished = true
    }
    if (isCorrect) {
      state.score++
    }
  },
  reset(state) {
    state = {
      activeGame: null,
      counter: null,
      questions: null,
      status: 0,
      questionIndex: 0,
      score: 0,
      finished: false,
    }
  },
}
