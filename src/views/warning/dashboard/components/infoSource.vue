<template>
  <tmpl-panel title="情报来源渠道" panelClass="height-channel">
    <div class="chart-item-box">
      <bar-chart :kind="5" :source="source" />
    </div>
    <div class="event-table-box channel-table clearfix">
      <baseTable :list="infoSource.tableList" :tableHeight="150">
        <el-table-column prop="name" label="新增分布"></el-table-column>
        <el-table-column prop="today" label="今天"></el-table-column>
        <el-table-column prop="week" label="近7天"></el-table-column>
        <el-table-column prop="month" label="近1月"></el-table-column>
      </baseTable>
    </div>
  </tmpl-panel>
</template>

<script>
import { mapState } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'
import barChart from '@/components/common/barChart.vue'
import baseTable from '@/components/common/baseTable.vue'

export default {
  name: 'infoSource',
  components: {
    tmplPanel,
    barChart,
    baseTable
  },
  props: {
    infoSource: Object
  },
  computed: {
    source () {
      if (!this.infoSource || !this.infoSource.chartList) {
        return []
      }
      const source = [['product', 'value']]
      this.infoSource.chartList.map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  margin-bottom: 20px;
  height: 200px;
}
</style>
