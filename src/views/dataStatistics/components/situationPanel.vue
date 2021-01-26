<template>
  <tmpl-panel title="事件传播态势" panelClass="height-situation">
    <div class="chart-item">
      <multiple-chart :kind="2" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import multipleChart from '@/components/common/multipleChart.vue'
import { formatDateTime } from '@/utils/index.js'

export default {
  name: 'situationPanel',
  components: {
    tmplPanel,
    multipleChart
  },
  data () {
    return {
      userTrend: []
    }
  },
  computed: {
    source () {
      return [
        ['product', '', '', '', ''],
        [this.formatDateTime(new Date(1572307200000), 'yyyy-MM-dd'), 1, 1, 1, 1],
        [this.formatDateTime(new Date(1572393600000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1572480000000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1572566400000), 'yyyy-MM-dd'), 21, 21, 21, 21],
        [this.formatDateTime(new Date(1572652800000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1572739200000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1572825600000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1572912000000), 'yyyy-MM-dd'), 9, 9, 9, 9],
        [this.formatDateTime(new Date(1572998400000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573084800000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573171200000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573257600000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573344000000), 'yyyy-MM-dd'), 2, 2, 2, 2],
        [this.formatDateTime(new Date(1573430400000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573516800000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573603200000), 'yyyy-MM-dd'), 0, 0, 0, 0],
        [this.formatDateTime(new Date(1573689600000), 'yyyy-MM-dd'), 2, 2, 2, 2]
      ]
    }
  },
  methods: {
    formatDateTime
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 200px;
}
</style>
