<template>
  <tmpl-panel title="暗网情报分布" panelClass="web-catelogebox">
    <template>
      <div class="chart-item-box" @click="format">
        <line-chart :kind="2" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import _ from 'lodash'
import moment from 'moment'
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'darknetInfoType',
  components: {
    tmplPanel,
    lineChart
  },
  props: {
    infoSource: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    source () {
      if (_.isEmpty(this.infoSource.line1) || _.isEmpty(this.infoSource.line2)) {
        return []
      }
      return this.format(this.infoSource)
    }
  },
  methods: {
    format (infoSource) {
      const arr = [['produce', 'Tor', 'I2P']]
      const { line1, line2 } = infoSource
      const lineObj1 = {}
      const lineObj2 = {}
      let date = []
      line1.forEach(item => {
        date.push(item.label)
        lineObj1[item.label] = item.value
      })
      line2.forEach(item => {
        date.push(item.label)
        lineObj2[item.label] = item.value
      })
      date = [...new Set(date)]
      date.sort((a, b) => {
        if (moment(a).isBefore(b, 'year')) {
          return -1
        } else {
          return 1
        }
      }).forEach(key => {
        arr.push([key, lineObj1[key] || 0, lineObj2[key] || 0])
      })
      return arr
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  margin-top: 20px;
  padding: 0 20px;
  height: 220px;
}
</style>
