<template>
  <div class="trade-item" :class="panelClass">
    <div class="dash-title" v-if="title">
      <h3>{{title}}</h3>
    </div>
    <div class="data-inlinebox" v-for="(item, index) in list" :key="index">
      <span class="data-text-left">{{item.label}}</span>
      <span class="data-text-right white">{{item.value}}<b v-if="item.unit">{{item.unit}}</b></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoPanel',
  props: {
    panelClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
