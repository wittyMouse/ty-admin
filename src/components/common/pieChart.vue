<template>
  <base-chart :option="option" />
</template>

<script>
import baseChart from '@/components/common/baseChart.vue'

export default {
  name: 'pieChart',
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
        default:
          break
      }
    },
    firstOption () {
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter (params) {
            // console.log(params)
            return (
              params.seriesName +
              '<br />' +
              params.marker +
              params.data[0] +
              ': ' +
              params.data[1] +
              ' (' +
              params.percent +
              '%)'
            )
          }
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            name: '信息来源',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    },
    secondOption () {
      this.option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          formatter (params) {
            return (
              params.dimensionNames[1] +
              '<br />' +
              params.marker +
              params.name +
              '：' +
              params.value[params.encode.value[0]]
            )
          }
        },
        legend: {
          y: 'bottom',
          textStyle: {
            color: '#fff'
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '22',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              }
            }
          }
        ]
      }
    },
    thirdOption () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 0,
          left: 10,
          right: 10,
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
    fourthOption () {
      this.option = {
        tooltip: {
          trigger: 'item'
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['10%', '60%'],
            roseType: 'radius'
          }
        ]
      }
    },
    fiveOption () {
      this.option = {
        tooltip: {
          trigger: 'item'
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            name: '话题分布',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
              params.seriesName +
              '<br />' +
              params.marker +
              params.data[0] +
              ': ' +
              params.data[1] +
              ' (' +
              params.percent +
              '%)'
            )
          }
        },
        dataset: {
          source: this.source
        },
        series: [
          {
            type: 'pie',
            radius: ['10%', '60%'],
            roseType: 'radius'
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
