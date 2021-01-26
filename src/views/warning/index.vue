<template>
  <div class="container warning">
    <page-header />
    <div class="mainbox clearfix">
      <div class="warm-left-menu">
        <ul class="warm-menunav">
          <li v-for="(item, index) in list" :key="index">
            <router-link :class="{current: index === currentTab}" :to="{ name: item.pathName }">{{item.name}}</router-link>
          </li>
        </ul>
        <div class="warm-left-bottombg"></div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'

export default {
  name: 'warning',
  components: {
    pageHeader
  },
  data () {
    return {
      currentTab: '',
      list: [
        { name: '我的关注', pathName: 'warning_foucus' },
        { name: '线索库', pathName: 'warning_clue' },
        { name: '垃圾箱', pathName: 'warning_rubbish' }
      ]
    }
  },
  watch: {
    $route ({ name }) {
      this.changeCurrentTab(name)
    }
  },
  methods: {
    // 修改当前
    changeCurrentTab (name) {
      switch (name) {
        case 'warning_index':
          this.currentTab = ''
          break
        case 'warning_foucus':
          this.currentTab = 0
          break
        case 'warning_clue':
          this.currentTab = 1
          break
        case 'warning_rubbish':
          this.currentTab = 2
          break
        default:
          break
      }
    }
  },
  mounted () {
    const { name } = this.$route
    this.changeCurrentTab(name)
  }
}
</script>
<style lang="scss" scoped>
</style>
