<template>
  <el-pagination :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
export default {
  name: 'basePagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 40]
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 当前页改变
    handleCurrentChange (page) {
      this.$emit('currentChange', page)
    },
    // 每页条数改变
    handleSizeChange (size) {
      this.$emit('sizeChange', size)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-pagination::v-deep {
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  .btn-prev,
  .btn-next,
  .el-pagination__jump .el-input__inner {
    background-color: #0f3867;
    border-color: #1c6bab;
    color: #ffffff;
  }
  .el-pager {
    border-color: #1c6bab;

  }
  .el-pager li {
    background-color: #0f3867;
    color: #ffffff;
  }
  .el-pager li.active {
    color: #409EFF;
  }
  .el-select * {
    background-color: #0f3867;
    border-color: #1c6bab;
    color: #ffffff;
  }
}
</style>
