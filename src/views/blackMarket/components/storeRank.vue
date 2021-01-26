<template>
  <tmpl-panel class="fleft" panelClass="height-store-rank" title="店铺排行">
    <div class="fleft store-rank-box">
      <div class="store-ranking-item" v-for="(item, index) in shopTopData.data" :key="index">
        <span class="sale-number">{{formatNumber(index+1)}}</span>
        <div class="store-name" :title="item.label">{{item.label}}</div>
      </div>
    </div>

    <div class="theme-circle fright">
      <p class="mid-math yellow">{{shopTopData.count}}</p>
      <p>会员人数</p>
    </div>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import { formatNumber } from '@/utils'

export default {
  name: 'storeRank',
  components: {
    tmplPanel
  },
  props: {
    shopTopData: Object
  },
  methods: {
    formatNumber
  }
}
</script>

<style lang="scss" scoped>
</style>
