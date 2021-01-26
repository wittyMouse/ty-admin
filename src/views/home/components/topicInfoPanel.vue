<template>
  <tmpl-panel title="主题情报总量" panelClass="height-one">
    <div class="select-item-box clearfix">
      <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
      <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
    </div>
    <div class="theme-total-item">
      <div class="theme-circle">
        <p class="math yellow">{{infoQuantity.warningCount}}</p>
        <p>预警信息</p>
      </div>
      <div class="theme-math">
        <span class="t-corner-left"></span>
        <p>当前监测总数</p>
        <p class="math yellow">{{infoQuantity.monitorCount}}</p>
        <p class="math-date">{{formatDateTime}}</p>
        <span class="t-corner-right"></span>
      </div>
      <div class="theme-circle">
        <p class="math yellow">{{infoQuantity.disposeCount}}</p>
        <p>处置信息</p>
      </div>
    </div>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import { formatDate } from '@/utils'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'

export default {
  name: 'topicInfoPanel',
  components: {
    tmplPanel,
    baseSelect
  },
  props: {
    infoQuantity: {
      type: Object,
      default () {
        return {}
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
    formatDateTime () {
      return formatDate(this.infoQuantity.dateTime, 'yyyy年MM月dd日 HH:mm:ss')
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
</style>
