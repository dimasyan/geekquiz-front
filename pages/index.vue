<template>
  <div class="container mx-auto">
    <banner />
    <about />
    <popular />
  </div>
</template>

<script>
import Banner from '@/components/pages/index/Banner'
import About from '@/components/pages/index/About'
import Popular from '@/components/pages/index/Popular'

export default {
  components: {
    Banner,
    About,
    Popular,
  },
  async fetch({ store }) {
    try {
      await store.dispatch('packs/getPacks')
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
