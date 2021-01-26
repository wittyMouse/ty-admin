<template>
  <stripePanel title="交易分布">
    <div class="chart-item-box">
      <line-chart :kind="3" :source="source" />
    </div>
  </stripePanel>
</template>
<script>
import _ from 'lodash'
import stripePanel from './stripePanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'attackOrExcp',
  components: {
    stripePanel,
    lineChart
  },
  props: {
    transactionData: {
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
    //   if (_.isEmpty(this.transactionData)) {
    //     return []
    //   }
    //   const { list1, list2 } = this.transactionData
    //   const source = [['product', '交易次数', '交易金额']]
    //   const len = Math.min(list1.length, list2.length)
    //   for (let i = 0; i < len; i++) {
    //     source.push(['', list1[i], list2[i]])
    //   }
    //   return source
    // }
  },
  mounted () {
    this.resultData = {
      attackList: [210, 200, 269, 258, 286, 240], // 活跃合约列表
      exceptionList: [1344, 1304, 1424, 1465, 1330, 1450], // 脆弱合约列表
      duringTime: '6M' // 间隔时间(数字+字母 y:年 M:月 d:日 H:时 m:分 s:秒)
    }
    const { attackList, exceptionList } = this.resultData
    const source = [['product', '交易次数', '交易金额']]
    const len = Math.min(attackList.length, exceptionList.length)
    for (let i = 0; i < len; i++) {
      source.push([(i + 1) + '月', attackList[i] || '', exceptionList[i] || ''])
    }
    // console.log(source)
    this.source = source
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  height: 110px;
}
</style>
