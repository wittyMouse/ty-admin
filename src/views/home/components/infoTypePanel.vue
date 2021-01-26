<template>
  <tmpl-panel title="情报类型" panelClass="height-three">
    <template>
      <div class="select-item-box clearfix text-right">
        <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
      </div>

      <div class="chart-item-box">
        <bar-chart :kind="1" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import barChart from '@/components/common/barChart.vue'

export default {
  name: 'infoTypePanel',
  components: {
    tmplPanel,
    baseSelect,
    barChart
  },
  props: {
    infoSubject: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      reqParams: {
        source: ''
      }
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList
    }),
    source () {
      if (!this.infoSubject) {
        return []
      }
      const source = [['product']]
      this.infoSubject.map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  },
  watch: {
    'reqParams.source' () {
      this.sendRequest()
    }
  },
  methods: {
    // 发送请求
    sendRequest () {
      const params = {
        source: this.reqParams.source
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
