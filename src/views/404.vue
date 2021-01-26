<template>
  <div class="container">
    <div class="remind-mainbox">
      <div class="remind-content">
        <p class="font18">您访问的页面出错啦！</p>
        <p class="remind-link">
          <a @click="handleBack">返回</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '404',
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
