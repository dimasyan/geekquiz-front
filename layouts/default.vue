<template>
  <div class="layout-wrapper box-border font-regular">
    <div class="layout-header">
      <the-header @show-login="showLoginModal"></the-header>
    </div>
    <div class="layout-content">
      <Nuxt :nuxt-child-key="$route.name" />
    </div>
    <div class="layout-footer"></div>
    <Login
      :show="showLogin"
      @close-login="hideLoginModal"
      @show-register="showRegisterModal"
    />
    <Register :show="showRegister" @close-register="hideRegisterModal" />
  </div>
</template>

<script>
import TheHeader from '~/components/shared/TheHeader'
import Login from '~/components/shared/modals/Login'
import Register from '~/components/shared/modals/Register'

export default {
  components: {
    TheHeader,
    Login,
    Register,
  },
  data() {
    return {
      showLogin: false,
      showRegister: false,
    }
  },
  methods: {
    showLoginModal() {
      this.showLogin = true
    },
    hideLoginModal() {
      this.showLogin = false
    },
    showRegisterModal() {
      console.log('asdasdas')
      this.showLogin = false
      this.showRegister = true
    },
    hideRegisterModal() {
      this.showRegister = false
    },
  },
}
</script>
