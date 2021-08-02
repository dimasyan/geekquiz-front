<template>
  <div class="header py-3 bg-yellow bg-opacity-80">
    <div class="flex justify-between container mx-auto">
      <div class="header-logo">
        <NuxtLink
          to="/"
          class="header-logo-title uppercase font-larger text-3xl"
          ><img src="~assets/icons/logo.png" class="rounded" />
        </NuxtLink>
      </div>
      <div class="header-action flex items-center">
        <div class="header-menu flex mx-2">
          <div
            class="header-menu-item text-lg font-large mr-4"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            {{ item.title }}
          </div>
        </div>
        <nuxt-link v-if="isAuth" to="/profile" tag="button" class="btn btn-white"
          >{{ username }}
        </nuxt-link>
        <button v-else class="btn btn-white" @click="showLogin">Войти</button>
      </div>
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

<style lang="scss">
.header-logo {
  img {
    max-height: 65px;
  }
}
</style>
