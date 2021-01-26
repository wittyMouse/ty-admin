<template>
  <stripePanel title="黑地址数量" :rightText="formatTime" panelClass="height-black-math">
    <div class="chart-count">
      <div class="count">{{darkAddressCountData.count}}</div>
      <div class="percent" v-if="darkAddressCountData.percent">{{darkAddressCountData.percent + '%'}}</div>
    </div>
    <div class="chart-item-box">
      <line-chart :kind="4" />
    </div>
  </stripePanel>
</template>
<script>
import _ from 'lodash'
import { formatDuringTime } from '@/utils/index'
import stripePanel from './stripePanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'darkAddressCount',
  components: {
    stripePanel,
    lineChart
  },
  props: {
    darkAddressCountData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    source () {
      if (_.isEmpty(this.darkAddressCountData)) {
        return {}
      }
      const source = [['product', '']]
      const list = this.darkAddressCountData.list
      list.map(item => {
        source.push([item.label, item.value])
      })
      return source
    },
    formatTime () {
      const duringTime = this.darkAddressCountData.duringTime
      if (duringTime) {
        return formatDuringTime(duringTime)
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-count {
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  height: 90px;
  .count {
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 24px;
    color: #ffd85c;
  }
  .percent {
    font-size: 14px;
    color: #fff;
  }
}
.chart-item-box {
  display: inline-block;
  vertical-align: middle;
  width: 550px;
  height: 90px;
}
</style>
