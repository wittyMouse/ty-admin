<template>
  <div class="container digitalCurrency">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="main-left" :class="isShow ? 'percent-75' : 'percent-100 delay-out'">
        <div class="search-content-main">
            <base-panel panelClass="height-auto">
              <search-bar :keywords="reqParams.keywords" @searchEvent="handleSearchEvent" />
              <div class="digital-address">
                <p>地址</p>
                <p class="font18 white">{{reqParams.keywords}}</p>
              </div>
            </base-panel>
        </div>

        <img-tab-panel :list="tabNameList" :currentTab="currentTab" :showDetailPanel="true" :isShow.sync="isShow" @tabChange="handleTabChange" />
      </div>

      <transition enter-active-class="animated faster delay-half-1s fadeInRightBig" leave-active-class="animated faster fadeOutRightBig">
        <div class="main-right percent-25" v-if="isShow">
          <a href="#" class="close-text" @click="handleCloseDetailPanel">x&nbsp;关闭</a>

          <detail-panel :detailData="detailData" />
        </div>
      </transition>

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
import detailPanel from '@/components/digitalCurrency/detailPanel.vue'
import { isEmptyObject } from '@/utils/index.js'

export default {
  name: 'digitalCurrency',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar,
    imgTabPanel,
    detailPanel
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: '数字货币', pathName: 'digitalCurrency' }
      ],
      reqParams: {
        keywords: ''
      },
      currentTab: 0,
      isShow: false,
      tablist: [
        { name: '基本信息', pathName: 'digitalCurrency_info' },
        { name: '交易活动', pathName: 'digitalCurrency_activity' },
        { name: '交易列表', pathName: 'digitalCurrency_detail' }
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
      commonData: 'digitalCurrency/commonData'
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
    ...mapActions({ getRemoteData: 'digitalCurrency/getRemoteData' }),
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
    // 关闭详情面板
    handleCloseDetailPanel () {
      this.isShow = false
    },
    // tab切换事件
    handleTabChange (idx) {
      if (this.currentTab === idx) {
        return
      }
      this.$router.push({ name: this.tablist[idx].pathName })
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
.digital-address p {
  min-height: 28px;
}

.main-left {
  transition: all .5s;
}

.delay-out {
  transition-delay: .5s;
}
</style>
