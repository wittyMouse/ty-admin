<template>
  <base-collapse collapseClass="userinfo-list-box" :list="list" accordion @change="handleChange">
    <template #title="slotProps">
      <span class="photo-left">
        <img :src="slotProps.item.photo || defaultImage" @error="handleLoadImageError" />
      </span>
      <div class="group-info">
        <a class="text-title one-ellipsis">
          <span class="small-group-icon"></span>
          <span>{{slotProps.item.userName}}</span>
          <span class="group-time">{{formatDate(slotProps.item.time, 'MM月dd日')}}</span>
        </a>
        <p class="one-ellipsis">{{slotProps.item.userDetail}}</p>
        <div class="group-tag">
          <span v-for="(item, index) in slotProps.item.userTag" :key="index">{{item}}</span>
        </div>
      </div>
    </template>
    <template #content="slotProps">
      <div class="width" v-for="(item, index) in slotProps.item.userGroups" :key="index">
        <p>{{item.groupType}}：{{item.groupName}}</p>
      </div>
      <!-- <div class="width">
        <p>Telegram群组：{{slotProps.item.channel}}</p>
      </div> -->
    </template>
    <template #box="slotProps">
      <detail-panel :detailData="slotProps" />
    </template>
  </base-collapse>
</template>

<script>
import baseCollapse from '@/components/common/baseCollapse.vue'
import detailPanel from './detailPanel.vue'
import { formatDate } from '@/utils'

const defaultImage = require('../../../assets/images/default-photo.jpg')

export default {
  name: 'majorUser',
  components: {
    baseCollapse,
    detailPanel
  },
  props: {
    list: Array
  },
  data () {
    return {
      defaultImage
    }
  },
  methods: {
    formatDate,
    handleChange (obj, open) {},
    handleLoadImageError (e) {
      e.target.src = this.defaultImage
    }
  }
}
</script>

<style>
</style>
