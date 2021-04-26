<template>
  <div class="game-intro p-12">
    <div v-if="pack" class="flex p-12 border-4 border-indigo-600">
      <div class="w-1/3 px-4">
        <img :src="pack.image" class="rounded" />
      </div>
      <div class="w-2/3 px-4 flex flex-col justify-center">
        <p class="text-3xl mb-3">{{ pack.name }}</p>
        <p class="text-xl mb-3">{{ pack.description }}</p>
        <button class="btn bg-red-500 mt-6 w-40">Начать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      pack: (state) => state.packs.pack,
    }),
  },
}
</script>
