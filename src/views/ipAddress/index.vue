<template>
  <div class="container ipAddress">
    <page-header />

    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="search-content-main">
        <base-panel panelClass="height-auto">
          <search-bar :keywords="reqParams.keywords" @searchEvent="handleSearchEvent" />
        </base-panel>
      </div>

      <img-tab-panel :list="tabNameList" :currentTab="currentTab" @tabChange="handleTabChange" />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import basePanel from '@/components/common/basePanel.vue'
import searchBar from '@/components/common/searchBar.vue'
import imgTabPanel from '@/components/common/imgTabPanel.vue'
import { isEmptyObject } from '@/utils/index.js'

export default {
  name: 'ipAddress',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar,
    imgTabPanel
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: 'IP地址', pathName: 'ipAddress' }
      ],
      reqParams: {
        keywords: ''
      },
      currentTab: 0,
      tablist: [
        { name: '结果', pathName: 'ipAddress_result' },
        { name: '报告', pathName: 'ipAddress_report' },
        { name: '漏洞', pathName: 'ipAddress_bug' }
      ]
    }
  },
  computed: {
    ...mapState({
      isFilterSearch: state => state.search.isFilterSearch,
      searchText: state => state.search.searchText,
      searchParams: state => state.search.searchParams
    }),
    ...mapGetters({
      commonData: 'ipAddress/commonData'
    }),
    detailData () {
      if (!this.commonData) {
        return {}
      }
      const commonData = this.commonData
      const detailData = {
        address: commonData.address,
        username: commonData.userName,
        pathList: commonData.linkAddress,
        ipList: commonData.linkIp,
        summaryList: commonData.statistic
      }
      return detailData
    },
    tabNameList () {
      const arr = []
      this.tablist.map(item => {
        arr.push(item.name)
      })
      return arr
    }
  },
  watch: {
    $route ({ name, query }) {
      if (query.keywords) {
        this.reqParams.keywords = query.keywords
        this.sendRequest()
      }
      for (let i = 0; i < this.tablist.length; i++) {
        if (name === this.tablist[i].pathName) {
          this.currentTab = i
          break
        }
      }
    }
  },
  methods: {
    ...mapActions({ getRemoteData: 'ipAddress/getRemoteData' }),
    // 发送请求
    sendRequest () {
      let data = {}
      if (this.isFilterSearch) {
        data = {
          webCat: {
            type: this.searchParams.currentType,
            data: this.searchParams.selectedType
          },
          subject: {
            type: this.searchParams.currentTheme,
            data: this.searchParams.selectedTheme
          },
          mediaCat: {
            type: this.searchParams.currentMedia,
            data: this.searchParams.selectedMedia
          },
          timeStart: this.searchParams.startTime,
          timeEnd: this.searchParams.startTime,
          marked: this.searchParams.marked,
          contents: this.searchParams.content + 1,
          title: this.searchParams.title,
          author: this.searchParams.author
        }
      }
      data = Object.assign({}, data, {
        keywords: this.reqParams.keywords
      })
      this.getRemoteData(data)
    },
    // 点击搜索按钮
    handleSearchEvent (keywords) {
      this.reqParams.keywords = keywords
      this.sendRequest()
    },
    // tab切换事件
    handleTabChange (idx) {
      if (this.currentTab === idx) {
        return
      }
      if (idx !== 0) {
        this.$message('页面正在建设中...')
      }
      // this.currentTab = idx;
      // this.$router.push({ name: this.tablist[idx].pathName });
    }
  },
  created () {
    const name = this.$route.name
    for (let i = 0; i < this.tablist.length; i++) {
      if (name === this.tablist[i].pathName) {
        this.currentTab = i
        break
      }
    }

    if (this.$route.query.keywords) {
      this.reqParams.keywords = this.$route.query.keywords
      this.sendRequest()
    }
  }
}
</script>
<style lang="scss" scoped>
.main-left {
  transition: all .5s;
}

.delay-out {
  transition-delay: .5s;
}
</style>
