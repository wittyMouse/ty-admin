<template>
  <base-panel class="fleft" panelClass="height-piechart">
    <div class="box-content">
      <div class="chart-item">
        <pie-chart :kind="6" :source="source" />
      </div>
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import pieChart from '@/components/common/pieChart.vue'

export default {
  name: 'rateInfo',
  components: {
    basePanel,
    pieChart
  },
  props: {
    shopTypeList: Array
  },
  computed: {
    source () {
      if (_.isEmpty(this.shopTypeList)) {
        return []
      }
      const arr = [['商品类型', 'value']]
      this.shopTypeList.map(item => {
        arr.push([item.label, item.value])
      })
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 220px;
}
</style>
