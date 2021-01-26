<template>
  <base-panel :panelClass="panelClass">
    <el-tabs :value="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item" :name="(index + 1).toString()" v-for="(item, index) in tabTitleList" :key="index">
        <slot :name="(index + 1).toString()"></slot>
      </el-tab-pane>
    </el-tabs>
  </base-panel>
</template>
<script>
import basePanel from '@/components/common/basePanel.vue'

export default {
  name: 'tabPanel',
  components: {
    basePanel
  },
  props: {
    activeName: {
      type: String,
      default: '1'
    },
    tabTitleList: {
      type: Array,
      required: true
    },
    panelClass: String
  },
  methods: {
    handleClick (tab) {
      this.$emit('update:activeName', tab.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-tabs::v-deep {
  .el-tabs__nav-wrap {
    padding: 0 12px;
  }
  .el-tabs__content {
    padding: 0 10px;
  }
  .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: #09294e;
  }
  .el-tabs__active-bar {
    background-color: #46c7ea;
  }
  .el-tabs__item {
    height: 37px;
    color: #fff;
  }
  .el-tabs__item.is-active {
    color: #46c7ea;
  }
  .el-tabs__item:hover {
    color: #46c7ea;
  }
}
</style>
