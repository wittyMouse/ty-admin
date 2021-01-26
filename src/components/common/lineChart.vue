<template>
  <base-chart :option="option" />
</template>

<script>
import baseChart from '@/components/common/baseChart.vue'
import echarts from 'echarts'

export default {
  name: 'lineChart',
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
          this.fifthOption()
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
        case 9:
          this.nightOption()
          break
        case 10:
          this.tenOption()
          break
        default:
          break
      }
    },
    firstOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 'left',
          top: '5%',
          right: '5%',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line',
            areaStyle: {}
          }
        ]
      }
    },
    secondOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: '8%',
          bottom: '1%',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '5%',
          left: '15%'
        },
        toolbox: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line'
          },
          {
            type: 'line'
          }
        ]
      }
    },
    thirdOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        toolbox: {},
        grid: {
          left: 'left',
          top: '40%',
          right: '5%',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          show: false,
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
            type: 'line'
          },
          {
            type: 'line'
          }
        ]
      }
    },
    fourthOption () {
      const arr = []
      for (let i = 0; i < 200; i++) {
        arr.push(Math.round(Math.random() * 500))
      }
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '5%',
          top: 'top',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'category'
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        // dataset: {
        //   source: this.source
        // },
        series: [
          {
            data: arr,
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            }
          }
        ]
      }
    },
    fifthOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          right: '0',
          textStyle: {
            color: '#fff'
          }
        },
        toolbox: {},
        grid: {
          left: '2%',
          top: '6%',
          right: '22%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line'
          },
          {
            type: 'line'
          },
          {
            type: 'line'
          }
        ]
      }
    },
    sixOption () {
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter (params) {
            return (
              "<div style='text-align: right; color: #fff;'>" +
              params.name +
              '</div>' +
              params.marker +
              params.seriesName +
              '：' +
              params.value[params.encode.y[0]]
            )
          }
        },
        grid: {
          left: 'left',
          top: 'top',
          right: '3%',
          bottom: '6%',
          containLabel: true
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
          type: 'value',
          show: false
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'line'
          }
        ]
      }
    },
    sevenOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '4%',
          left: 'left',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            areaStyle: {}
          }
        ]
      }
    },
    eightOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '5%',
          left: 'left',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line'
          },
          {
            type: 'line'
          }
        ]
      }
    },
    nightOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '5%',
          left: 'left',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
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
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average'
          },
          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            areaStyle: {}
          }
        ]
      }
    },
    tenOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        toolbox: {},
        grid: {
          left: 'left',
          top: '40%',
          right: '5%',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          show: false,
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
            type: 'line'
          },
          {
            type: 'line'
          },
          {
            type: 'line'
          }
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
