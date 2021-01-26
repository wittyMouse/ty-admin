<template>
  <div class="container group">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="search-content-main">
        <span class="footer-shadow"></span>
        <base-panel>
          <search-bar
            :keywords="reqParams.keywords"
            :showResultSize="true"
            :resultSize="totalCount"
            @searchEvent="handleSearchEvent"
          />

          <div class="box-content">
            <div class="search-event-main clearfix">
              <div class="event-search-left">
                <div class="search-event-date">
                  <span class="fleft lh40 label">按时间过滤</span>
                  <div class="range-inputbox">
                    <el-date-picker
                      v-model="reqParams.timeStart"
                      align="right"
                      type="datetime"
                      placeholder="请选择开始时间"
                      :editable="false"
                      :time-arrow-control="true"
                      value-format="timestamp"
                    ></el-date-picker>
                    <el-date-picker
                      v-model="reqParams.timeEnd"
                      align="right"
                      type="datetime"
                      placeholder="请选择结束时间"
                      :editable="false"
                      :time-arrow-control="true"
                      value-format="timestamp"
                    ></el-date-picker>
                  </div>
                </div>

                <div class="event-chart-left">
                  <div class="chart-item-box">
                    <multiple-chart :kind="1" :source="multipleSource" />
                  </div>
                </div>

                <div class="event-table-box clearfix">
                  <base-table :list="groups" tableHeight="480px" @row-dblclick="handleRowClick">
                    <el-table-column min-width="200px" prop="title" label="群组名称">
                      <template slot-scope="scope">
                        <div v-if="showAllList[scope.$index].showAll1">
                          <span v-html="highLight(scope.row.title, reqParams.keywords)"></span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(1, scope.$index)"
                          >&nbsp;收起&nbsp;&gt;</span>
                        </div>
                        <div v-else>
                          <span
                            v-html="highLight(limitTextLength(scope.row.title, 180), reqParams.keywords)"
                          ></span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(1, scope.$index)"
                            v-if="textTooLong(scope.row.title, 180)"
                          >&nbsp;展开&nbsp;&gt;</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column width="500px" prop="description" label="描述">
                      <template slot-scope="scope">
                        <div v-if="showAllList[scope.$index].showAll2">
                          <span>{{scope.row.description}}</span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(2, scope.$index)"
                          >&nbsp;收起&nbsp;&gt;</span>
                        </div>
                        <div v-else>
                          <span>{{limitTextLength(scope.row.description, 480)}}</span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(2, scope.$index)"
                            v-if="textTooLong(scope.row.description, 480)"
                          >&nbsp;展开&nbsp;&gt;</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column width="350px" prop="administrator" label="管理员">
                      <template slot-scope="scope">
                        <div v-if="showAllList[scope.$index].showAll3">
                          <span>{{scope.row.administrator}}</span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(3, scope.$index)"
                          >&nbsp;收起&nbsp;&gt;</span>
                        </div>
                        <div v-else>
                          <span>{{limitTextLength(scope.row.administrator, 330)}}</span>
                          <span
                            class="full-information"
                            @click.stop="handleExpandchange(3, scope.$index)"
                            v-if="textTooLong(scope.row.administrator, 330)"
                          >&nbsp;展开&nbsp;&gt;</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" width="100px" prop="time" label="时间">
                      <template slot-scope="scope">{{formatDate(scope.row.time, "yyyy-MM-dd")}}</template>
                    </el-table-column>
                  </base-table>

                  <div class="pagenation-box clearfix">
                    <base-pagination
                      :currentPage="reqParams.currentPage"
                      :pageSize="reqParams.pageSize"
                      :total="totalCount"
                      @currentChange="handleCurrentChange"
                      @sizeChange="handleSizeChange"
                    ></base-pagination>
                  </div>
                </div>
              </div>

              <div class="event-search-right">
                <div class="event-search-piechart">
                  <p class="text-center">按类别过滤</p>
                  <div class="chart-item-box">
                    <pie-chart :kind="2" :source="pieSource" />
                  </div>
                </div>

                <div class="event-search-listmenu">
                  <!-- <div class="search-title-current">按群组过滤</div>
                  <div class="group-keytag">
                    <a
                      :class="{current:reqParams.groupName===item}"
                      v-for="(item, index) in groutList"
                      :key="index"
                      @click="handleScreenClick('group', item)"
                    ><el-tooltip :content="item"><span>{{item}}</span></el-tooltip></a>
                  </div>-->
                  <div class="search-title-current">按用户过滤</div>
                  <div class="group-keytag">
                    <a
                      :class="{current:reqParams.userName===item}"
                      v-for="(item, index) in userList"
                      :key="index"
                      @click="handleScreenClick('user', item)"
                    >
                      <el-tooltip :content="item">
                        <span>{{item}}</span>
                      </el-tooltip>
                    </a>
                  </div>
                </div>
              </div>
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
import multipleChart from '@/components/common/multipleChart.vue'
import pieChart from '@/components/common/pieChart.vue'
import baseTable from '@/components/common/baseTable.vue'
import basePagination from '@/components/common/basePagination.vue'
import {
  formatDate,
  isEmptyObject,
  highLight,
  limitTextLength,
  textTooLong
} from '@/utils/index.js'

export default {
  name: 'group',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar,
    multipleChart,
    pieChart,
    baseTable,
    basePagination
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: '群组', pathName: 'group' }
      ],
      showAllList: [],
      reqParams: {
        keywords: '',
        timeStart: null,
        timeEnd: null,
        // groupName: "",
        userName: '',
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    ...mapState({
      isFilterSearch: state => state.search.isFilterSearch,
      searchText: state => state.search.searchText,
      searchParams: state => state.search.searchParams,
      resultData: state => state.group.resultData
    }),
    totalCount () {
      if (!this.resultData || !this.resultData.totalCount) {
        return 0
      }
      return this.resultData.totalCount
    },
    // multipleSource() {
    //   if (!this.resultData || !this.resultData.timeline) {
    //     return [];
    //   }
    //   return this.resultData.timeline;
    // },
    multipleSource () {
      if (!this.resultData || !this.resultData.timeline) {
        return []
      }
      const source = [['product', '', '']]
      const bar = this.resultData.timeline.bar
      const line = this.resultData.timeline.line
      if (bar instanceof Array && line instanceof Array) {
        for (let i = 0; i < Math.min(bar.length, line.length); i++) {
          const temp = [bar[i].label, bar[i].value, line[i].value]
          source.push(temp)
        }
      }
      // console.log(source)
      return source
    },
    pieSource () {
      if (!this.resultData || !this.resultData.category) {
        return []
      }
      const category = this.resultData.category
      const arr = [['product', '类别']]
      category.map(item => {
        arr.push([item.name, item.value])
      })
      return arr
    },
    groups () {
      if (!this.resultData || !this.resultData.groups) {
        return []
      }
      const list = []
      this.resultData.groups.map(() => {
        list.push({ showAll1: false, showAll2: false, showAll3: false })
      })
      this.showAllList = list
      return this.resultData.groups
    },
    // groutList() {
    //   if (
    //     !this.resultData ||
    //     !this.resultData.tagList ||
    //     !this.resultData.tagList.groutList
    //   ) {
    //     return [];
    //   }
    //   return this.resultData.tagList.groutList;
    // },
    userList () {
      if (
        !this.resultData ||
        !this.resultData.tagList ||
        !this.resultData.tagList.userList
      ) {
        return []
      }
      return this.resultData.tagList.userList
    }
  },
  watch: {
    'reqParams.timeStart' () {
      this.sendRequest()
    },
    'reqParams.timeEnd' () {
      this.sendRequest()
    },
    // ["reqParams.groupName"]() {
    //   this.sendRequest();
    // },
    'reqParams.userName' () {
      this.sendRequest()
    }
  },
  methods: {
    ...mapActions({ getRemoteData: 'group/getRemoteData' }),
    formatDate,
    highLight,
    limitTextLength,
    textTooLong,
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
          timeEnd: this.searchParams.endTime,
          marked: this.searchParams.marked,
          contents: this.searchParams.content + 1,
          title: this.searchParams.title,
          author: this.searchParams.author
        }
      }
      data = Object.assign({}, data, {
        keywords: this.reqParams.keywords,
        pageIndex: this.reqParams.currentPage - 1,
        pageCount: this.reqParams.pageSize,
        timeStart: this.reqParams.timeStart,
        timeEnd: this.reqParams.timeEnd,
        // groupName: this.reqParams.groupName,
        userName: this.reqParams.userName
      })
      this.getRemoteData(data)
    },
    // 点击搜索按钮
    handleSearchEvent (keywords) {
      this.reqParams.keywords = keywords
      this.sendRequest()
    },
    // 点击行
    handleRowClick (row) {
      this.$router.push({ name: 'websitePage', query: { type: 'group', id: row.id } })
    },
    // 当前页改变
    handleCurrentChange (page) {
      this.reqParams.currentPage = page
      this.sendRequest()
    },
    // 每页条数改变
    handleSizeChange (size) {
      this.reqParams.pageSize = size
      this.sendRequest()
    },
    // 筛选条件切换
    handleScreenClick (target, item) {
      switch (target) {
        // case "group":
        //   if (this.reqParams.groupName === item) {
        //     this.reqParams.groupName = "";
        //     return;
        //   }
        //   this.reqParams.groupName = item;
        //   break;
        case 'user':
          if (this.reqParams.userName === item) {
            this.reqParams.userName = ''
            return
          }
          this.reqParams.userName = item
          break
        default:
          break
      }
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
    if (
      this.isFilterSearch &&
      (this.searchParams.startTime || this.searchParams.endTime)
    ) {
      this.reqParams.timeStart = this.searchParams.startTime
      this.reqParams.timeEnd = this.searchParams.endTime
    }
    if (this.$route.query.keywords) {
      this.reqParams.keywords = this.$route.query.keywords
      this.sendRequest()
    }
  }
}
</script>

<style lang="scss" scoped>
.event-chart-left .chart-item-box {
  width: 100%;
  height: 180px;
}
.event-search-piechart .chart-item-box {
  width: 100%;
  height: 220px;
}
.range-inputbox {
  width: unset;
  height: unset;
  line-height: unset;
  background-color: unset;
  border: unset;
}
.el-date-editor:last-child {
  margin-left: 15px;
}
</style>
