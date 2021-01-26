<template>
  <div class="container photograph">
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
                <a v-for="item in resultData.relative" :key="item.id" @click="handleRelativeClick(item.name)">{{item.name}}</a>
              </div>
            </div>

            <div class="photograph-list-box">
              <ul class="photos">
                <li class="photo" v-for="item in resultData.imageList" :key="item.id">
                  <el-image :src="item.src" fit="cover" :preview-src-list="[item.src]" @load="handleImageLoad">
                    <div slot="placeholder" class="image-slot">
                      <el-image src="../assets/images/900x600.png"></el-image>
                    </div>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <el-tooltip :content="item.text">
                    <div class="photo-title-ad">{{item.text}}</div>
                  </el-tooltip>
                </li>
              </ul>
              <base-pagination class="base-pagination" :currentPage="reqParams.currentPage" :pageSize="reqParams.pageSize" :total="resultData.totalCount" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
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
import { isEmpty, isEmptyObject } from '@/utils/index.js'

export default {
  name: 'photograph',
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
        { label: '图片', pathName: 'photograph' }
      ],
      reqParams: {
        keywords: '',
        source: '',
        subject: '',
        dateTime: '',
        currentPage: 1,
        pageSize: 30
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
    // 图片加载完毕事件
    handleImageLoad (e) {
      // console.log(Math.floor(e['path'][3]['clientWidth'] / 3))
      e.path[1].style.width = e.path[0].naturalWidth * 300 / e.path[0].naturalHeight + 'px'
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
.base-pagination {
  text-align: center;
}
</style>
