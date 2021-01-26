<template>
  <div>
    <ul class="tab-search-list">
      <li :class="{current: index === currentTab}" v-for="(item, index) in list" :key="index" @click="handleTabChange(index)">{{item}}</li>
    </ul>

    <div class="bar-inner-tabbox" v-for="(item, index) in list" :key="index" v-show="index === currentTab">
      <slot :name="index+1"></slot>
      <!-- <div class="inner-tab-width"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageTab',
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
    handleTabChange (idx) {
      this.$emit('update:currentTab', idx)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
