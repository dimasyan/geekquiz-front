<template>
  <div class="profile container mx-auto">
    <div v-if="user" class="profile-container">
      <h1>Ваш профиль</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    try {
      await store.dispatch('auth/getProfile', this.token)
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      user: (state) => state.auth.user,
    }),
  },
}
</script>
