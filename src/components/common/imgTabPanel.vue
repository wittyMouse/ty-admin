<template>
  <!--ip地址选项卡=start-->
  <div class="tab-mainbox">
    <ul class="tab-search-list">
      <li :class="{current: currentTab === index}" v-for="(item, index) in list" :key="index" @click="handleTabChange(index)">{{item}}</li>
    </ul>
    <div class="tab-content-box">

      <div class="relation-btn-default" @click="handleChangeDetailPanel" v-if="showDetailPanel">
        {{isShow ? '隐藏' : '显示'}}数据
        <span class="relation-btn-striangle"></span>
      </div>

      <div class="tab-width">
        <transition enter-active-class="animated faster delay-half-1s fadeInRightBig" leave-active-class="animated faster fadeOutLeftBig">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgTabPanel',
  props: {
    showDetailPanel: Boolean,
    isShow: Boolean,
    list: {
      type: Array,
      required: true
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // tab切换事件
    handleTabChange (idx) {
      this.$emit('tabChange', idx)
    },
    // 详情面板开关
    handleChangeDetailPanel () {
      this.$emit('update:isShow', !this.isShow)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
