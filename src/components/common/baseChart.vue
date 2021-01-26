<template>
  <div class="base-chart" ref="chart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'baseChart',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    svg: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      chart: null,
      firstRenderFinish: false
    }
  },
  watch: {
    option () {
      this.firstRenderFinish && this.renderChart()
    }
  },
  methods: {
    // 渲染图表
    renderChart () {
      this.chart.setOption(this.option)
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart, this.theme, { renderer: this.svg ? 'svg' : 'canvas' })
    this.renderChart()
    this.firstRenderFinish = true
  }
}
</script>

<style lang="scss" scoped>
.base-chart {
  width: 100%;
  height: 100%;
}
</style>
