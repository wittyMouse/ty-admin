<template>
  <div class="relation-address-item">
    <div class="bluebg-title">数据统计（{{count}}）</div>
    <div class="relation-data-list">
      <div class="relation-data" v-for="item in list" :key="item.id">
        <span class="circle-dot"></span>
        <span class="relation-data-text width20">{{item.label}}</span>
        <span class="relation-data-text">
          <i class="rise-icon"></i>
          <span>{{item.up}}</span>
        </span>
        <span class="relation-data-text">
          <i class="fall-icon"></i>
          <span>{{item.down}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'countList',
  props: {
    list: Array
  },
  computed: {
    count () {
      if (!this.list) {
        return 0
      }
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
