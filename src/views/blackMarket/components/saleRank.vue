<template>
  <base-panel class="fleft" panelClass="height-sales-volume">
    <div class="common-title">
      <h3 class="sale-tt-left">销售量排行</h3>
      <h3 class="sale-tt-right">销量</h3>
    </div>

    <div class="box-content">
      <div class="sales-board-item" v-for="(item, index) in saleRankList" :key="index">
        <span class="sale-number">{{formatNumber(index+1)}}</span>
        <span class="sale-title" :title="item.title">{{item.title}}</span>
        <span class="sale-math">{{item.sales}}</span>
      </div>
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import { formatNumber } from '@/utils'

export default {
  name: 'saleRank',
  components: {
    basePanel
  },
  props: {
    saleRankList: Array
  },
  methods: {
    formatNumber
  }
}
</script>

<style lang="scss" scoped>
</style>
