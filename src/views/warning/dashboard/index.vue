<template>
  <div class="warm-main-right">
    <div class="main-left percent-30">
      <today-info :todayInfo="todayInfo" />
      <today-keywords :todayKeywords="todayKeywords" />
    </div>

    <div class="main-mid percent-30">
      <info-media-type :infoMediaType="infoMediaType" />
      <yesterday-info :yesterdayInfo="yesterdayInfo" />
    </div>

    <div class="main-right percent-40">
      <info-source :infoSource="infoSource" />
    </div>

    <div class="width clearfix">
      <div class="main-left percent-50">
        <favorite-info />
      </div>

      <div class="main-right percent-50">
        <top-info />
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '@/api/warning'
import todayInfo from './components/todayInfo.vue'
import infoMediaType from './components/infoMediaType.vue'
import todayKeywords from './components/todayKeywords.vue'
import yesterdayInfo from './components/yesterdayInfo.vue'
import infoSource from './components/infoSource.vue'
import favoriteInfo from './components/favoriteInfo.vue'
import topInfo from './components/topInfo.vue'

export default {
  name: 'warning_index',
  components: {
    todayInfo,
    infoMediaType,
    todayKeywords,
    yesterdayInfo,
    infoSource,
    favoriteInfo,
    topInfo
  },
  data () {
    return {
      // 今日情报
      todayInfo: {},
      // 情报媒体类型
      todayKeywords: [],
      // 今日关键词
      infoMediaType: [],
      // 昨日情报
      yesterdayInfo: {},
      // 情报来源渠道
      infoSource: {}
    }
  },
  methods: {
    // 获取今日情报
    getTodayInfo (params) {
      this.loading = true
      api.getTodayInfo(params).then(res => {
        if (res.data.code === 0) {
          this.todayInfo = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取今日关键词
    getTodayKeywords (params) {
      this.loading = true
      api.getTodayKeywords(params).then(res => {
        if (res.data.code === 0) {
          this.todayKeywords = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取情报媒体类型
    getInfoMediaType (params) {
      this.loading = true
      api.getInfoMediaType(params).then(res => {
        if (res.data.code === 0) {
          this.infoMediaType = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取昨日情报
    getYesterdayInfo (params) {
      this.loading = true
      api.getYesterdayInfo(params).then(res => {
        if (res.data.code === 0) {
          this.yesterdayInfo = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取情报来源渠道
    getInfoSource (params) {
      this.loading = true
      api.getInfoSource(params).then(res => {
        if (res.data.code === 0) {
          this.infoSource = res.data.data
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
      this.getTodayInfo()
      this.getInfoMediaType()
      this.getTodayKeywords()
      this.getYesterdayInfo()
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
