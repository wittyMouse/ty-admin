<template>
  <tmpl-panel title="信息来源分布" panelClass="height-three">
    <template>
      <div class="select-item-box clearfix text-right">
        <base-select v-model="reqParams.subject" :list="subjectList" placeholder="请选择主题" />
        <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
      </div>

      <div class="chart-item-box">
        <pie-chart :kind="1" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import pieChart from '@/components/common/pieChart.vue'

export default {
  name: 'infoSourcePanel',
  components: {
    tmplPanel,
    baseSelect,
    pieChart
  },
  props: {
    infoSource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      reqParams: {
        subject: '',
        dateTime: ''
      }
    }
  },
  computed: {
    ...mapState({
      subjectList: state => state.subjectList,
      timeList: state => state.timeList
    }),
    source () {
      if (!this.infoSource) {
        return []
      }
      const source = [['product', '数量']]
      this.infoSource.map(item => {
        source.push([item.name, item.value])
      })
      return source
    }
  },
  watch: {
    'reqParams.subject' () {
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
        subject: this.reqParams.subject,
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
