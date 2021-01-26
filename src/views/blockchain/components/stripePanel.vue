<template>
  <div class="blockchain-things" :class="panelClass">
    <div class="noneline-title">
      <h3>{{title}}</h3>
      <span class="fright white" v-if="rightText">{{rightText}}</span>
    </div>
    <slot></slot>
    <span class="right-arrow"></span>
  </div>
</template>
<script>
export default {
  name: 'stripePanel',
  props: {
    panelClass: {
      type: String,
      default: ''
    },
    title: String,
    rightText: String
  }
}
</script>
