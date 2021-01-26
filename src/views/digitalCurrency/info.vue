<template>
  <div class="main-left percent-100">
    <base-panel panelClass="height-digital">
      <div class="box-content">
        <div class="main-left percent-30">
          <info-panel title="交易活动" :list="activity" />
          <info-panel title="交易量" :list="count" panelClass="margin-top10" />
        </div>
        <div class="main-right percent-70">
          <div class="account-chart-item">
            <div class="common-title">
              <h3>账户余额</h3>
            </div>

            <div class="accout-chart">
              <div class="chart-item-box">
                <line-chart :kind="6" :source="source" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-panel>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import basePanel from '@/components/common/basePanel.vue'
import infoPanel from '@/components/digitalCurrency/infoPanel.vue'
import lineChart from '@/components/common/lineChart.vue'
const { mapGetters } = createNamespacedHelpers('digitalCurrency')

export default {
  name: 'info',
  components: {
    basePanel,
    infoPanel,
    lineChart
  },
  computed: {
    ...mapGetters(['infoPageData']),
    activity () {
      if (!this.infoPageData || !this.infoPageData.activity) {
        return []
      }
      const activity = this.infoPageData.activity
      const list = [
        { label: '第一次出现', value: activity.firstSeen },
        { label: '最近一次出现', value: activity.lastSeen },
        { label: '转入交易次数', value: activity.incomeTrans },
        { label: '转出交易次数', value: activity.outcomeTrans }
      ]
      return list
    },
    count () {
      if (!this.infoPageData || !this.infoPageData.count) {
        return []
      }
      const count = this.infoPageData.count
      const list = [
        { label: '收入', value: count.income, unit: 'B' },
        { label: '支出', value: count.outcome, unit: 'B' },
        { label: '余额', value: count.balance, unit: 'B' }
      ]
      return list
    },
    source () {
      if (!this.infoPageData || !this.infoPageData.balance) {
        return []
      }
      const balance = this.infoPageData.balance
      const arr = [['product', '账户余额']]
      balance.map(item => {
        arr.push([item.label, item.value])
      })
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  margin: 0 15px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}
</style>
