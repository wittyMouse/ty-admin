<template>
  <div class="dark-list-box">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="dark-picture">
          <img :src="item.src || defaultImage" @error="handleImageError" />
        </div>
        <div class="list-text-box">
          <p class="text-title-no-hover one-ellipsis" :title="item.title">{{item.title}}</p>
          <p class="text-info one-ellipsis" :title="item.data">{{item.data}}</p>
          <p class="text-right">{{distanceTime(item.date)}}前&nbsp;&nbsp;&nbsp;&nbsp;<a :href="item.data.url" target="_blank">查看更多></a></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { distanceTime } from '@/utils'
const defaultImage = require('../../../assets/images/pic1.png')

export default {
  name: 'newsList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      defaultImage
    }
  },
  computed: {
    filterList () {
      if (this.list && this.list.length > 0) {
        const arr = []
        this.list.forEach(item => {
          let data = item.data
          if (item.data) {
            data = JSON.parse(item.data)
          }
          arr.push({ ...item, data })
        })
        return arr
      }
      return []
    }
  },
  methods: {
    distanceTime,
    // 捕获图片加载错误
    handleImageError (e) {
      e.target.src = this.defaultImage
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
