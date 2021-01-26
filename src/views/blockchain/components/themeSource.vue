<template>
  <tmpl-panel title="主题分布" panelClass="height-ztfb">
    <div class="chart-item-box">
      <pie-chart :kind="1" :source="source" />
    </div>
  </tmpl-panel>
</template>
<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import pieChart from '@/components/common/pieChart.vue'

export default {
  name: 'topArea',
  components: {
    tmplPanel,
    pieChart
  },
  props: {
    themeSourceList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    source () {
      if (!this.themeSourceList) {
        return []
      }
      const source = [['product', '数量']]
      this.themeSourceList.map(item => {
        source.push([item.label, item.value])
      })
      return source
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  height: 110px;
}
</style>
