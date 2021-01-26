<template>
  <tmpl-panel title="今日关键词" panelClass="height-keyword">
    <div class="keyword-item">
      <a v-for="item in list" :key="item.id">{{item.name}}</a>
    </div>
  </tmpl-panel>
</template>

<script>
import { mapState } from 'vuex'
import tmplPanel from '@/components/common/tmplPanel.vue'

export default {
  name: 'todayKeywords',
  components: {
    tmplPanel
  },
  props: {
    todayKeywords: Array
  },
  computed: {
    list () {
      if (!this.todayKeywords) {
        return []
      }
      return this.todayKeywords.slice(0, 6)
    }
  }
}
</script>

<style>
</style>
