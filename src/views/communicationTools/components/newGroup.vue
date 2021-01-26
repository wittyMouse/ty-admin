<template>
  <base-collapse collapseClass="group-list-box" :list="list">
    <template #title="slotProps">
      <span class="photo-left">
        <img :src="slotProps.item.photo || defaultImage" @error="handleImageError" />
      </span>
      <div class="group-info">
        <a href="#" class="text-title one-ellipsis" :title="slotProps.item.groupName">{{slotProps.item.groupName}}</a>
        <p class="one-ellipsis" :title="slotProps.item.groupAbout">{{slotProps.item.groupAbout}}</p>
      </div>
    </template>
    <template #content="slotProps">
      <div class="width">
        <span class="txt-left">更新频道：</span>
        <span class="txt-right">{{slotProps.item.channel}}</span>
      </div>
      <div class="width">
        <span class="txt-left">社区帮助：</span>
        <span class="txt-right">{{slotProps.item.help}}</span>
      </div>
      <div class="width">
        <span class="txt-left">用户名称：</span>
        <span class="txt-right"><template v-if="slotProps.item.adminUser && slotProps.item.adminUser.length > 0">{{slotProps.item.adminUser.join(",")}}</template></span>
      </div>

      <div class="width pt10">
        <div class="fleft">
          共享的媒体&nbsp;
          <span class="white">{{slotProps.item.shareMedia}}</span>
        </div>
        <div class="fright">
          <span class="fright" :class="slotProps.item.isSubscribe ? 'open-icon' : 'shut-icon'" @click="handleNewsChange(slotProps)"></span>
          <span class="fright white">{{slotProps.item.isSubscribe ? '开启通知' : '关闭通知'}}</span>
        </div>
      </div>
    </template>
  </base-collapse>
</template>

<script>
import baseCollapse from '@/components/common/baseCollapse.vue'

const defaultImage = require('../../../assets/images/default-photo.jpg')

export default {
  name: 'newGroup',
  components: {
    baseCollapse
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
    handleNewsChange (obj) {
      this.$emit('newsChange', obj)
    },
    // 图片加载失败
    handleImageError (e) {
      e.target.src = defaultImage
    }
  }
}
</script>

<style lang="scss" scoped>
.group-list-box {
  max-height: 380px;
  overflow-y: auto;
}
</style>
