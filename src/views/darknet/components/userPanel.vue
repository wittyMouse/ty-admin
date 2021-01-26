<template>
  <tmpl-panel title="暗网用户分布" panelClass="dark-user-height">
    <template>
      <div class="chart-item-box">
        <pie-chart :kind="1" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import _ from 'lodash'
import tmplPanel from '@/components/common/tmplPanel.vue'
import pieChart from '@/components/common/pieChart.vue'

export default {
  name: 'userPanel',
  components: {
    tmplPanel,
    pieChart
  },
  props: {
    userSource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    source () {
      if (_.isEmpty(this.userSource)) {
        return []
      }
      const source = [['product', '用户分布']]
      this.userSource.map(item => {
        source.push([item.Label, item.Value])
      })
      return source
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
