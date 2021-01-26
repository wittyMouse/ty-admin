<template>
  <tmpl-panel title="最新预警信息" panelClass="height-one">
    <div class="select-item-box clearfix">
      <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
      <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
    </div>
    <div class="warm-databox">
      <span class="w-arrow-left"></span>
      <span class="w-arrow-right"></span>
      <div class="warm-data-cont">
        <span class="fleft">今日情报预警总数</span>
        <span class="math yellow fright">{{warningInfo.warningCount}}</span>
      </div>
    </div>

    <div class="table-content">
      <baseTable :list="warningInfo.warningList">
        <el-table-column align="center" prop="warningName" label="预警名称">
          <template slot-scope="scope">
            <span :title="scope.row.warningName">{{scope.row.warningName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="warningTime" label="时间" width="160px">
          <template slot-scope="scope">
            {{formatDate(scope.row.warningTime)}}
          </template>
        </el-table-column>
      </baseTable>
    </div>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import { formatDate } from '@/utils'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import baseTable from '@/components/common/baseTable.vue'

export default {
  name: 'warningInfoPanel',
  components: {
    tmplPanel,
    baseSelect,
    baseTable
  },
  props: {
    warningInfo: {
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
    formatDate,
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
