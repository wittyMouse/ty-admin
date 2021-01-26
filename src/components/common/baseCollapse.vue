<template>
  <div :class="collapseClass">
    <ul class="group-list clearfix">
      <li :class="['group-list-item', {'unfold-contbox': activeNames.includes(item.id)}]" v-for="(item, index) in list" :key="item.id">
        <div class="fold-item">
          <div class="">
            <slot name="title" :item="item"></slot>
          </div>
          <span class="unfold-btn" v-if="activeNames.includes(item.id)" @click="handleChange({item, index}, false)"></span>
          <span class="fold-btn" v-else @click="handleChange({item, index}, true)"></span>
          <div class="unfold-content" v-if="activeNames.includes(item.id)">
            <slot name="content" :item="item" :idx="index"></slot>
          </div>
        </div>
        <slot name="box" :item="item" :idx="index" :activeNames="activeNames"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'baseCollapse',
  props: {
    collapseClass: String,
    list: Array,
    // 手风琴效果
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeNames: []
    }
  },
  methods: {
    // 面板切换
    handleChange (obj, open) {
      if (open) {
        if (this.accordion) {
          this.activeNames = [obj.item.id]
        } else {
          this.activeNames.push(obj.item.id)
        }
      } else {
        this.activeNames = this.activeNames.filter(item => {
          return item !== obj.item.id
        })
      }
      this.$emit('change', obj, open)
    }
  }
}
</script>

<style lang="scss" scoped>
.group-list-item {
  overflow: auto;
}
</style>
