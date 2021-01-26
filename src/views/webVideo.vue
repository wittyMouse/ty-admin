<template>
  <div class="container video">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="search-content-main">
        <span class="footer-shadow"></span>
        <base-panel>
          <search-bar :keywords="reqParams.keywords" @searchEvent="handleSearchEvent" />

          <div class="box-content">
            <div class="search-event-main clearfix">
              <div class="photograph-search-box">
                <div class="select-item-box clearfix">
                  <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
                  <base-select v-model="reqParams.subject" :list="subjectList" placeholder="请选择主题" />
                  <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
                </div>
              </div>
            </div>

            <div class="video-list-item clearfix">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <router-link :to="{ name: 'videoDetail', query: { id: 1 } }">
                    <div class="video-play-icon" title="播放"></div>
                    <div class="video-pic">
                      <img :src="item.imgSrc" width="300" />
                    </div>
                    <div class="video-title">{{item.title}}</div>
                    <div class="video-infotxt">
                      <span class="video-txtl">来源：{{item.source}}</span>
                      <span class="video-txtr">时间：{{formatDate(item.time, "yyyy-MM-dd")}}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
              <base-pagination class="base-pagination" :currentPage="reqParams.currentPage" :pageSize="reqParams.pageSize" :total="resultData.totalCount" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />

          </div>
        </base-panel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import basePanel from '@/components/common/basePanel.vue'
import searchBar from '@/components/common/searchBar.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import basePagination from '@/components/common/basePagination.vue'
import { isEmpty, isEmptyObject, formatDate } from '@/utils/index.js'

export default {
  name: 'webVideo',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar,
    baseSelect,
    basePagination
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: '音视频', pathName: 'video' }
      ],
      reqParams: {
        keywords: '',
        source: '',
        subject: '',
        dateTime: '',
        currentPage: 1,
        pageSize: 30
      },
      list: [
        {
          id: 1,
          imgSrc: require('../assets/images/pic10.jpg'),
          title: '刘烨马伊琍致敬时代刘烨马伊琍致敬时代刘烨马伊琍致敬时代刘烨马伊琍致敬时代',
          source: '特训工种工具',
          time: 1574640000000
        }
      ]
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList,
      subjectList: state => state.subjectList,
      timeList: state => state.timeList,
      isFilterSearch: state => state.search.isFilterSearch,
      searchText: state => state.search.searchText,
      searchParams: state => state.search.searchParams,
      loading: state => state.photograph.loading,
      resultData: state => state.photograph.resultData
    })
  },
  watch: {
    'reqParams.source' () {
      this.sendRequest()
    },
    'reqParams.subject' () {
      this.sendRequest()
    },
    'reqParams.dateTime' () {
      this.sendRequest()
    }
  },
  methods: {
    ...mapActions({
      getSourceList: 'getSourceList',
      getSubjectList: 'getSubjectList',
      getRemoteData: 'photograph/getRemoteData'
    }),
    formatDate,
    // 发送请求
    sendRequest (type) {
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
        keywords: this.reqParams.keywords,
        source: this.reqParams.source,
        subject: this.reqParams.subject,
        pageIndex: this.reqParams.currentPage - 1,
        pageCount: this.reqParams.pageSize
      })
      const date = new Date()
      switch (this.reqParams.dateTime) {
        case '':
        case '4':
          data.timeStart = null
          data.timeEnd = null
          break
        case '1':
          data.timeEnd = date.getTime()
          date.setDate(date.getDate() - 1)
          data.timeStart = date.getTime()
          break
        case '2':
          data.timeEnd = date.getTime()
          date.setDate(date.getDate() - 7)
          data.timeStart = date.getTime()
          break
        case '3':
          data.timeEnd = date.getTime()
          date.setMonth(date.getMonth() - 1)
          data.timeStart = date.getTime()
          break
        default:
          break
      }
      this.getRemoteData(data)
    },
    // 点击搜索按钮
    handleSearchEvent (keywords) {
      this.reqParams.keywords = keywords
      this.reqParams.currentPage = 1
      this.reqParams.pageSize = 30
      this.sendRequest()
    },
    // 当前页切换
    handleCurrentChange (page) {
      this.reqParams.currentPage = page
      this.sendRequest()
    },
    // 每页条数切换
    handleSizeChange (size) {
      this.reqParams.pageSize = size
      this.sendRequest()
    }
  },
  created () {
    this.getSourceList()
    this.getSubjectList()
    if (this.$route.query.keywords) {
      this.reqParams.keywords = this.$route.query.keywords
      this.sendRequest()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-pagination {
  text-align: center;
}
</style>
