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
      <button class="btn btn-white" @click="showLogin">Войти</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    showLogin() {
      console.log('sadasdas')
      this.$emit('show-login')
    },
  },
}
</script>

<style scoped></style>
