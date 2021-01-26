<template>
  <base-panel panelClass="height-relation-show">
    <!--数字货币地址=start-->
    <div class="blockchain-relation-item">
      <span class="content-icon icon-address"></span>
      <div class="fleft blockchain-content-width">
        <p>数字货币地址</p>
        <p class="white chain-text">{{detailData.address}}</p>
      </div>
    </div>
    <!--数字货币地址=end-->

    <!--用户名=start-->
    <div class="blockchain-relation-item">
      <span class="content-icon icon-relationuser"></span>
      <div class="fleft blockchain-content-width">
        <p>用户名</p>
        <p class="white chain-text">{{detailData.username}}</p>
      </div>
    </div>
    <!--用户名=end-->

    <!--关联地址=start-->
    <div class="relation-address-item">
      <div class="bluebg-title" @click="handlePathSwitchClick">
        关联地址（{{pathSize}}）
        <span class="arrow-triangle" :class="openPathList?'triangle-top':'triangle-down'"></span>
      </div>
      <div class="relation-list" v-if="openPathList">
        <p v-for="(item, index) in detailData.pathList" :key="index">{{item}}</p>
      </div>
    </div>
    <!--关联地址=end-->

    <!--关联IP=start-->
    <div class="relation-address-item">
      <div class="bluebg-title" @click="handleIpSwitchClick">
        关联IP（{{ipSize}}）
        <span class="arrow-triangle" :class="openIPList?'triangle-top':'triangle-down'"></span>
      </div>
      <div class="relation-list" v-if="openIPList">
        <p v-for="(item, index) in detailData.ipList" :key="index">{{item}}</p>
      </div>
    </div>
    <!--关联IP=end-->

    <!--数据统计=start-->
    <count-list :list="detailData.summaryList"></count-list>
  </base-panel>
</template>
<script>
import basePanel from '@/components/common/basePanel.vue'
import countList from '@/components/common/countList.vue'

export default {
  name: 'detailPanel',
  components: {
    basePanel,
    countList
  },
  props: {
    detailData: {
      type: Object
    }
  },
  data () {
    return {
      openPathList: false,
      openIPList: false
    }
  },
  computed: {
    pathSize () {
      if (!this.detailData || !this.detailData.pathList) {
        return 0
      }
      return this.detailData.pathList.length
    },
    ipSize () {
      if (!this.detailData || !this.detailData.ipList) {
        return 0
      }
      return this.detailData.ipList.length
    }
  },
  methods: {
    handlePathSwitchClick () {
      if (this.pathSize !== 0) {
        this.openPathList = !this.openPathList
      }
    },
    handleIpSwitchClick () {
      if (this.ipSize !== 0) {
        this.openIPList = !this.openIPList
      }
    }
  }
}
</script>
<style lang="scss">
.height-relation-show {
  max-height: 800px;
  height: 792px;
}
</style>
