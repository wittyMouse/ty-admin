<template>
  <tmpl-panel title="用户趋势分析" panelClass="height-trend">
    <div class="chart-item">
      <line-chart :kind="7" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'userTrend',
  components: {
    tmplPanel,
    lineChart
  },
  data () {
    return {
      userTrend: []
    }
  },
  computed: {
    source () {
      if (!this.userTrend) {
        return []
      }
      const source = [['product', 'value']]
      this.userTrend.map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  },
  methods: {
    mock () {
      this.userTrend = [
        { name: '10.1', value: 10 },
        { name: '10.2', value: 70 },
        { name: '10.3', value: 20 },
        { name: '10.4', value: 80 },
        { name: '10.5', value: 30 },
        { name: '10.6', value: 40 },
        { name: '10.7', value: 10 }
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
  height: 200px;
}
</style>
