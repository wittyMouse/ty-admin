<template>
  <tmpl-panel title="威胁评级" panelClass="threat-height">
    <div class="chart-item">
      <div class="threat-item clearfix">
        <div class="threat-circle-box">
          <span class="threat-circle-percent">{{dangerLevel.levelDir}}</span>
        </div>
        <div class="math yellow fleft threat-space">{{dangerLevel.score}}分</div>

        <div class="threat-text fleft">
          <p>
            环比&nbsp;&nbsp;
            <span class="light-green">{{dangerLevel.monthPercent}}%</span>
          </p>
          <p>
            同比&nbsp;&nbsp;
            <span class="light-green">{{dangerLevel.yearPercent}}%</span>
          </p>
        </div>
      </div>
    </div>
  </tmpl-panel>
</template>
<script>
import tmplPanel from '@/components/common/tmplPanel.vue'

export default {
  name: 'dangerLevel',
  components: {
    tmplPanel
  },
  props: {
    dangerLevel: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
