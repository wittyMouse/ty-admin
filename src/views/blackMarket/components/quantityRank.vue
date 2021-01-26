<template>
  <base-panel class="fleft" panelClass="height-sales-volume">
    <div class="common-title">
      <h3 class="sale-tt-left">站点排行</h3>
      <h3 class="sale-tt-right">商品数</h3>
    </div>

    <div class="box-content">
      <div class="sales-board-item" v-for="(item, index) in siteRankList" :key="index">
        <span class="sale-number">{{formatNumber(index+1)}}</span>
        <span class="sale-title" :title="item.label">{{item.label}}</span>
        <span class="sale-math">{{item.value}}</span>
      </div>
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import { formatNumber } from '@/utils'

export default {
  name: 'quantityRank',
  components: {
    basePanel
  },
  props: {
    siteRankList: Array
  },
  methods: {
    formatNumber
  }
}
</script>

<style lang="scss" scoped>
</style>
