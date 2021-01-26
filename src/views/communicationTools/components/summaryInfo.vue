<template>
  <div class="height-block">
    <ul class="summary-list-box">
      <li v-for="(item, index) in formatList" :key="index">
        <count-card :cardData="item" :icon="item.icon" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import countCard from '@/components/common/countCard.vue'

const list = [
  { title: '群组数', icon: 'icon-group' },
  { title: '消息数量', icon: 'icon-addgroup' },
  { title: '用户数目', icon: 'icon-user' },
  { title: '活跃用户数目', icon: 'icon-activeuser' }
]

export default {
  name: 'summaryInfo',
  components: {
    countCard
  },
  props: {
    summaryList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    formatList () {
      if (this.summaryList && this.summaryList.length > 0) {
        const arr = []
        for (let i = 0; i < list.length; i++) {
          arr.push({ ...list[i], ...this.summaryList[i] })
        }
        return arr
      }
      return list
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
