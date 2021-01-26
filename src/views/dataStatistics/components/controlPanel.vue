<template>
  <tmpl-panel title="折线图" panelClass="height-analysis">
    <div class="chart-item">
      <line-chart :kind="8" :source="source" />
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'controlPanel',
  components: {
    tmplPanel,
    lineChart
  },
  data () {
    return {
      userTrend: []
    }
  },
  computed: {
    source () {
      // if (!this.userTrend) {
      //   return [];
      // }
      // let source = [["product", "value"]];
      // this.userTrend.map(item => {
      //   source.push([item.name, item.value]);
      // });
      // return source;
      return [['product', '', ''],
        ['1', 10, 20],
        ['2', 30, 60],
        ['3', 20, 10],
        ['4', 60, 0],
        ['5', 50, 40],
        ['6', 80, 50],
        ['7', 100, 100]]
    }
  },
  methods: {
    mock () {
      this.userTrend = [
        { name: '10.1', value: 10 },
        { name: '10.2', value: 70 },
        { name: '10.3', value: 20 },
        { name: '10.4', value: 80 },
        { name: '10.5', value: 30 },
        { name: '10.6', value: 40 },
        { name: '10.7', value: 10 }
      ]
    }
  },
  mounted () {
    this.mock()
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 170px;
}
</style>
