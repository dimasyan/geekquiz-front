<template>
  <div class="pack-card">
    <div class="pack-card-title">
      {{ pack.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackCard',
  props: {
    pack: {
      type: Object,
      default: null,
    },
  },
}
</script>
