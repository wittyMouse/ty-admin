<template>
  <div class="bar-tab-item">
    <span class="dark-blue" v-if="title">{{title}}</span>
    <ul class="bar-tab-list">
      <li :class="{current: item.id === currentValue}" v-for="item in list" :key="item.id" @click="handleClick(item.id)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'screenBar',
  props: {
    title: {
      type: String
    },
    currentValue: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick (id) {
      this.$emit('update:currentValue', id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
