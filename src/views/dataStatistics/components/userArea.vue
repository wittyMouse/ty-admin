<template>
  <tmpl-panel title="用户地域分布Top5" panelClass="height-user-region">
    <div class="chart-item">
      <bar-chart :kind="6" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'userArea',
  components: {
    tmplPanel,
    barChart
  },
  data () {
    return {
      userArea: []
    }
  },
  computed: {
    source () {
      if (!this.userArea) {
        return []
      }
      const source = [['product', '']]
      this.userArea.reverse().map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  },
  methods: {
    mock () {
      this.userArea = [
        { name: '占中', value: 550000 },
        { name: '反修例', value: 420000 },
        { name: '绝食', value: 250000 },
        { name: '罢课', value: 140000 },
        { name: '其他', value: 120000 }
      ]
    }
  },
  created () {
    this.mock()
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 180px;
}
</style>
