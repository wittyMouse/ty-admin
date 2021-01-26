<template>
  <div class="container system">
    <page-header />

    <div class="mainbox clearfix">
      <!--//LEFT=start//-->
      <div class="warm-left-menu">
        <ul class="warm-menunav">
          <li>
            <router-link :class="currentPath === index ? 'current' : ''" :to="{name: item.pathName}" v-for="(item, index) in list" :key="index">{{item.name}}</router-link>
          </li>
        </ul>
        <div class="warm-left-bottombg"></div>
      </div>
      <!--//LEFT=end//-->

      <!--//RIGHT=start//-->
      <div class="warm-main-right">
        <router-view />
      </div>
      <!--//RIGHT=end//-->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'

export default {
  name: 'system',
  components: {
    pageHeader
  },
  data () {
    return {
      list: [
        { name: '监测管理', pathName: 'system_index' },
        { name: '专项任务', pathName: 'system_specialTask' }
      ],
      currentPath: 0
    }
  },
  watch: {
    '$route.name' (val) {
      if (val === 'system_index') {
        this.currentPath = 0
      } else if (val === 'system_specialTask') {
        this.currentPath = 1
      }
    }
  },
  mounted () {
    this.getSourceList()
    if (this.$route.name === 'system_index') {
      this.currentPath = 0
    } else if (this.$route.name === 'system_specialTask') {
      this.currentPath = 1
    }
  },
  methods: {
    ...mapActions({
      getSourceList: 'getSourceList'
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
