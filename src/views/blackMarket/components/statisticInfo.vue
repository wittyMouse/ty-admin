<template>
  <div class="main-salemap-item">
    <div class="data-salemap-box">
      <div class="data-map-content">
      </div>
    </div>

    <div class="blackmap-statistic-databox">
      <div class="mstatistic-data">
        <span class="map-money-icon"></span>
        <div class="ms-data-text">
          <p>销售金额</p>
          <p class="yellow-math">￥{{amountFormat(resultData.amount)}}</p>
        </div>
      </div>

      <div class="mstatistic-data">
        <span class="map-order-icon"></span>
        <div class="ms-data-text">
          <p>订单总数</p>
          <p class="yellow-math">{{amountFormat(resultData.order)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { amountFormat } from '@/utils'

export default {
  name: 'statisticInfo',
  data () {
    return {
      resultData: {
        amount: 1358023,
        order: 1358023
      }
    }
  },
  methods: {
    amountFormat
  }
}
</script>

<style lang="scss" scoped>

</style>
