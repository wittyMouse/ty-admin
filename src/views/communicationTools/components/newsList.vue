<template>
  <div class="dark-list-box">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="dark-picture">
          <img :src="item.image || defaultImage" @error="handleImageError" />
        </div>
        <div class="list-text-box">
          <p class="text-title-no-hover one-ellipsis" :title="item.group">{{item.group}}</p>
          <p class="text-info one-ellipsis" :title="item.msg">{{item.msg}}</p>
          <p class="text-right">{{distanceTime(item.time)}}前&nbsp;&nbsp;&nbsp;&nbsp;<a>查看更多></a></p>
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
.dark-list-box {
  height: 580px;
}
</style>
