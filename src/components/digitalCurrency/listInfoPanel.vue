<template>
  <div class="trade-item" :class="panelClass">
    <div class="data-inlinebox">
      <span class="data-text-left">转出交易量</span>
      <span class="data-text-right white">{{infoData.transFee}}<b>B</b></span>
    </div>
    <div class="data-inlinebox">
      <span class="data-text-left">交易费用</span>
      <span class="data-text-right white">{{infoData.fee}}<b>B</b></span>
    </div>
    <div class="data-inlinebox">
      <span class="data-text-left">总交易量</span>
      <span class="data-text-right white">{{infoData.totalFee}}<b>B</b></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listInfoPanel',
  props: {
    panelClass: {
      type: String,
      default: ''
    },
    infoData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
