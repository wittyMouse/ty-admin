<template>
  <base-panel title="昨日情报" panelClass="height-keyword">
    <div class="center-title">
      <h3>昨日情报</h3>
    </div>

    <div class="box-content">
      <div class="mid-circle-cont">
        <span class="center-text">{{yesterdayInfo.label}}</span>
        <p>警戒度</p>
      </div>

      <div class="intelligence-text">
        <p>
          总数情报&nbsp;
          <span class="center-text">{{yesterdayInfo.count}}</span>
        </p>
        <div class="intelligence-data-box margin-top10">
          <span :class="icon">{{name}}</span>&nbsp;&nbsp;发现
          <span :class="color">&nbsp;{{yesterdayInfo.value}}&nbsp;</span>件
        </div>
      </div>
    </div>
  </base-panel>
</template>

<script>
import { mapState } from 'vuex'
import basePanel from '@/components/common/basePanel.vue'

export default {
  name: 'yesterdayInfo',
  components: {
    basePanel
  },
  props: {
    yesterdayInfo: Object
  },
  data () {
    return {
      list: [
        { icon: 'low-button', name: '低危', color: 'low-text' },
        { icon: 'center-button', name: '中危', color: 'center-text' },
        { icon: 'high-button', name: '高危', color: 'high-text' }
      ]
    }
  },
  computed: {
    icon () {
      if (!this.yesterdayInfo || !this.yesterdayInfo.type) {
        return ''
      }
      return this.list[this.yesterdayInfo.type - 1].icon
    },
    name () {
      if (!this.yesterdayInfo || !this.yesterdayInfo.type) {
        return ''
      }
      return this.list[this.yesterdayInfo.type - 1].name
    },
    color () {
      if (!this.yesterdayInfo || !this.yesterdayInfo.type) {
        return ''
      }
      return this.list[this.yesterdayInfo.type - 1].color
    }
  }
}
</script>

<style lang="sass" scoped>

</style>