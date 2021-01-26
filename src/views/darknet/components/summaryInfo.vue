<template>
  <div class="height-block">
    <ul class="summary-list-box">
      <li v-for="(item, index) in summaryList" :key="item.id">
        <count-card :cardData="item" :icon="iconList[index]" />
      </li>
    </ul>
  </div>
</template>
<script>
import _ from 'lodash'
import countCard from '@/components/common/countCard.vue'

export default {
  name: 'summaryInfo',
  components: {
    countCard
  },
  props: {
    statistics: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      iconList: [
        'icon-node',
        'icon-service',
        'icon-user',
        'icon-online'
      ]
    }
  },
  computed: {
    summaryList () {
      const arr = [
        { id: 1, title: '节点数目' },
        { id: 2, title: '网站总数' },
        { id: 3, title: '在线用户数' },
        { id: 4, title: '在线网站数' }
      ]

      if (!_.isEmpty(this.statistics)) {
        arr[0].value = this.statistics.node
        arr[1].value = this.statistics.service
        arr[2].value = this.statistics.user
        arr[3].value = this.statistics.online
      }

      return arr
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
