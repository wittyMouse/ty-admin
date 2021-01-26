<template>
  <div class="bar-tab-width">
    <div class="table-headsearch text-right">
      <label class="fleft margin-left10">
        <input type="checkbox" class="checkbox-type" v-model="checkAll" @change="handleCheckAll" />全选
      </label>
      <div class="fright headtable-right">
        <base-select
          class="width200"
          placeholder="按相关性排序"
          v-model="relativeSort"
          :list="sortList"
        />

        <button class="default-blue-smallbtn" @click="handleBatchCloseClick">关闭详细</button>
        <button class="default-blue-smallbtn" @click="handleBatchReadClick">已读</button>
        <button class="default-blue-smallbtn" @click="handleBatchAddClick">添加</button>
        <button class="default-blue-smallbtn" @click="handleBatchDeleteClick">删除</button>
      </div>
    </div>

    <div class="table-list-box">
      <div class="table-list-cont" v-for="(item, index) in resultData" :key="item.id">
        <div class="tabulation-item">
          <label class="fleft">
            <input
              type="checkbox"
              class="checkbox-type"
              :checked="checkedList.includes(item.id)"
              @change="handleCheckBoxChange(item.id)"
            />
          </label>
          <div class="tiotabulan-text">
            <div class="width">
              <span class="tiotabulan-title" style="cursor: pointer;" @click="handleDetailClick"><a>{{item.title}}</a></span>
              <span class="fleft tiotabulan-date">入库时间：{{formatDate(item.saveTime)}}</span>
              <a href="javascript:;" class="green-radius-btn fright" @click="handleInfoFollow(item)">追踪</a>
            </div>
            <p class="width clear">链接地址：{{item.url}}</p>
            <p class="width clear three-ellipsis" :title="item.content" v-html="`内容：${item.isOpen ? item.content : item.digest}`"></p>
            <div class="tabulation-subfield">
              <span>来自：{{item.source}}</span>
              <span class="text-center" v-show="item.website">网站：{{item.website}}</span>
              <span class="text-right" style="float: right">发布时间：{{formatDate(item.published)}}</span>
            </div>
          </div>

          <span class="unfold-btn fright" @click="handleOpenClick(index)" v-if="item.isOpen"></span>
          <span class="fold-btn fright" @click="handleOpenClick(index)" v-else></span>
        </div>

        <div class="tabulation-icons" v-show="item.isOpen">
          <a @click="handleUnreadClick(item.id)">
            <i class="unread-icon"></i>未读
          </a>
          <a @click="handleReadClick(item.id)">
            <i class="read-icon"></i>已读
          </a>
          <a @click="handlePushClick(item)">
            <i class="move-icon"></i>推送
          </a>
        </div>
      </div>

      <div class="pagenation-box clearfix">
        <base-pagination
          :currentPage="currentPage"
          :pageSize="pageSize"
          :totle="totle"
          @currentChange="handleCurrentChange"
          @sizeChange="handleSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/warning'
import { formatDate } from '@/utils/index'
import baseSelect from '@/components/common/baseSelect.vue'
import basePagination from '@/components/common/basePagination.vue'

export default {
  name: 'infoClue',
  components: {
    baseSelect,
    basePagination
  },
  props: {
    currentTab: {
      type: Number
    },
    sortList: {
      type: Array,
      default () {
        return []
      }
    },
    reqParams: {
      type: Object,
      default () {
        return {
          timeStart: null,
          timeEnd: null,
          remark: 0,
          infoType: 0
        }
      }
    }
  },
  data () {
    return {
      // 相关性排序
      relativeSort: '',
      // 页码
      currentPage: 1,
      // 每页条数
      pageSize: 10,
      // 总条数
      totle: 0,
      // 是否全选
      checkAll: false,
      // 选中数据列表
      checkedList: [],
      resultData: []
    }
  },
  watch: {
    relativeSort () {
      this.$nextTick().then(() => {
        this.getGlobalInfo()
      })
    }
  },
  methods: {
    formatDate,
    // 查看详情
    handleDetailClick () {
      this.$router.push({ name: 'warning_clue_detail' })
    },
    // 批量关闭详情
    handleBatchCloseClick () {},
    // 批量已读
    handleBatchReadClick () {},
    // 批量添加
    handleBatchAddClick () {},
    // 批量删除
    handleBatchDeleteClick () {},
    // 未读
    handleUnreadClick (id) {
      this.loading = true
      const data = {
        follow: 0,
        ids: id
      }
      api.setGlobalInfoUnread(data).then(res => {
        if (res.data.code === 0) {
          this.$message.success('已设为未读')
          this.getGlobalInfo()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 已读
    handleReadClick (id) {
      this.loading = true
      const data = {
        follow: 0,
        ids: id
      }
      api.setGlobalInfoRead(data).then(res => {
        if (res.data.code === 0) {
          this.$message.success('已设为已读')
          this.getGlobalInfo()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 追踪
    handleInfoFollow (row) {
      this.loading = true
      const data = {
        follow: 0,
        type: row.source,
        ids: row.id
      }
      api.setGlobalFollow(data).then(res => {
        if (res.data.code === 0) {
          this.$message.success('追踪成功')
          this.getGlobalInfo()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 推送
    handlePushClick (row) {
      this.loading = true
      const data = {
        follow: 0,
        type: row.source,
        ids: row.id
      }
      api.setGlobalFollow(data).then(res => {
        if (res.data.code === 0) {
          this.$message.success('推送成功')
          this.getGlobalInfo()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 展开关闭
    handleOpenClick (idx) {
      const obj = Object.assign({}, this.resultData[idx], {
        isOpen: !this.resultData[idx].isOpen
      })
      this.$set(this.resultData, idx, obj)
    },
    // 全选
    handleCheckAll (e) {
      const arr = []
      this.resultData.map(item => {
        arr.push(item.id)
      })
      if (e.target.checked) {
        this.checkedList = arr
      } else {
        this.checkedList = []
      }
    },
    // 多选框修改
    handleCheckBoxChange (id) {
      const arr = []
      const sortFn = (a, b) => {
        return Number(a) - Number(b)
      }
      this.resultData.map(item => {
        arr.push(item.id)
      })
      if (this.checkedList.includes(id)) {
        this.checkedList = this.checkedList.filter(item => {
          return item !== id
        })
        if (this.checkAll) {
          this.checkAll = false
        }
      } else {
        this.checkedList.push(id)
        if (
          this.checkedList.sort(sortFn).join('') === arr.sort(sortFn).join('')
        ) {
          this.checkAll = true
        }
      }
    },
    // 当前页切换
    handleCurrentChange (page) {
      this.currentPage = page
      this.getGlobalInfo()
    },
    // 每页条数切换
    handleSizeChange (size) {
      this.pageSize = size
      this.getGlobalInfo()
    },
    // 获取线索库情报线索列表数据
    getGlobalInfo () {
      this.loading = true
      const data = {
        follow: 0,
        timeStart: this.reqParams.timeStart,
        timeEnd: this.reqParams.timeEnd,
        remark: Number(this.reqParams.remark),
        infoType: this.reqParams.infoType,
        relativeSort: Number(this.relativeSort || 0),
        pageIndex: this.currentPage,
        pageCount: this.pageSize
      }
      api.getGlobalInfo(data).then(res => {
        if (res.data.code === 0) {
          this.resultData = res.data.data.results
          this.totle = res.data.count
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getGlobalInfo()
  }
}
</script>

<style lang="scss" scoped>
</style>
