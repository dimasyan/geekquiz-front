<template>
  <div class="header flex justify-between px-12 py-6 bg-blue-700 bg-opacity-75">
    <div class="header-logo">
      <NuxtLink to="/" class="header-logo-title uppercase font-larger text-3xl"
        >Geekquiz
      </NuxtLink>
    </div>
    <div class="header-action flex items-center">
      <div class="header-menu flex mx-2">
        <div
          class="header-menu-item text-lg text-white font-large mr-4"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          {{ item.title }}
        </div>
      </div>
      <nuxt-link
        v-if="isAuth"
        to="/profile"
        tag="button"
        class="btn btn-white"
        >{{ username }}</nuxt-link
      >
      <button v-else class="btn btn-white" @click="showLogin">Войти</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  data() {
    return {
      menuItems: [
        {
          title: 'Главная',
          to: '',
        },
        {
          title: 'Тематики',
          to: '',
        },
        {
          title: 'Таблицы',
          to: '',
        },
        {
          title: 'О нас',
          to: '',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      username: (state) => state.auth.username,
    }),
  },
  methods: {
    showLogin() {
      this.$emit('show-login')
    },
  },
}
</script>

<style scoped></style>
