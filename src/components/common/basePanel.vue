<template>
  <div class="item-flex">
    <span class="box-left-arrow"></span>
    <span class="box-shadowbg"></span>
    <span class="box-right-arrow"></span>
    <slot name="top"></slot>
    <div class="item-box" :class="panelClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'basePanel',
  props: {
    panelClass: String
  }
}
</script>
<style lang="scss" scoped>

</style>
