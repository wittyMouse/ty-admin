<template>
  <base-collapse collapseClass="userinfo-list-box" :list="list" accordion @change="handleChange">
    <template #title="slotProps">
      <span class="photo-left">
        <img :src="slotProps.item.avatar" />
      </span>
      <div class="group-info">
        <a class="text-title one-ellipsis">
          <span class="small-group-icon"></span>
          <span>{{slotProps.item.username}}</span>
          <span class="group-time">{{slotProps.item.time}}</span>
        </a>
        <p class="one-ellipsis">{{slotProps.item.content}}</p>
        <div class="group-tag">
          <span v-for="(item, index) in slotProps.item.tagList" :key="index">{{item}}</span>
        </div>
      </div>
    </template>
    <template #content="slotProps">
      <div class="width">
        <p>Telegram群组：{{slotProps.item.group}}</p>
      </div>
      <div class="width">
        <p>Telegram群组：{{slotProps.item.channel}}</p>
      </div>
    </template>
    <!-- <template #box="slotProps">
      <detail-panel :detailData="slotProps" />
    </template> -->
  </base-collapse>
</template>

<script>
import baseCollapse from '@/components/common/baseCollapse.vue'
// import detailPanel from "@/components/communicationTools/detailPanel.vue";

export default {
  name: 'majorUser',
  components: {
    baseCollapse
    // detailPanel
  },
  props: {
    list: Array
  },
  methods: {
    handleChange (obj, open) {}
  }
}
</script>

<style>
</style>
