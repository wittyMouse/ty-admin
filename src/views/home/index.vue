<template>
  <div class="container home">
    <page-header />
    <div class="mainbox clearfix">
      <div class="main-left percent-30">
        <warning-info-panel :warningInfo="warningInfo" @change="getWarningInfo"/>
        <hot-event-panel :hotEvent="hotEvent" @change="getHotEvent" />
      </div>

      <div class="main-mid percent-40">
        <topic-info-panel :infoQuantity="infoQuantity" @change="getInfoQuantity" />
        <info-frequently-site-panel :infoFrequentlySite="infoFrequentlySite" @change="getInfoFrequentlySite" />
      </div>

      <div class="main-right percent-30">
        <today-info-panel :infoTendency="infoTendency" @change="getInfoTendency" />
        <info-source-panel :infoSource="infoSource" @change="getInfoSource" />
        <info-type-panel :infoSubject="infoSubject" @change="getInfoSubject" />
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/home'
import { mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'
import warningInfoPanel from './components/warningInfoPanel.vue'
import topicInfoPanel from './components/topicInfoPanel.vue'
import todayInfoPanel from './components/todayInfoPanel.vue'
import hotEventPanel from './components/hotEventPanel.vue'
import infoFrequentlySitePanel from './components/infoFrequentlySitePanel.vue'
import infoSourcePanel from './components/infoSourcePanel.vue'
import infoTypePanel from './components/infoTypePanel.vue'

export default {
  name: 'home',
  components: {
    pageHeader,
    warningInfoPanel,
    topicInfoPanel,
    todayInfoPanel,
    hotEventPanel,
    infoFrequentlySitePanel,
    infoSourcePanel,
    infoTypePanel
  },
  data () {
    return {
      loading: false,
      // 最新预警信息
      warningInfo: {},
      // 主题情报总量
      infoQuantity: {},
      // 今日情报趋势
      infoTendency: [],
      // 热点事件信息
      hotEvent: [],
      // 情报高发地信息
      infoFrequentlySite: [],
      // 信息来源分布
      infoSource: [],
      // 情报类型信息
      infoSubject: []
    }
  },
  methods: {
    ...mapActions({
      getSourceList: 'getSourceList',
      getSubjectList: 'getSubjectList'
    }),

    // 获取最新预警信息
    getWarningInfo (params) {
      this.loading = true
      api.getWarningInfo(params).then(res => {
        if (res.data.code === 0) {
          this.warningInfo = {
            warningCount: res.data.todayWarning,
            warningList: res.data.data
          }
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取主题情报总量
    getInfoQuantity (params) {
      this.loading = true
      api.getInfoQuantity(params).then(res => {
        if (res.data.code === 0) {
          this.infoQuantity = {
            warningCount: res.data.warning_count,
            monitorCount: res.data.monitor_count,
            disposeCount: res.data.dispose_count,
            dateTime: res.data.time
          }
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取今日情报趋势
    getInfoTendency (params) {
      this.loading = true
      api.getInfoTendency(params).then(res => {
        if (res.data.code === 0) {
          this.infoTendency = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取热点事件信息
    getHotEvent (params) {
      this.loading = true
      api.getHotEvent(params).then(res => {
        if (res.data.code === 0) {
          this.hotEvent = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取情报高发地信息
    getInfoFrequentlySite (params) {
      this.loading = true
      api.getInfoFrequentlySite(params).then(res => {
        if (res.data.code === 0) {
          this.infoFrequentlySite = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取信息来源分布
    getInfoSource (params) {
      this.loading = true
      api.getInfoSource(params).then(res => {
        if (res.data.code === 0) {
          this.infoSource = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取情报类型信息
    getInfoSubject (params) {
      this.loading = true
      api.getInfoSubject(params).then(res => {
        if (res.data.code === 0) {
          this.infoSubject = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 发送请求
    sendRequest () {
      this.getSourceList()
      this.getSubjectList()
      this.getWarningInfo()
      this.getInfoQuantity()
      this.getInfoTendency()
      this.getHotEvent()
      this.getInfoFrequentlySite()
      this.getInfoSource()
      this.getInfoSubject()
    }
  },

  mounted () {
    this.sendRequest()
  }
}
</script>
<style lang="scss" scoped>
</style>
