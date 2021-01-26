<template>
  <div class="group-pop-box" v-if="detailData.activeNames.includes(detailData.item.id)">
    <span class="group-pop-arrow"></span>
    <span class="group-pop-ltarrow"></span>
    <span class="group-pop-rbarrow"></span>
    <div class="group-pop-content">
      <div class="group-pop-main">
        <ul>
          <li v-for="item in detailData.item.userMsgs" :key="item.msgId">
            <div class="small-photo-left">
              <img class="avatar" :src="item.photo || defaultImage" />
            </div>
            <div class="group-pop-info">
              <div class="white">{{item.toGroup}}</div>
              <div class="group-pop-math">
                <span class="group-pop-math-left">{{item.code}}</span>
                <span class="group-pop-math-right">{{formatDate(item.time)}}</span>
              </div>
              <div class="group-pop-detail">{{item.msg}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils/index.js'

const defaultImage = require('../../../assets/images/default-photo.jpg')

export default {
  name: 'detailPanel',
  props: {
    detailData: Object
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="scss" scoped>

</style>
