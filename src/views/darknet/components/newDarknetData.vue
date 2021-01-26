<template>
  <tab-panel :activeName.sync="activeName" :tabTitleList="['最新暗网情报', '最新暗网网站']" panelClass="height-four">
    <template #1>
      <news-list :list="newInfo.infoList" />
    </template>
    <template #2>
      <div style="height: 380px; overflow: auto;">
        <div v-for="item in newWebsite.websiteList" :key="item.id" class="web-wrapper">
          <div class="web-item">
            <span>网站名称</span>
            <span>{{item.name}}</span>
          </div>
          <div class="web-item">
            <span>标签</span>
            <span>{{item.type}}</span>
          </div>
          <div class="web-item">
            <span>语言</span>
            <span>{{item.language}}</span>
          </div>
          <div class="web-item">
            <span>最后一次在线时间</span>
            <span>{{dateFormat(item.lastOnlineTime)}}</span>
          </div>
        </div>
      </div>
    </template>
  </tab-panel>
</template>
<script>
import _ from 'lodash'
import moment from 'moment'
import * as api from '@/api/darknet'
import tabPanel from '@/components/common/tabPanel.vue'
import newsList from './newsList.vue'

export default {
  name: 'newDarknetData',
  components: {
    tabPanel,
    newsList
  },
  data () {
    return {
      loading: false,
      // 当前tab
      activeName: '1',
      // 最新暗网情报
      newInfo: {},
      // 最新暗网网站
      newWebsite: {},
      // 页码
      page: 1,
      // 每页条数
      size: 5,
      // 总条数
      totle: 0
    }
  },
  watch: {
    // 切换tab
    activeName (val) {
      this.page = 1
      this.size = 5
      this.getRemoteData(val)
    }
  },
  methods: {
    dateFormat (timestamp) {
      return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    },
    // 获取最新暗网情报
    getNewInfo (params) {
      this.loading = true
      api.getNewInfo(params).then(res => {
        // console.log('newInfo', res)
        if (res.data.code === 0) {
          this.newInfo = res.data.data
          this.totle = res.data.data.totalCount
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取最新暗网网站
    getNewWebsite (params) {
      this.loading = true
      api.getNewWebsite(params).then(res => {
        console.log('newWebsite', res.data.data)
        if (res.data.code === 0) {
          this.newWebsite = res.data.data
          this.totle = res.data.data.totalCount
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取远程数据
    getRemoteData (activeName) {
      const params = {
        page: this.page,
        size: this.size
      }
      if (activeName === '1') {
        this.getNewInfo(params)
      } else if (activeName === '2') {
        this.getNewWebsite(params)
      }
    }
  },
  mounted () {
    this.getRemoteData(this.activeName)
  }
}
</script>
<style lang="scss" scoped>
.web-wrapper {
  padding: 8px 0;
  border-bottom: 1px #0f3867 dashed;

  .web-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
