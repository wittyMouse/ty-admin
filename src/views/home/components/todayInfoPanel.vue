<template>
  <tmpl-panel title="今日情报趋势" panelClass="height-one">
    <template>
      <div class="select-item-box clearfix">
        <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
        <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
      </div>

      <div class="chart-item-box">
        <line-chart :kind="1" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'todayInfoPanel',
  components: {
    tmplPanel,
    baseSelect,
    lineChart
  },
  props: {
    infoTendency: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      reqParams: {
        source: '',
        dateTime: ''
      }
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList,
      timeList: state => state.timeList
    }),
    source () {
      if (!this.infoTendency) {
        return []
      }
      const source = [['product', '数量']]
      this.infoTendency.map(item => {
        source.push([item.label, item.value])
      })
      return source
    }
  },
  watch: {
    'reqParams.source' () {
      this.sendRequest()
    },
    'reqParams.dateTime' () {
      this.sendRequest()
    }
  },
  mixins: [mixin],
  methods: {
    // 发送请求
    sendRequest () {
      const params = {
        source: this.reqParams.source,
        ...this.buildTimeObj(this.reqParams.dateTime)
      }
      this.$emit('change', params)
    }
  }
}
</script>
<style lang="scss" scoped>
.select-item-box {
  display: flex;
  justify-content: flex-end;
}

.chart-item-box {
  margin-top: 20px;
  height: 180px;
}
</style>
