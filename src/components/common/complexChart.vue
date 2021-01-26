<template>
  <div class="complex-chart" ref="chart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'complexChart',
  data () {
    return {
      chart: null
    }
  }
}
</script>

<style lang="scss" scoped>
.complex-chart {
  width: 100%;
  height: 100%;
}
</style>
