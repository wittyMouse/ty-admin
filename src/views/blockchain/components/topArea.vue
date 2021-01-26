<template>
  <tmpl-panel title="区域分布TOP5" panelClass="height-region">
    <div class="chart-item-box">
      <bar-chart :kind="4" :source="source" />
    </div>
  </tmpl-panel>
</template>
<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'topArea',
  components: {
    tmplPanel,
    barChart
  },
  props: {
    topAreaList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    source () {
      if (!this.topAreaList) {
        return []
      }
      const source = [['product', '']]
      this.topAreaList.reverse().map(item => {
        source.push([item.label, item.value])
      })
      return source
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  height: 110px;
}
</style>
