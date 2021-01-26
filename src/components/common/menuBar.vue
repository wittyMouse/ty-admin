<template>
  <div class="head-menucontent">
    <ul>
      <li
        v-for="(item, index) of menuList"
        :key="item.id"
        @mouseenter="handleMenuItemMouseEnterOrLeave(index, true)"
        @mouseleave="handleMenuItemMouseEnterOrLeave(index, false)"
      >
        <!-- <a :href="item.path" :class="{current: currentMenu === item.id ? true : false}">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </a> -->
        <router-link :to="{name: item.path}" :class="{current: currentMenu === item.id ? true : false}">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
        <menu-label
          :menuChildrenList="item.children"
          :show="dropDownStateList[index]"
          v-if="item.children && item.children.length > 0"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import menuLabel from '@/components/common/menuLabel.vue'

export default {
  name: 'menuBar',
  components: {
    menuLabel
  },
  props: {
    currentMenu: Number,
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dropDownStateList: this.dropDownStateListInit()
    }
  },
  methods: {
    // 下拉菜单状态列表初始化
    dropDownStateListInit () {
      if (this.menuList && this.menuList.length > 0) {
        const tempArr = []
        const len = this.menuList.length
        for (let i = 0; i < len; i++) {
          tempArr[i] = false
        }
        return tempArr
      } else {
        return []
      }
    },
    // 菜单项鼠标移入、移出事件处理函数
    handleMenuItemMouseEnterOrLeave (idx, val) {
      this.$set(this.dropDownStateList, idx, val)
    }
  }
}
</script>
<style lang="scss" scoped>
.head-menucontent ul li:not(:last-child) {
  padding-right: 2px;
}
.head-menucontent ul li:not(:last-child)::after {
  content: " ";
  position: absolute;
  right: 0;
  margin-top: 25px;
  width: 2px;
  height: 14px;
  background: url("../../assets/images/header_line.jpg") 0 0 no-repeat;
}
</style>
