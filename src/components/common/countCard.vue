<template>
  <div class="count-card">
    <span class="content-icon" :class="icon"></span>
    <div class="summary-text-box">
      <p class="summary-text">{{cardData.title}}</p>
      <p class="math yellow">{{cardData.value}}</p>
    </div>
    <span class="right-arrow"></span>
  </div>
</template>
<script>
export default {
  name: 'countCard',
  props: {
    cardData: {
      type: Object,
      default () {
        return {}
      }
    },
    icon: String
  }
}
</script>
<style lang="scss" scoped>
</style>
