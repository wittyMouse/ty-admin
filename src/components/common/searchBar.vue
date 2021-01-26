<template>
  <div class="search-title-main">
    <div class="width">
      <input type="text" class="search-input-max" :value="keywords" ref="text" placeholder />
      <button class="light-blue-btn" @click="handleSearchClick">搜索</button>
    </div>
    <p class="blue search-end-txt result-wrap" v-if="showResultSize">
      搜索结果：
      <span class="white">{{resultSize}}&nbsp;</span>条相关信息
    </p>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    keywords: String,
    showResultSize: Boolean,
    resultSize: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 点击搜索按钮
    handleSearchClick () {
      this.$emit('searchEvent', this.$refs.text.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.result-wrap {
  height: 20px;
}
.search-input-max, .light-blue-btn {
  vertical-align: middle;
}
</style>
