<template>
  <div class="banner mt-10 rounded-xl">
    <div class="banner-content py-16 px-32 text-center text-white">
      <div class="banner-content-title font-larger mb-8">
        Узнай уровень своих познаний
      </div>
      <div class="banner-content-text mb-10">Выбери тему и начни игру:</div>
      <div class="banner-content-action flex justify-between">
        <div
          class="banner-content-action-item flex-col p-4 rounded cursor-pointer"
        >
          <img src="~assets/icons/video.svg" class="mb-4" />
          <span>Кино</span>
        </div>
        <div
          class="banner-content-action-item flex-col p-4 rounded cursor-pointer"
        >
          <img src="~assets/icons/football.svg" class="mb-4" />
          <span>Футбол</span>
        </div>
        <div
          class="banner-content-action-item flex-col p-4 rounded cursor-pointer"
        >
          <img src="~assets/icons/musical-note.svg" class="mb-4" />
          <span>Музыка</span>
        </div>
      </div>
      <button class="btn bg-red-500 mt-6">Начать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss">
.banner {
  background: url('~assets/images/batman.jpeg') center, rgba(128, 128, 128, 0.5);
  &-content {
    &-title {
      font-size: 54px;
    }
    &-text {
      font-size: 32px;
    }
    &-action-item {
      opacity: 0.6;
      &:hover {
        opacity: 1;
        @apply bg-gray-500 bg-opacity-25;
      }
      img {
        width: 100px;
      }
    }
  }
}
</style>
