<template>
  <tmpl-panel title="情报媒体类型" panelClass="height-intelligence">
    <div class="chart-item-box">
      <pie-chart :kind="1" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import { mapState } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'
import pieChart from '@/components/common/pieChart.vue'

export default {
  name: 'infoMediaType',
  components: {
    tmplPanel,
    pieChart
  },
  props: {
    infoMediaType: Array
  },
  computed: {
    source () {
      if (!this.infoMediaType) {
        return []
      }
      const source = [['product', 'value']]
      this.infoMediaType.map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  height: 210px;
}
</style>
