<template>
  <div class="container search">
    <page-header />
    <div class="mainbox clearfix">
      <div class="search-main" :class="{'p-t-10 delay-half-1s':!showSearchFilter}">
        <div class="search-title">
          <a
            :class="{current:index===currentType}"
            v-for="(item, index) in typeList"
            :key="index"
            @click="handleTypeChange(index)"
          >{{item.name}}</a>
        </div>

        <div class="search-input-cont">
          <input type="text" class="search-input-max" v-model="keywords" />
          <button class="light-blue-btn" @click="handleSearch">搜索</button>
          <button class="default-blue-btn" @click="handleSearchFilterChange">高级搜索</button>
        </div>
      </div>
      <transition
        enter-active-class="animated faster delay-half-1s zoomIn"
        leave-active-class="animated faster zoomOut"
      >
        <search-filter @search="handleFilterSearch" v-if="showSearchFilter" />
      </transition>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import {
  SET_SEARCH_TEXT,
  SET_SHOW_SEARCH_FILTER,
  SET_CURRENT_TYPE,
  SET_IS_FILTER_SEARCH,
  CLEAR_SEARCH_PARAMS
} from '@/store/mutation-types.js'
import pageHeader from '@/components/common/pageHeader.vue'
import searchFilter from '@/components/search/searchFilter.vue'
const { mapState, mapMutations } = createNamespacedHelpers('search')

export default {
  name: 'search',
  components: {
    pageHeader,
    searchFilter
  },
  data () {
    return {
      typeList: [
        { name: '事件', pathName: 'event' },
        { name: '人物', pathName: 'people' },
        { name: '网站', pathName: 'website' },
        { name: '群组', pathName: 'group' },
        { name: 'IP地址', pathName: 'ipAddress' },
        { name: '数字货币', pathName: 'digitalCurrency' }
      ],
      keywords: ''
    }
  },
  computed: {
    ...mapState(['searchText', 'showSearchFilter', 'currentType', 'searchParams'])
  },
  methods: {
    ...mapMutations([
      SET_SEARCH_TEXT,
      SET_SHOW_SEARCH_FILTER,
      SET_CURRENT_TYPE,
      SET_IS_FILTER_SEARCH,
      CLEAR_SEARCH_PARAMS
    ]),
    // 切换搜索类型
    handleTypeChange (idx) {
      if (this.currentType === idx) {
        return
      }
      this.SET_CURRENT_TYPE(idx)
    },
    // 切换显示高级搜索
    handleSearchFilterChange () {
      if (this.showSearchFilter) {
        this[CLEAR_SEARCH_PARAMS]()
      }
      this.SET_SHOW_SEARCH_FILTER(!this.showSearchFilter)
    },
    // 普通搜索
    handleSearch () {
      this.searchEvent(0)
    },
    // 高级搜索
    handleFilterSearch () {
      this.searchEvent(1)
    },
    // 搜索内容过滤
    searchCheck () {
      if (!this.keywords.trim()) {
        this.$message('请先输入搜索内容')
        return false
      }
      return true
    },
    // 搜索事件(type: 1.高级搜索 2.普通搜索)
    searchEvent (type) {
      if (!this.searchCheck()) {
        return
      }
      // 存储搜索内容
      this[SET_SEARCH_TEXT](this.keywords)
      if (type) {
        // 存储是否高级搜索状态
        this[SET_IS_FILTER_SEARCH](true)
        // 判断媒体类型是否为图片，是则跳到图片搜索
        if (
          this.searchParams.selectedMedia &&
          this.searchParams.selectedMedia.includes('网页')
        ) {
          this.$router.push({
            name: 'webPage',
            query: { keywords: this.keywords }
          })
        } else if (
          this.searchParams.selectedMedia &&
          this.searchParams.selectedMedia.includes('图片')
        ) {
          this.$router.push({
            name: 'photograph',
            query: { keywords: this.keywords }
          })
        } else if (this.searchParams.selectedMedia &&
          this.searchParams.selectedMedia.includes('文档')
        ) {
          this.$router.push({
            name: 'document',
            query: { keywords: this.keywords }
          })
        } else if (this.searchParams.selectedMedia &&
          this.searchParams.selectedMedia.includes('音视频')
        ) {
          this.$router.push({
            name: 'video',
            query: { keywords: this.keywords }
          })
        } else {
          this.$router.push({
            name: this.typeList[this.currentType].pathName,
            query: { keywords: this.keywords }
          })
        }
      } else {
        this[SET_IS_FILTER_SEARCH](false)
        this.$router.push({
          name: this.typeList[this.currentType].pathName,
          query: { keywords: this.keywords }
        })
      }
    }
  },
  created () {
    if (this.searchText) {
      this.keywords = this.searchText
    }
  }
}
</script>
<style lang="scss" scoped>
.search-main {
  transition-property: all;
  transition-duration: 0.5s;
}
.search-main.delay-half-1s {
  transition-delay: 0.5s;
}
.p-t-10 {
  padding-top: 10%;
}
</style>
