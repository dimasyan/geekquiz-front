<template>
  <div class="layout-wrapper box-border font-regular">
    <div class="layout-header">
      <the-header></the-header>
    </div>
    <div class="layout-content">
      <Nuxt :nuxt-child-key="$route.name" />
    </div>
    <div class="layout-footer"></div>
  </div>
</template>

<script>
import TheHeader from '~/components/shared/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>
