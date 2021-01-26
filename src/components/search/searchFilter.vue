<template>
  <div class="search-content-box">
    <span class="search-uparrow"></span>
    <div class="item-flex">
      <span class="box-left-arrow"></span>
      <span class="box-right-arrow"></span>
      <div class="item-box">
        <div class="common-title">
          <h3>高级搜索</h3>
        </div>

        <div class="box-content">
          <div class="advanced-search-item">
            <div class="advanced-search-left-text">
              <ul class="advanced-left-text">
                <li>网站分类</li>
                <li>关注主题</li>
                <li>媒体类别</li>
                <li>时间</li>
                <li>标记</li>
              </ul>
            </div>

            <div class="advanced-right-text">
              <div class="advanced-list-text">
                <a :class="{current:searchParams.currentType === 1}" @click="handleFilterChange('type', '全部')">全部</a>
                <a :class="{current:searchParams.selectedType.includes(item)}" v-for="(item, index) in searchInfo.websiteType" :key="index" @click="handleFilterChange('type', item)">{{item}}</a>
              </div>

              <div class="advanced-list-text">
                <a :class="{current:searchParams.currentTheme === 1}" @click="handleFilterChange('theme', '全部')">全部</a>
                <a :class="{current:searchParams.selectedTheme.includes(item)}" v-for="(item, index) in searchInfo.themeList" :key="index" @click="handleFilterChange('theme', item)">{{item}}</a>

                <div class="advanced-search-box ml30">
                  <button class="default-blue-smallbtn bluebg" @click="showCustomTheme=!showCustomTheme">
                    <b>+</b>&nbsp;自定义添加主题
                  </button>
                  <transition name="spread">
                    <div class="search-wrap" v-if="showCustomTheme">
                      <input type="text" class="common-input" v-model="theme" placeholder="请输入主题名称" />
                      <button class="default-blue-smallbtn" @click="handleThemeAdd">添加</button>
                    </div>
                  </transition>
                </div>
              </div>

              <div class="advanced-list-text">
                <a :class="{current:searchParams.currentMedia === 1}" @click="handleFilterChange('media', '全部')">全部</a>
                <a :class="{current:searchParams.selectedMedia.includes(item)}" v-for="(item, index) in searchInfo.mediaList" :key="index" @click="handleFilterChange('media', item)">{{item}}</a>
              </div>

              <div class="advanced-list-text">
                <div class="advanced-search-box ml25">
                  <div class="date-pick-box">
                    <span class="advanced-tip-text width-unset">开始时间</span>
                    <el-date-picker class="base-date-pick" v-model="startTime" type="datetime" size="small" placeholder="请选择开始时间" value-format="timestamp" time-arrow-control :editable="false"></el-date-picker>
                  </div>

                  <div class="date-pick-box">
                    <span class="advanced-tip-text">结束时间</span>
                    <el-date-picker class="base-date-pick" v-model="endTime" type="datetime" size="small" placeholder="请选择结束时间" value-format="timestamp" time-arrow-control :editable="false"></el-date-picker>
                  </div>
                </div>
              </div>

              <div class="advanced-list-text">
                <div class="advanced-search-box ml25">
                  <base-select class="width150" v-model="marked" :showDefault="false" :type="false" :list="searchInfo.readList" />

                  <span class="advanced-tip-text">涉及内容</span>
                  <base-select class="width200" v-model="content" :showDefault="false" :type="false" :list="searchInfo.contentList" />

                  <div class="remarks-box">
                    <span class="advanced-tip-text">标题</span>
                    <input type="text" class="common-input width200" v-model="title" placeholder="输入要搜索的内容" />
                  </div>

                  <div class="remarks-box">
                    <span class="advanced-tip-text">作者</span>
                    <input type="text" class="common-input writer-text" v-model="author" placeholder="输入要作者姓名" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="button-width-box">
            <button class="light-blue-btn" @click="handleClick('search')">查询</button>
            <button class="default-blue-btn" @click="handleClick('reset')">清空</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { SET_SEARCH_PARAMS, CLEAR_SEARCH_PARAMS } from '@/store/mutation-types.js'
import baseSelect from '@/components/common/baseSelect.vue'
import { isEmptyObject } from '@/utils/index.js'
const { mapState, mapMutations } = createNamespacedHelpers('search')

export default {
  name: 'searchFilter',
  components: {
    baseSelect
  },
  data () {
    return {
      searchInfo: {
        websiteType: ['暗网', '即时通信', '区块链'],
        themeList: ['政治', '涉爆涉恐', '黄赌毒', '灰黑产'],
        mediaList: ['网页', '图片', '文档', '音视频'],
        readList: ['未读', '已读'],
        contentList: ['全部']
      },
      showCustomTheme: false,
      theme: ''
    }
  },
  computed: {
    ...mapState(['searchParams']),
    startTime: {
      get () {
        return this.searchParams.startTime
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          startTime: newValue
        })
      }
    },
    endTime: {
      get () {
        return this.searchParams.endTime
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          endTime: newValue
        })
      }
    },
    marked: {
      get () {
        return this.searchParams.marked
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          marked: newValue
        })
      }
    },
    content: {
      get () {
        return this.searchParams.content
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          content: newValue
        })
      }
    },
    title: {
      get () {
        return this.searchParams.title
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          title: newValue
        })
      }
    },
    author: {
      get () {
        return this.searchParams.author
      },
      set (newValue) {
        this[SET_SEARCH_PARAMS]({
          author: newValue
        })
      }
    }
  },
  methods: {
    ...mapMutations([SET_SEARCH_PARAMS, CLEAR_SEARCH_PARAMS]),
    // 添加主题
    handleThemeAdd () {
      if (this.theme.trim() === '') {
        this.$message('请先输入主题名称')
        return
      }
      this.searchInfo.themeList.push(this.theme)
    },
    // 切换筛选条件
    handleFilterChange (target, name) {
      switch (target) {
        case 'type':
          if (name === '全部') {
            this[SET_SEARCH_PARAMS]({
              currentType: 1,
              selectedType: []
            })
          } else if (this.searchParams.selectedType.includes(name)) {
            this[SET_SEARCH_PARAMS]({
              selectedType: this.searchParams.selectedType.filter(item => { return item !== name })
            })
            if (this.searchParams.selectedType.length === 0) {
              this[SET_SEARCH_PARAMS]({
                currentType: 1
              })
            }
          } else {
            if (this.searchParams.currentType === 1) {
              this[SET_SEARCH_PARAMS]({
                currentType: 2
              })
            }
            this[SET_SEARCH_PARAMS]({
              selectedType: [...this.searchParams.selectedType, name]
            })
          }
          break
        case 'theme':
          if (name === '全部') {
            this[SET_SEARCH_PARAMS]({
              currentTheme: 1,
              selectedTheme: []
            })
          } else if (this.searchParams.selectedTheme.includes(name)) {
            this[SET_SEARCH_PARAMS]({
              selectedTheme: this.searchParams.selectedTheme.filter(item => { return item !== name })
            })
            if (this.searchParams.selectedTheme.length === 0) {
              this[SET_SEARCH_PARAMS]({
                currentTheme: 1
              })
            }
          } else {
            if (this.searchParams.currentTheme === 1) {
              this[SET_SEARCH_PARAMS]({
                currentTheme: 2
              })
            }
            this[SET_SEARCH_PARAMS]({
              selectedTheme: [...this.searchParams.selectedTheme, name]
            })
          }
          break
        case 'media':
          if (name === '全部') {
            this[SET_SEARCH_PARAMS]({
              currentMedia: 1,
              selectedMedia: []
            })
          } else {
            if (this.searchParams.currentMedia === 1) {
              this[SET_SEARCH_PARAMS]({
                currentMedia: 2
              })
            }
            this[SET_SEARCH_PARAMS]({
              selectedMedia: [name]
            })
          }
          break
        default:
          break
      }
    },
    // 查询或清空
    handleClick (target) {
      switch (target) {
        // 搜索
        case 'search':
          this.$emit('search')
          break
        // 清空
        case 'reset':
          this[CLEAR_SEARCH_PARAMS]()
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.advanced-search-left-text {
  height: 256px;
}
.advanced-left-text li {
    line-height: 51px;
}

.date-pick-box {
  display: inline-block;
  .base-date-pick {
    margin-right: 8px;
    width: 200px;
  }
}

.remarks-box {
  display: inline-block;
  .width150 {
    width: 150px;
    margin-right: 12px;
  }
}
.width-unset {
  width: unset;
}
.default-blue-smallbtn {
  vertical-align: middle;
}
.search-wrap {
  display: inline-block;
  .common-input,
  .default-blue-smallbtn {
    vertical-align: middle;
  }
}
.spread-enter-active, .spread-leave-active {
  transition: opacity .5s;
}
.spread-enter, .spread-leave-to {
  opacity: 0;
}
</style>
