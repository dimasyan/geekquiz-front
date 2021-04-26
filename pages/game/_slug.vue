<template>
  <div class="container mx-auto">
    <div class="game-container">
      <Intro />
    </div>
  </div>
</template>

<script>
import Intro from '@/components/pages/game/Intro'
export default {
  components: { Intro },
  async fetch({ store, params }) {
    try {
      await store.dispatch('packs/getPack', params.slug)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
