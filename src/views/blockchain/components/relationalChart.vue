<template>
  <base-panel class="margin-top10" panelClass="height-relation">
    <div class="box-content">
      <div class="relation-chart-item">
        <iframe class="iframe" src="/ty/bigbang/bigbang-v1.html"></iframe>
      </div>
      <div class="relation-btn-default">
        隐藏数据
        <span class="relation-btn-striangle"></span>
      </div>
    </div>
  </base-panel>
</template>
<script>
import basePanel from '@/components/common/basePanel.vue'

export default {
  name: 'relationalChart',
  components: {
    basePanel
  }
}
</script>
<style lang="scss" scoped>
.relation-chart-item {
  height: 442px;
  .iframe {
    width: 100%;
    height: 100%;
    background-color: rgb(131, 133, 133);
  }
}
</style>
