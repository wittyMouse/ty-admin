<template>
  <div class="container darknet">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="level-width">
        <div class="main-left percent-75 fleft">
          <summary-info :statistics="statistics" />
          <div class="level-width clearfix">
            <div class="percent-40 space-right fleft">
              <content-panel :contentSource="contentSource" />
            </div>
            <div class="percent-60 fleft">
              <darknet-info-type :infoSource="infoSource" />
            </div>
          </div>
        </div>
        <div class="main-right percent-25 fleft">
          <new-darknet-data />
        </div>
      </div>
      <div class="level-width clearfix">
        <div class="percent-30 space-right fleft">
          <user-panel :userSource="userSource" />
          <language-panel :language="language" />
        </div>
        <div class="percent-70 fleft">
          <data-table-tab />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '@/api/darknet'
import { mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import summaryInfo from './components/summaryInfo.vue'
import contentPanel from './components/contentPanel.vue'
import userPanel from './components/userPanel.vue'
import languagePanel from './components/languagePanel.vue'
import darknetInfoType from './components/darknetInfoType.vue'
import newDarknetData from './components/newDarknetData.vue'
import dataTableTab from './components/dataTableTab.vue'

export default {
  name: 'darknet',
  components: {
    pageHeader,
    breadcrumb,
    summaryInfo,
    languagePanel,
    userPanel,
    contentPanel,
    darknetInfoType,
    newDarknetData,
    dataTableTab
  },
  data () {
    return {
      navList: [
        { label: '态势感知', pathName: 'home' },
        { label: '暗网', pathName: 'darknet' }
      ],
      loading: false,
      // 统计信息
      statistics: {},
      // 暗网内容分布
      contentSource: {},
      // 暗网用户分布
      userSource: [],
      // 语言种类
      language: [],
      // 暗网情报分布
      infoSource: {}
    }
  },
  methods: {
    ...mapActions(['getSourceList']),

    // 获取统计信息
    getStatistics (params) {
      this.loading = true
      api.getStatistics(params).then(res => {
        if (res.data.code === 0) {
          this.statistics = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取暗网内容分布
    getContentSource (params) {
      this.loading = true
      api.getContentSource(params).then(res => {
        if (res.data.code === 0) {
          this.contentSource = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取暗网用户分布
    getUserSource (params) {
      this.loading = true
      api.getUserSource(params).then(res => {
        if (res.data.code === 0) {
          this.userSource = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取语言种类
    getLanguage (params) {
      this.loading = true
      api.getLanguage(params).then(res => {
        if (res.data.code === 0) {
          this.language = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取暗网情报分布
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

    // 发送请求
    sendRequest () {
      this.getSourceList()
      this.getStatistics()
      this.getLanguage()
      this.getUserSource()
      this.getContentSource()
      this.getInfoSource()
    }
  },
  mounted () {
    this.sendRequest()
  }
}
</script>
<style lang="scss" scoped>
</style>
