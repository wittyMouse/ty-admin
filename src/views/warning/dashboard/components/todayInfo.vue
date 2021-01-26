<template>
  <tmpl-panel title="今日情报" panelClass="height-intelligence">
    <div class="warm-databox">
      <span class="w-arrow-left"></span>
      <span class="w-arrow-right"></span>
      <div class="warm-data-cont mt-none">
        <span class="fleft">今日情报预警总数</span>
        <span class="math yellow fright">{{todayInfo.count}}</span>
      </div>
    </div>

    <div class="intelligence-circle-chart fleft">
      <img src="../../../../assets/images/measurement-circle.png" />
    </div>

    <div class="intelligence-chart-data fleft">
      <div class="intelligence-data-box">
        <span class="low-button">低危</span>&nbsp;&nbsp;发现
        <span class="low-text">&nbsp;{{todayInfo.low_level}}&nbsp;</span>件
      </div>

      <div class="intelligence-data-box">
        <span class="center-button">中危</span>&nbsp;&nbsp;发现
        <span class="center-text">&nbsp;{{todayInfo.middle_level}}&nbsp;</span>件
      </div>

      <div class="intelligence-data-box">
        <span class="high-button">高危</span>&nbsp;&nbsp;发现
        <span class="high-text">&nbsp;{{todayInfo.high_level}}&nbsp;</span>件
      </div>
    </div>
  </tmpl-panel>
</template>

<script>
import { mapState } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'

export default {
  name: 'todayInfo',
  components: {
    tmplPanel
  },
  props: {
    todayInfo: Object
  }
}
</script>

<style>
</style>
