<template>
  <div class="container webPage">
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

            <div class="webpage-list-item">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <p class="webpage-title" v-html="highLight(item.title, reqParams.keywords)"></p>
                  <div class="webpage-listbox">
                    <div class="wp-pic">
                      <el-image :src="item.image" :preview-src-list="[item.image]"></el-image>
                    </div>
                    <div class="webpage-detailtxt">
                      <p>
                        <template v-if="showAllList[index].showAll1">
                          <span v-html="item.content"></span>
                          <!-- <span v-html="highLight(item.content, reqParams.keywords)"></span> -->
                          <span
                            class="full-information"
                            @click="handleExpandchange(1, index)"
                          >&nbsp;收起&nbsp;&gt;</span>
                        </template>
                        <template v-else>
                          <span v-html="item.digest"></span>
                          <!-- <span v-html="highLight(limitTextLength(subKeyword(item.content, reqParams.keywords), 2000), reqParams.keywords)"></span> -->
                          <span
                            class="full-information"
                            @click="handleExpandchange(1, index)"
                            v-if="textTooLong(item.content, 2000)"
                          >&nbsp;展开&nbsp;&gt;</span>
                        </template>
                      </p>
                      <div class="webpage-functionbox">
                        <span class="blue fleft">来源：{{item.source}}</span>
                        <div class="tabulation-icons fleft">
                          <a href="javascript:;">
                            <i class="track-icon"></i>追踪
                          </a>
                          <a href="javascript:;">
                            <i class="move-icon"></i>推送
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
import basePagination from '@/components/common/basePagination.vue'
import {
  isEmpty,
  isEmptyObject,
  highLight,
  limitTextLength,
  textTooLong,
  subKeyword
} from '@/utils/index.js'

export default {
  name: 'webPage',
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
        { label: '网页', pathName: 'webPage' }
      ],
      reqParams: {
        keywords: '',
        source: '',
        subject: '',
        dateTime: '',
        currentPage: 1,
        pageSize: 10
      },
      showAllList: []
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
      loading: state => state.webPage.loading,
      resultData: state => state.webPage.resultData
    }),
    webList () {
      if (this.resultData && this.resultData.events) {
        return this.resultData.events
      }
      return []
    },
    list () {
      const list = []
      this.webList.map(() => {
        list.push({ showAll1: false })
      })
      this.showAllList = list
      return this.webList
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
      getRemoteData: 'webPage/getRemoteData'
    }),
    highLight,
    limitTextLength,
    textTooLong,
    subKeyword,
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
      this.reqParams.pageSize = 10
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
  mounted () {
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
.photos {
  display: flex;
  flex-wrap: wrap;
}
.photo {
  margin: 10px;
  height: 300px;
}
.photo .photo-title-ad {
  z-index: 1;
}
.photo::v-deep {
  img {
    max-width: 100%;
  }
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  color: #909399;
  font-size: 14px;
  width: 300px;
  height: 300px;
  font-size: 30px;
}

.base-pagination::v-deep {
  .el-pager {
    li.active {
      padding: 0 4px;
    }
  }
}
.wp-pic {
  height: 100px;
  .el-image {
    width: 100%;
    height: 100%;
  }
}
</style>
