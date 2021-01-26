<template>
  <base-panel :panelClass="panelClass">
    <div class="common-title" v-if="title">
      <h3>{{title}}</h3>
    </div>
    <div class="box-content">
      <slot></slot>
    </div>
  </base-panel>
</template>
<script>
import basePanel from '@/components/common/basePanel.vue'

export default {
  name: 'tmplPanel',
  components: {
    basePanel
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    panelClass: String
  }
}
</script>
<style lang="scss" scoped>
</style>
