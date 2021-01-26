<template>
  <div class="position-item">
    <p class="inline">当前所在位置：</p>
    <el-breadcrumb class="inline" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{name: item.pathName}" v-for="(item, index) in list" :key="index">{{item.label}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{currentPath}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  computed: {
    // 过滤当前路由获得可跳转路由
    list () {
      return this.navList.filter((item, idx, arr) => {
        return idx !== arr.length - 1
      })
    },
    // 当前路由
    currentPath () {
      return this.navList[this.navList.length - 1].label
    }
  }
}
</script>
<style lang="scss" scoped>
.position-item {
  font-size: 0;
}
.position-item::v-deep .inline {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  .el-breadcrumb__inner {
    color: #46c7ea;
  }
  .el-breadcrumb__inner.is-link,
  .el-breadcrumb__inner a {
    font-weight: normal;
    color: #fff;
  }
  .el-breadcrumb__inner.is-link:hover,
  .el-breadcrumb__inner a:hover {
    color: #46c7ea;
  }
  .el-breadcrumb__separator {
    color: #46c7ea;
  }
}
</style>
