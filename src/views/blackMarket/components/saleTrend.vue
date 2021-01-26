<template>
  <tmpl-panel class="fleft" panelClass="height-saletrend" title="销售趋势">
    <div class="chart-item">
      <bar-chart :kind="8" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import tmplPanel from '@/components/common/tmplPanel.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'saleTrend',
  components: {
    tmplPanel,
    barChart
  },
  props: {
    salesTrendData: Object
  },
  computed: {
    source () {
      if (_.isEmpty(this.salesTrendData)) {
        return []
      }
      const { amount, up } = this.salesTrendData
      let temp = []
      const obj1 = {}
      const obj2 = {}
      amount.forEach(item => {
        temp.push(item.label)
        obj1[item.label] = item.value
      })
      up.forEach(item => {
        temp.push(item.label)
        obj2[item.label] = item.value
      })
      temp = [...new Set(temp)].sort((a, b) => {
        if (moment(a).isAfter(b)) {
          return 1
        } else {
          return -1
        }
      })
      const arr = [['product', '销量', '上架商品数']]
      temp.forEach(item => {
        arr.push([item, obj1[item] ? obj1[item] : '', obj2[item] ? obj2[item] : ''])
      })
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 190px;
}
</style>
