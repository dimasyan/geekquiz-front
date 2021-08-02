<template>
  <div class="banner mt-10 rounded-xl">
    <div class="banner-content py-16 px-32 text-center text-white">
      <div class="banner-content-title font-larger mb-8">
        Узнай уровень своих познаний
      </div>
      <div class="banner-content-text mb-10">Выбери тему и начни игру:</div>
      <div class="banner-content-action flex justify-between">
        <div
          v-for="(pack, index) in bannerPacks"
          :key="index"
          class="banner-content-action-item flex-col p-4 rounded-xl cursor-pointer"
          :class="{ active: pack.id === selectedPack }"
          @click="selectPack(pack.id)"
        >
          <img :src="pack.image" class="mb-4" alt="banner pack image" />
          <span>{{ pack.name }}</span>
        </div>
      </div>
      <button
        class="btn btn-large bg-red-700 mt-6 text-black text-2xl"
        :disabled="!selectedPack"
        @click="startGame"
      >
        Начать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      bannerPacks: [
        {
          id: 1,
          name: 'Кино',
          image: require('../../../assets/icons/video.svg'),
        },
        {
          id: 3,
          name: 'Футбол',
          image: require('../../../assets/icons/football.svg'),
        },
        {
          id: 2,
          name: 'Музыка',
          image: require('../../../assets/icons/musical-note.svg'),
        },
      ],
      selectedPack: null,
    }
  },
  methods: {
    startGame() {
      this.$router.push(`/game/${this.selectedPack}`)
    },
    selectPack(id) {
      this.selectedPack = id
    },
  },
}
</script>

<style lang="scss">
.banner {
  background: linear-gradient(
      78.02deg,
      rgba(0, 0, 0, 0.4) 92.3%,
      rgba(0, 0, 0, 0) 95.37%
    ),
    url('~assets/images/bg2.jpg') center, rgba(128, 128, 128, 0.7);
  background-size: cover;
  &-content {
    &-title {
      font-size: 54px;
    }
    &-text {
      font-size: 32px;
    }
    &-action-item {
      opacity: 0.8;
      &:hover {
        opacity: 0.9;
        @apply bg-gray-500 bg-opacity-25;
      }
      img {
        width: 100px;
      }
      &.active {
        opacity: 1;
        @apply bg-gray-400 bg-opacity-50;
      }
    }
  }
}
</style>
