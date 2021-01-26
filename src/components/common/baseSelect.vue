<template>
  <select class="select-common" :value="selected" @change="$emit('change', $event.target.value)">
    <option value v-if="showDefault">{{placeholder}}</option>
    <template v-if="type">
      <option :value="item.id || item.key" v-for="item in list" :key="item.id || item.key">{{item.value || item.label || item.name}}</option>
    </template>
    <template v-else>
      <option :value="index" v-for="(item, index) in list" :key="index">{{item}}</option>
    </template>
  </select>
</template>
<script>
export default {
  name: 'baseSelect',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    // 下拉选中
    selected: {
      type: [String, Number],
      default: ''
    },
    // 下拉框列表数据类型
    type: {
      type: Boolean,
      default: true
    },
    // 下拉列表数据
    list: {
      type: Array,
      default () {
        return []
      }
    },
    // 是否显示默认值
    showDefault: {
      type: Boolean,
      default: true
    },
    // 默认值的内容
    placeholder: {
      type: String,
      default: '请选择'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
