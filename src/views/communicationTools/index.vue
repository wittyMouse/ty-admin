<template>
  <div class="container communicationTools">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="level-width clearfix">
        <div class="main-left percent-75 fleft">
          <summary-info :summaryList="summaryList" />

          <div class="level-width clearfix">
            <div class="percent-40 space-right fleft">
              <topic-or-user />
            </div>
            <div class="percent-60 fleft">
              <statistics-panel :detectionCount="detectionCount" />
            </div>
          </div>
        </div>

        <div class="main-right percent-25 fleft">
          <group-panel />
        </div>
      </div>

      <div class="level-width clearfix">
        <div class="percent-30 space-right fleft">
          <user-or-news />
        </div>

        <div class="percent-70 fleft">
          <chart-panel :groupGraph="groupGraph" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '@/api/communicationTools'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import chartPanel from './components/chartPanel.vue'
// import detailPanel from "./components/detailPanel.vue";
import groupPanel from './components/groupPanel.vue'
import statisticsPanel from './components/statisticsPanel.vue'
import summaryInfo from './components/summaryInfo.vue'
import topicOrUser from './components/topicOrUser.vue'
import userOrNews from './components/userOrNews.vue'

export default {
  name: 'communicationTools',
  components: {
    pageHeader,
    breadcrumb,
    chartPanel,
    // detailPanel,
    groupPanel,
    statisticsPanel,
    summaryInfo,
    topicOrUser,
    userOrNews
  },
  data () {
    return {
      navList: [
        { label: '态势感知', pathName: 'home' },
        { label: '特种通讯工具', pathName: 'communicationTools' }
      ],
      // 统计数据
      summaryList: [],
      // 检测数量统计
      detectionCount: {},
      // 群组关系图谱
      groupGraph: {}
    }
  },
  methods: {
    // 获取统计数据
    getSummaryInfo (params) {
      const pm1 = api.getGroupCount()
      const pm2 = api.getMsgCount()
      const pm3 = api.getUserCount()
      const pm4 = api.getActiveUserCount()
      this.loading = true
      Promise.all([pm1, pm2, pm3, pm4]).then(res => {
        const arr = []
        if (res[0].data.code === 0) {
          arr.push({ value: res[0].data.data || 0 })
        } else {
          arr.push({ value: 0 })
        }
        if (res[1].data.code === 0) {
          arr.push({ value: res[1].data.data || 0 })
        } else {
          arr.push({ value: 0 })
        }
        if (res[2].data.code === 0) {
          arr.push({ value: res[2].data.data || 0 })
        } else {
          arr.push({ value: 0 })
        }
        if (res[3].data.code === 0) {
          arr.push({ value: res[3].data.data || 0 })
        } else {
          arr.push({ value: 0 })
        }
        this.summaryList = arr
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取检测数量统计
    getDetectionCount (params) {
      this.loading = true
      api.getDetectionCount(params).then(res => {
        if (res.data.code === 0) {
          this.detectionCount = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取群组关系图谱
    getGroupGraph (params) {
      this.loading = true
      api.getGroupGraph(params).then(res => {
        if (res.data.code === 0) {
          this.groupGraph = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 发送请求
    sendRequest () {
      this.getSummaryInfo()
      this.getDetectionCount()
      // this.getGroupGraph()
    }
  },
  mounted () {
    this.sendRequest()
  }
}
</script>
<style lang="scss" scoped>
</style>
