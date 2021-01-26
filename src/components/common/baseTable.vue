<template>
  <el-table
    :data="list"
    :height="tableHeight"
    header-row-class-name="table-header-row"
    header-cell-class-name="table-header-cell"
    row-class-name="table-row"
    cell-class-name="table-row-cell"
    @row-dblclick="handleRowClick"
  >
    <template slot="empty">
      <span class="empty-text">暂无信息</span>
    </template>
    <slot></slot>
  </el-table>
</template>
<script>
export default {
  name: 'baseTable',
  props: {
    tableHeight: [Number, String],
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    // 行点击事件
    handleRowClick (row, column, event) {
      this.$emit('row-dblclick', row, column, event)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-table::before {
  background-color: transparent;
}
.el-table::v-deep {
  background-color: transparent;
  th {
    background-color: #0e2654;
  }
  .el-table__body tr:hover > td {
    // background-color: rgba(255, 255, 255, 0.1);
    background-color: #0d2153;
  }
  .table-header-cell {
    font-size: 13px;
    padding: 6px 0;
    background-color: #0e2654;
    border-bottom: 1px solid #0e2654;
  }
  .table-row {
    background-color: transparent;
  }
  .table-row:nth-child(even) {
    background-color: #040b32;
  }
  .table-row-cell {
    font-size: 13px;
    padding: 6px 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
  }
  .empty-text {
    color: #46c7ea;
  }
}
</style>
