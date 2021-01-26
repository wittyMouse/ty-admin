<template>
  <tmpl-panel title="暗网语言分布" panelClass="dark-service-height">
    <template>
      <div class="chart-item-box">
        <bar-chart :kind="3" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import _ from 'lodash'
import tmplPanel from '@/components/common/tmplPanel.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'languagePanel',
  components: {
    tmplPanel,
    barChart
  },
  props: {
    language: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    source () {
      if (_.isEmpty(this.language)) {
        return []
      }
      const source = [['product', '用户分布']]
      this.language.map(item => {
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
  height: 250px;
}
</style>
