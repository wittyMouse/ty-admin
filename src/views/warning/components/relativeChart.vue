<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/dist/extension/dataTool'
import axios from 'axios'

export default {
  name: 'relativeChart',
  data () {
    return {
      chart: null,
      firstEnter: true
    }
  },
  props: {
    currentTab: {
      type: Number
    }
  },
  watch: {
    currentTab () {
      if (this.firstEnter) {
        this.firstEnter = false
        this.renderChart()
      }
    }
  },
  methods: {
    // 渲染图表
    renderChart () {
      this.chart = echarts.init(this.$refs.chart, 'light')
      this.chart.showLoading()
      axios
        .get('/ty/les-miserables.gexf')
        .then(res => {
          this.chart.hideLoading()
          const graph = echarts.dataTool.gexf.parse(res.data)
          console.log('1', graph)
          const categories = []
          for (let i = 0; i < 9; i++) {
            categories[i] = {
              name: '类目' + i
            }
          }
          graph.nodes.forEach(function (node) {
            node.itemStyle = null
            node.value = node.symbolSize
            node.symbolSize /= 1.5
            node.label = {
              normal: {
                show: node.symbolSize > 30
              }
            }
            node.category = node.attributes.modularity_class
          })
          // console.log('2', graph)
          console.log(categories)
          const option = {
            tooltip: {},
            legend: {
              // selectedMode: 'single',
              data: categories.map(function (a) {
                return a.name
              }),
              textStyle: {
                color: '#fff'
              }
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
              {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                  }
                },
                label: {
                  position: 'right',
                  formatter: '{b}'
                },
                lineStyle: {
                  color: 'source',
                  curveness: 0.3
                },
                emphasis: {
                  lineStyle: {
                    width: 10
                  }
                }
              }
            ]
          }
          this.chart.setOption(option)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
