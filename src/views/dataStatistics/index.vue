<template>
  <div class="container dataStatistics">
    <page-header />

    <div class="mainbox clearfix">
      <div class="main-left percent-22">
        <hot-topic />

        <user-area />

        <user-trend />
      </div>

      <div class="main-mid percent-48">
        <map-panel />

        <situation-panel />
      </div>

      <div class="main-right percent-30">
        <new-trend />

        <user-or-topic />
      </div>

      <div class="width clear">

        <div class="main-left percent-22">
          <control-panel />
        </div>

        <div class="main-right percent-78">
          <analysis-panel />
        </div>
      </div>
    </div>

    <div class="pdf-export-item">
      <span>导出word文档的统计报告</span>
    </div>
  </div>
</template>
<script>
import pageHeader from '@/components/common/pageHeader.vue'
import hotTopic from './components/hotTopic.vue'
import userArea from './components/userArea.vue'
import userTrend from './components/userTrend.vue'
import newTrend from './components/newTrend.vue'
import mapPanel from './components/mapPanel.vue'
import controlPanel from './components/controlPanel.vue'
import situationPanel from './components/situationPanel.vue'
import analysisPanel from './components/analysisPanel.vue'
import userOrTopic from './components/userOrTopic.vue'

export default {
  name: 'dataStatistics',
  components: {
    pageHeader,
    hotTopic,
    userArea,
    userTrend,
    newTrend,
    mapPanel,
    controlPanel,
    situationPanel,
    analysisPanel,
    userOrTopic
  }
}
</script>
<style lang="scss" scoped>
</style>
