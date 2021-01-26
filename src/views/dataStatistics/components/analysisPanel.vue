<template>
  <base-panel class="fleft" panelClass="height-analysis">
    <div class="box-content">
      <!--用户勾连方式=start-->
      <div class="statistics-chart-item">
        <p class="sc-tt">用户勾连方式</p>
        <div class="chart-item">
          <pie-chart :kind="4" :source="source1" />
        </div>
      </div>
      <!--用户勾连方式=end-->

      <!--话题分布=start-->
      <div class="statistics-chart-item">
        <p class="sc-tt">话题分布</p>
        <div class="chart-item">
          <pie-chart :kind="5" :source="source2" />
        </div>
      </div>
      <!--话题分布=end-->

      <!--活跃用户分析=start-->
      <div class="statistics-chart-item">
        <p class="sc-tt">活跃用户分析</p>
        <div class="chart-item">
          <bar-chart :kind="7" :source="source3" />
        </div>
      </div>
      <!--活跃用户分析=end-->
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import pieChart from '@/components/common/pieChart.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'analysisPanel',
  components: {
    basePanel,
    pieChart,
    barChart
  },
  computed: {
    source1 () {
      return [
        ['product', '数量'],
        ['Tor', 5.5],
        ['I2P', 1.5],
        ['Zeronet', 3]
      ]
    },
    source2 () {
      return [
        ['product', '数量'],
        ['占中', 20],
        ['反修例', 20],
        ['绝食', 20],
        ['罢课', 20],
        ['占领机场', 20]
      ]
    },
    source3 () {
      return [
        ['product', '', ''],
        ['Tor', 105, 210],
        ['I2P', 210, 180],
        ['Zeronet', 210, 160],
        ['Telegram', 180, 140]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 160px;
}
</style>
