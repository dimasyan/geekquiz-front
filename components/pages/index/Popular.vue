<template>
  <div class="popular mt-10">
    <div class="popular-title flex justify-between content-center">
      <div class="popular-title-text text-3xl font-large">
        Самые популярные тематики
      </div>
      <a class="btn btn-blue">Все тематики</a>
    </div>
    <div class="popular-items mt-8 flex justify-between flex-wrap">
      <nuxt-link
        v-for="pack in packs"
        :key="pack.id"
        :to="`/game/${pack.id}`"
        class="pack px-6 pt-4 pb-40 w-1/5 mr-1.5 mb-5 rounded bg-cover"
        :style="{ backgroundImage: `url('${pack.image}')` }"
      >
        <div class="pack-title text-white text-3xl font-bold">
          {{ pack.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      packs: (state) => state.packs.allPacks,
    }),
  },
}
</script>
