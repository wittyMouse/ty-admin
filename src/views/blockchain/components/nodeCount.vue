<template>
  <stripePanel title="节点数量" :rightText="formatTime">
    <div class="chart-item-box">
      <line-chart :kind="10" :source="source" />
    </div>
  </stripePanel>
</template>
<script>
import _ from 'lodash'
import { formatDuringTime } from '@/utils/index.js'
import stripePanel from './stripePanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'nodeCount',
  components: {
    stripePanel,
    lineChart
  },
  props: {
    nodeCountData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      source: []
    }
  },
  computed: {
    // source () {
    //   if (_.isEmpty(this.nodeCountData)) {
    //     return []
    //   }
    //   const coin = this.nodeCountData
    //   const keys = Object.keys(coin)
    //   const source = [['product', ...keys]]
    //   const len = coin[keys[0]].length
    //   for (let i = 0; i < len; i++) {
    //     const arr = keys.map(key => {
    //       return coin[key][i]
    //     })
    //     source.push(['', ...arr])
    //   }
    //   return source
    // },
    formatTime () {
      if (_.isEmpty(this.nodeCountData.duringTime)) {
        return ''
      }
      return formatDuringTime(this.nodeCountData.duringTime)
    }
  },
  mounted () {
    this.resultData = {
      btc: [210, 200, 269, 258, 286, 240],
      eth: [503, 537, 517, 583, 504, 550],
      eos: [350, 360, 340, 400, 380, 320],
      duringTime: '6M' // 间隔时间(数字+字母 y:年 M:月 d:日 H:时 m:分 s:秒)
    }
    const { btc, eth, eos } = this.resultData
    const source = [['product', 'BTC', 'ETH', 'EOS']]
    const len = btc.length
    for (let i = 0; i < len; i++) {
      source.push([(i + 1) + '月', btc[i] || '', eth[i] || '', eos[i] || ''])
    }
    this.source = source
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  height: 110px;
}
</style>
