<template>
  <base-panel class="fleft" panelClass="height-sale-table">
    <div class="box-content">
      <div class="table-headsearch">
        <input class="common-input" type="text" v-model="keywords" placeholder="输入要搜索的内容" />
        <button class="search-icon-btn" type="button" @click="handleSearchClick"></button>
      </div>

      <base-table class="sale-table" :list="saleList" tableHeight="410px">
        <el-table-column prop="name" label="发帖人"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="time" label="发帖时间">
          <template slot-scope="scope">{{formatDate(scope.row.time)}}</template>
        </el-table-column>
        <el-table-column label="已卖数量/总数量">
          <template slot-scope="scope">{{scope.row.count + '/' + scope.row.stock}}</template>
        </el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column align="center" width="170px" prop="snapshot" label="页面快照">
          <template slot-scope="scope">
            <div class="table-icons-box">
              <a title="内容详情" class="s-more-icon" @click="hanleView($event, scope.row.snapshot)"></a>
              <!-- <el-image class="detail-image" :src="scope.row.snapshot" :preview-src-list="[scope.row.snapshot]" ref="image"></el-image> -->
            </div>
          </template>
        </el-table-column>
      </base-table>

      <base-pagination class="base-pagination" :currentPage="currentPage" :pageSize="pageSize" :total="total" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
    </div>
  </base-panel>
</template>

<script>
import _ from 'lodash'
import basePanel from '@/components/common/basePanel.vue'
import baseTable from '@/components/common/baseTable.vue'
import basePagination from '@/components/common/basePagination.vue'
import { formatDate } from '@/utils'

export default {
  name: 'saleRank',
  components: {
    basePanel,
    baseTable,
    basePagination
  },
  props: {
    msgData: Object
  },
  data () {
    return {
      keywords: '',
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    saleList () {
      if (_.isEmpty(this.msgData)) {
        return []
      }
      return this.msgData.data
    },
    total () {
      if (_.isEmpty(this.msgData)) {
        return 0
      }
      return this.msgData.count
    }
  },
  methods: {
    formatDate,

    // 点击快照事件
    hanleView (e, url) {
      // e.target.nextElementSibling.firstElementChild.click()
      window.open(url)
    },

    // 点击搜索按钮
    handleSearchClick () {
      this.sendRequest()
    },

    // 当前页切换
    handleCurrentChange (page) {
      this.currentPage = page
      this.sendRequest()
    },

    // 每页条数切换
    handleSizeChange (size) {
      this.pageSize = size
      this.sendRequest()
    },

    // 发起请求
    sendRequest () {
      const params = {
        keyword: this.keywords,
        pageIndex: this.currentPage,
        pageCount: this.pageSize
      }
      this.$emit('search', params)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-content {
  display: flex;
  flex-direction: column;
  height: 100%;

  .table-headsearch {
    margin-bottom: 10px;
    padding: 0;
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .sale-table {
    flex: 0 0 auto;
  }

  .base-pagination {
    flex: 0 0 auto;
    margin-top: 10px;
    text-align: center;
  }

  .detail-image {
    width: 0px;
    height: 0px;
  }
}
</style>
