<template>
  <base-panel panelClass="dark-table-height">
    <div class="chart-item-box">
      <base-chart :option="option" />
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import baseChart from '@/components/common/baseChart.vue'

export default {
  name: 'chartPanel',
  components: {
    basePanel,
    baseChart
  },
  data () {
    return {
      option: {}
    }
  },
  methods: {
    render () {
      this.option = {
        tooltip: {},
        legend: {
          data: ['Telegram', 'Whatsapp']
        },
        series: [
          {
            type: 'graph',
            categories: [
              {
                name: 'Telegram'
              },
              {
                name: 'Whatsapp'
              }
            ],
            data: [
              {
                id: '1',
                name: '张三',
                x: 10,
                y: 10,
                value: 10,
                category: 0,
                label: {
                  show: false
                }
              },
              {
                id: '2',
                name: '李四',
                x: 12,
                y: 13,
                value: 20,
                category: 0,
                label: {
                  show: false
                }
              },
              {
                id: '3',
                name: '王五',
                x: 13,
                y: 12,
                value: 30,
                category: 0,
                label: {
                  show: false
                }
              },
              {
                id: '4',
                name: '赵六',
                x: 14,
                y: 15,
                value: 40,
                category: 1,
                label: {
                  show: false
                }
              }
            ],
            links: [
              {
                source: '1',
                target: '2'
              },
              {
                source: '1',
                target: '3'
              },
              {
                source: '3',
                target: '4'
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.render()
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  width: 100%;
  height: 100%;
}
</style>
