<template>
  <div class="container document">
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

              <div class="related-search-item">
                <span class="blue-search-titile">相关搜索：</span>
                <a
                  v-for="item in resultData.relative"
                  :key="item.id"
                  @click="handleRelativeClick(item.name)"
                >{{item.name}}</a>
              </div>
            </div>

            <baseTable :list="docList">
              <el-table-column label="标题和内容" width="500px">
                <template slot-scope="scope">
                  <div v-if="showAllList[scope.$index].showAll1">
                    <div class="document-list-cont">
                      <p class="document-title">
                        <span class="document-icon" :class="getSuffixIcon(scope.row.url)"></span>
                        {{scope.row.title}}
                      </p>
                      <div class="document-detailtxt">
                        <span>{{scope.row.content}}</span>
                        <span
                          class="full-information"
                          @click="handleExpandchange(1, scope.$index)"
                        >&nbsp;&nbsp;收起&nbsp;&gt;</span>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="document-list-cont">
                      <p class="document-title">
                        <span class="document-icon" :class="getSuffixIcon(scope.row.url)"></span>
                        {{scope.row.title}}
                      </p>
                      <div class="document-detailtxt">
                        <span>{{limitTextLength(scope.row.content, 480, 1)}}</span>
                        <span
                          class="full-information"
                          @click="handleExpandchange(1, scope.$index)"
                          v-if="textTooLong(scope.row.content, 480, 1)"
                        >&nbsp;&nbsp;展开&nbsp;&gt;</span>
                      </div>
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="publisher" label="发布者"></el-table-column>
              <el-table-column prop="source" label="来源"></el-table-column>
              <el-table-column prop="time" label="时间" align="center">
                <template slot-scope="scope">{{formatDate(scope.row.time, "yyyy-MM-dd")}}</template>
              </el-table-column>
            </baseTable>
            <div class="pagenation-box clearfix">
              <base-pagination
                class="base-pagination"
                :currentPage="reqParams.currentPage"
                :pageSize="reqParams.pageSize"
                :total="resultData.totalCount"
                @currentChange="handleCurrentChange"
                @sizeChange="handleSizeChange"
              />
            </div>
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
import baseTable from '@/components/common/baseTable.vue'
import basePagination from '@/components/common/basePagination.vue'
import {
  formatDate,
  isEmptyObject,
  limitTextLength,
  textTooLong
} from '@/utils'

export default {
  name: 'document',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar,
    baseSelect,
    baseTable,
    basePagination
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: '文档', pathName: 'document' }
      ],
      showAllList: [],
      reqParams: {
        keywords: '',
        source: '',
        subject: '',
        dateTime: '',
        currentPage: 1,
        pageSize: 10
      }
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
      // loading: state => state.photograph.loading,
      resultData: state => state.document.resultData
    }),
    docList () {
      if (!this.resultData.docList) {
        return []
      }
      const list = []
      this.resultData.docList.map(() => {
        list.push({ showAll1: false })
      })
      this.showAllList = list
      return this.resultData.docList
    }
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
      getRemoteData: 'document/getRemoteData'
    }),
    formatDate,
    limitTextLength,
    textTooLong,
    // 获取后缀名称对应的icon
    getSuffixIcon (str) {
      if (str) {
        const temp = str.match(/txt|pdf|ppt|xls|doc/)
        if (temp) {
          return temp[0]
        }
      }
      return ''
    },
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
    // 点击相关搜索
    handleRelativeClick (name) {
      this.reqParams.keywords = name
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
    },
    // 展开、收起
    handleExpandchange (type, idx) {
      this.$set(
        this.showAllList[idx],
        ['showAll' + type],
        !this.showAllList[idx]['showAll' + type]
      )
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
</style>
