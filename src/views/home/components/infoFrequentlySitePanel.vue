<template>
  <tmpl-panel title="情报高发地" panelClass="height-two">
    <template>
      <div class="select-item-box clearfix">
        <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
        <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
      </div>

      <div class="chart-item-box">
        <map-chart :mapData="infoFrequentlySite" @click="handleMapClick" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import mapChart from '@/components/common/mapChart.vue'

export default {
  name: 'infoFrequentlySitePanel',
  components: {
    tmplPanel,
    baseSelect,
    mapChart
  },
  props: {
    infoFrequentlySite: {
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
    })
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
    },
    handleMapClick () {
      this.sendRequest()
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
  height: 480px;
}
</style>
