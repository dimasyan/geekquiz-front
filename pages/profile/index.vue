<template>
  <div class="profile container mx-auto">
    <div v-if="profile" class="profile-container">
      <div class="profile-container flex justify-between items-stretch">
        <div class="profile-box w-1/2 my-6 rounded border-indigo-500 border">
          <div class="py-4 px-6 flex justify-between items-center border-b">
            <span class="font-larger">Ваш профиль</span>
            <button class="btn bg-red-500">Изменить</button>
          </div>
          <div class="text item flex py-3 px-6">
            <span class="font-bold mr-2">Username: </span>
            <span> {{ profile.username }}</span>
          </div>
          <div class="text item flex py-3 px-6">
            <span class="font-bold mr-2">Email: </span>
            <span> {{ profile.email }}</span>
          </div>
        </div>
        <div
          class="profile-box w-1/2 mx-4 my-6 rounded border-indigo-500 border"
        >
          <div class="py-6 px-6 flex justify-between items-center border-b">
            <span class="font-larger"
              >Всего сыгранных игр: {{ historyCount }}</span
            >
          </div>
          <div
            v-for="item in historyGames"
            :key="item.id"
            class="flex py-3 px-6 items-center"
          >
            <img :src="item.pack.image" class="rounded w-24 h-24 mr-6" />
            <span class="mr-4">{{ item.pack.name }}</span>
            <span class="font-bold">{{ item.score }} / 10</span>
          </div>
        </div>
      </div>
      <div class="profile-logout flex justify-center">
        <button class="btn btn-danger" @click="exit">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth.token) {
      return redirect('/')
    }
  },
  async fetch({ store }) {
    try {
      await store.dispatch('auth/getProfile')
      await store.dispatch('game/getGamesHistory')
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      profile: (state) => state.auth.profile,
      historyGames: (state) => state.game.history,
      historyCount: (state) => state.game.historyCount,
    }),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    exit() {
      this.logout()
      this.$router.push('/')
    },
  },
}
</script>
