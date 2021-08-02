<template>
  <div class="popular mt-10">
    <div class="popular-title flex justify-between content-center px-4">
      <div class="popular-title-text text-3xl font-large">
        Самые популярные тематики
      </div>
      <a class="btn btn-blue">Все тематики</a>
    </div>
    <div class="popular-items mt-8 flex flex-wrap">
      <div v-for="pack in packs" :key="pack.id" class="w-1/4 mb-5 py-2 px-4">
        <nuxt-link
          :to="`/game/${pack.id}`"
          class="pack px-6 pt-4 pb-40 rounded bg-cover w-full block"
          :style="{ backgroundImage: `url('${pack.image}')` }"
        >
          <div class="pack-title text-white text-3xl font-bold">
            {{ pack.name }}
          </div>
        </nuxt-link>
      </div>
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
