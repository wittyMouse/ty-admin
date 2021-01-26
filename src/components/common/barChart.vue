<template>
  <base-chart :option="option" />
</template>

<script>
import baseChart from '@/components/common/baseChart.vue'

export default {
  name: 'barChart',
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
        case 3:
          this.thirdOption()
          break
        case 4:
          this.fourthOption()
          break
        case 5:
          this.fiveOption()
          break
        case 6:
          this.sixOption()
          break
        case 7:
          this.sevenOption()
          break
        case 8:
          this.eightOption()
          break
        default:
          break
      }
    },
    firstOption () {
      this.option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: 'left',
          top: '20%',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'bar'
          }
          // {
          //   type: "bar"
          // },
          // {
          //   type: "bar"
          // }
        ]
      }
    },
    secondOption () {
      this.option = {
        legend: {
          bottom: 0,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '5%',
          left: 'left',
          right: 0,
          bottom: '15%',
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: this.source
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
    },
    thirdOption () {
      this.option = {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: 'left',
          top: 'top',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          // Map the score column to color
          dimension: 2,
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'value',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      }
    },
    fourthOption () {
      this.option = {
        tooltip: {},
        legend: {},
        grid: {
          left: 'left',
          top: 'top',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'bar'
          }
        ]
      }
    },
    fiveOption () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'bar',
            barWidth: '60%'
          }
        ]
      }
    },
    sixOption () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 'top',
          left: 'left',
          right: '6%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'bar'
          }
        ]
      }
    },
    sevenOption () {
      this.option = {
        legend: {
          bottom: 0,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '5%',
          left: 'left',
          right: 0,
          bottom: 0,
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: this.source
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{ type: 'bar' }, { type: 'bar' }]
      }
    },
    eightOption () {
      this.option = {
        legend: {
          show: false,
          bottom: 0,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '5%',
          left: 'left',
          right: 0,
          bottom: 0,
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: this.source
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{ type: 'bar' }, { type: 'bar' }]
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
