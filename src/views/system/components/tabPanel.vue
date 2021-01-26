<template>
  <base-panel panelClass="clearfix">
    <template #top>
      <span class="footer-shadow"></span>
    </template>
    <div class="box-content">
      <div class="system-preparation-item">
        <div class="default-category" :class="currentTab === 0 ? 'current' : ''" @click="handleTabChange(0)">
          <span class="category-tt">默认分类</span>
          <span class="indicate-arrow"></span>
        </div>

        <div class="system-add-categorybox">
          <span class="add-category-inline" :class="currentTab === item.id ? 'current' : ''" v-for="item in list" :key="item.id" @click="handleTabChange(item.id)">
            {{item.name}}
            <i class="delete-arrow" v-if="currentTab !== 0 && currentTab === item.id" @click.stop="handleCloseTab(item.id)"></i>
          </span>

          <span class="add-category-input">
            <input class="category-input" :value="tabName" placeholder="添加分类名" @input="$emit('update:tabName', $event.target.value)" />
          </span>

          <a class="add-category-btn" @click="handleAddTab">+</a>
        </div>
      </div>

      <div class="category-table-box">
        <slot></slot>
      </div>

      <!-- <div class="category-table-box" v-for="(item, index) in list" :key="index" v-show="index === currentTab">
        <slot :name="index"></slot>
      </div> -->
    </div>
  </base-panel>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'

export default {
  name: 'tabPanel',
  components: {
    basePanel
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    currentTab: {
      type: Number,
      default: 0
    },
    tabName: {
      type: String,
      default: ''
    }
  },
  methods: {
    // tab切换
    handleTabChange (id) {
      this.$emit('update:currentTab', id)
    },
    // 添加tab
    handleAddTab () {
      this.$emit('addTab')
    },
    // 关闭tab
    handleCloseTab (id) {
      this.$emit('closeTab', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-category-inline {
  cursor: default;
}
.default-category.current,
.system-add-categorybox .add-category-inline.current {
  box-sizing: unset;
}
</style>
