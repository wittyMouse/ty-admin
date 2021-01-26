<template>
<div>
  <div class="bar-tab-item">
    <span class="dark-blue">信息类型</span>
    <ul class="bar-tab-list">
      <li :class="{current: index === currentTab}" v-for="(item, index) in list" :key="index" @click="handleClick(index)">{{item}}</li>
    </ul>
  </div>
  <div class="bar-tab-box" v-for="(item, index) in list" :key="index" v-show="index === currentTab">
    <slot :name="index+1"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'cardTab',
  props: {
    currentTab: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick (idx) {
      this.$emit('update:currentTab', idx)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
