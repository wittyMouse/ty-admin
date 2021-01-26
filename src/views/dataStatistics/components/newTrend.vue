<template>
  <tmpl-panel title="新动向" panelClass="height-newtrend">
    <div class="chart-item">
      <line-chart :kind="9" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'newTrend',
  components: {
    tmplPanel,
    lineChart
  },
  data () {
    return {
      userTrend: [],
      source: []
    }
  },
  methods: {
    mock () {
      this.source = [
        ['product', '', ''],
        ['1', 10, 20],
        ['2', 30, 60],
        ['3', 20, 10],
        ['4', 60, 0],
        ['5', 50, 40],
        ['6', 80, 50],
        ['7', 100, 100]
      ]
    }
  },
  mounted () {
    this.mock()
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 160px;
}
</style>
