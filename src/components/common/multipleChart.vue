<template>
  <base-chart :option="option" />
</template>

<script>
import baseChart from '@/components/common/baseChart.vue'

export default {
  name: 'multipleChart',
  components: {
    baseChart
  },
  props: {
    kind: {
      type: Number,
      required: true
    },
    source: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      option: {}
    }
  },
  watch: {
    source (val) {
      if (this.option.dataset) {
        const option = { ...this.option }
        option.dataset.source = val
        this.option = option
      }
    }
  },
  methods: {
    buildOption () {
      switch (this.kind) {
        case 1:
          this.firstOption()
          break
        case 2:
          this.secondOption()
          break
        default:
          break
      }
    },
    firstOption () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {},
        grid: {
          left: 'left',
          top: '5%',
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisPointer: {
              type: 'shadow'
            }
            // axisLine: {
            //   lineStyle: {
            //     color: "#fff"
            //   }
            // }
          }
        ],
        yAxis: [
          {
            // type: "value",
            // axisLine: {
            //   lineStyle: {
            //     color: "#fff"
            //   }
            // }
          },
          {
            type: 'value',
            show: false
          }
        ],
        dataset: {
          source: this.source
        },
        series: [
          { type: 'bar' },
          // { type: "bar" },
          { type: 'line', yAxisIndex: 1 }
        ]
      }
    },
    secondOption () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {},
        grid: {
          left: 'left',
          top: '5%',
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisPointer: {
              type: 'shadow'
            }
            // axisLine: {
            //   lineStyle: {
            //     color: "#fff"
            //   }
            // }
          }
        ],
        yAxis: [
          {
            // type: "value",
            // axisLine: {
            //   lineStyle: {
            //     color: "#fff"
            //   }
            // }
          },
          {
            type: 'value',
            show: false
          }
        ],
        dataset: {
          source: this.source
        },
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'line', yAxisIndex: 1 }
        ]
      }
    }
  },
  created () {
    this.buildOption()
  }
}
</script>

<style lang="scss" scoped>
</style>
