<template>
  <div class="warm-main-right">
    <base-panel panelClass="clearfix">
      <template #top>
        <span class="footer-shadow"></span>
      </template>

      <div class="item-box clearfix">
        <div class="focus-search-item">

          <span class="advanced-tip-text">开始时间</span>
          <el-date-picker
            v-model="reqParams.timeStart"
            size="small"
            align="right"
            type="datetime"
            placeholder="请选择开始时间"
            :editable="false"
            :time-arrow-control="true"
            value-format="timestamp">
          </el-date-picker>

          <span class="advanced-tip-text">结束时间</span>
          <el-date-picker
            v-model="reqParams.timeEnd"
            size="small"
            align="right"
            type="datetime"
            placeholder="请选择结束时间"
            :editable="false"
            :time-arrow-control="true"
            value-format="timestamp">
          </el-date-picker>

          <span class="advanced-tip-text two">标记</span>
          <base-select class="width150" :type="false" :showDefault="false" v-model="reqParams.remark" :list="remarkList" />

          <button class="search-icon-btn fleft ml-none" @click="handleSearchClick">搜索</button>
        </div>

        <div class="box-content">
          <screen-bar title="信息类型" :list="list" :currentValue.sync="reqParams.infoType" />
          <div class="bar-tab-box">
            <image-tab :list="tabList" :currentTab.sync="currentTab">
              <template #1>
                <info-clue
                  ref="info-clue"
                  :currentTab="currentTab"
                  :sortList="sortList"
                  :reqParams="reqParams"
                />
              </template>
              <template #2>
                <info-analysis :currentTab="currentTab" />
              </template>
            </image-tab>
          </div>
        </div>
      </div>
    </base-panel>
  </div>
</template>
<script>
import * as api from '@/api/warning'
import basePanel from '@/components/common/basePanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import basePagination from '@/components/common/basePagination.vue'
import screenBar from '../components/screenBar.vue'
import imageTab from '../components/imageTab.vue'
import infoClue from './components/infoClue.vue'
import infoAnalysis from './components/infoAnalysis.vue'

export default {
  name: 'clue',
  components: {
    basePanel,
    screenBar,
    imageTab,
    basePagination,
    baseSelect,
    infoClue,
    infoAnalysis
  },
  data () {
    return {
      loading: false,
      // 当前tab
      currentTab: 0,
      // tab列表
      tabList: ['情报线索', '情报分析'],
      // 标记列表
      remarkList: ['全部', '已读', '未读'],
      // 信息类型列表
      infoTypeList: [],
      // 相关性排序列表
      sortList: [],
      // 请求参数
      reqParams: {
        timeStart: null,
        timeEnd: null,
        remark: 0,
        infoType: 0
      }
    }
  },
  computed: {
    list () {
      const temp = [{ id: 0, label: '全部' }]
      return temp.concat(this.infoTypeList)
    }
  },
  watch: {
    'reqParams.infoType' () {
      this.$nextTick().then(() => {
        this.$refs['info-clue'].getGlobalInfo()
      })
    }
  },
  methods: {
    // 点击搜索按钮
    handleSearchClick () {
      this.$refs['info-clue'].getGlobalInfo()
    },
    // 获取信息类型
    getInfoType (params) {
      this.loading = true
      api.getInfoType(params).then(res => {
        if (res.data.code === 0) {
          this.infoTypeList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取相关性排序
    getRelativeSort (params) {
      this.loading = true
      api.getRelativeSort(params).then(res => {
        if (res.data.code === 0) {
          this.sortList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getInfoType()
    this.getRelativeSort()
  }
}
</script>
<style lang="scss" scoped>
.el-date-editor {
  float: left;
}
.range-inputbox {
  width: unset;
  height: unset;
  line-height: unset;
  background-color: unset;
  border: unset;
}
.el-date-editor:last-child {
  margin-left: 15px;
}
</style>
