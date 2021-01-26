<template>
  <div class="main-left percent-100">
    <base-panel panelClass="height-digital">
      <div class="box-content">
        <div class="main-left percent-30">
          <info-panel title="交易活动" :list="activity" />
        </div>
        <div class="main-right percent-70">
          <div class="account-chart-item">
            <div class="common-title">
              <h3>交易分布</h3>
            </div>

            <div class="accout-chart">
              <div class="chart-item-box">
                <line-chart :kind="6" :source="incomeSource" />
              </div>
              <div class="chart-item-box">
                <line-chart :kind="6" :source="outcomeSource" />
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
  name: 'activity',
  components: {
    basePanel,
    infoPanel,
    lineChart
  },
  computed: {
    ...mapGetters([
      'activityPageData',
      'infoPageData'
    ]),
    activity () {
      // if (!this.activityPageData.activity) {
      //   return []
      // }
      if (!this.infoPageData || !this.infoPageData.activity) {
        return []
      }
      // let activity = this.activityPageData.activity;
      const activity = this.infoPageData.activity
      const list = [
        { label: '第一次出现', value: activity.firstSeen },
        { label: '最近一次出现', value: activity.lastSeen },
        { label: '转入交易次数', value: activity.incomeTrans },
        { label: '转出交易次数', value: activity.outcomeTrans }
      ]
      return list
    },
    incomeSource () {
      if (!this.activityPageData || !this.activityPageData.distribution || !this.activityPageData.distribution.income) {
        return []
      }
      const income = this.activityPageData.distribution.income
      const arr = [['product', '转入交易量']]
      income.map(item => {
        arr.push([item.label, item.value])
      })
      return arr
    },
    outcomeSource () {
      if (!this.activityPageData || !this.activityPageData.distribution || !this.activityPageData.distribution.outcome) {
        return []
      }
      const outcome = this.activityPageData.distribution.outcome
      const arr = [['product', '转出交易量']]
      outcome.map(item => {
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
  height: 210px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
