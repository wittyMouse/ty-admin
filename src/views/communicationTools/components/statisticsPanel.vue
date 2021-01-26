<template>
  <tmpl-panel title="检测数量统计" panelClass="web-catelogebox">
    <div class="chart-item-box">
      <line-chart :kind="5" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'statisticsPanel',
  components: {
    tmplPanel,
    lineChart
  },
  props: {
    detectionCount: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    source () {
      if (!this.detectionCount.groupCount || !this.detectionCount.msgCount || !this.detectionCount.activeUser) {
        return []
      }
      const source = [['product', '群组总数', '消息数量', '每日活跃用户']]
      for (let i = 0; i < this.detectionCount.groupCount.length; i++) {
        source.push([
          this.detectionCount.groupCount[i].label,
          this.detectionCount.groupCount[i].value,
          this.detectionCount.msgCount[i].value,
          this.detectionCount.activeUser[i].value
        ])
      }
      return source
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  height: 250px;
}
</style>
