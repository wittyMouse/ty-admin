<template>
  <tab-panel :activeName.sync="activeName" :tabTitleList="['Top10关注人物', 'Top10关注事件']" panelClass="height-figure">
    <template #1>
      <div class="figure-list">
        <ul>
          <li v-for="(item, index) in topPeople" :key="index">
            <a class="figure-wrap">
              <span class="figure-logo">
                <img :src="item.avatar || defaultImage" />
              </span>
              <el-tooltip :content="item.name">
                <span class="figure-name">{{item.name}}</span>
              </el-tooltip>
            </a>
          </li>
        </ul>
      </div>
    </template>
    <template #2>
      <div class="width">
        <ul class="news-list">
          <li v-for="(item, index) in topEvent" :key="index">
            <el-tooltip :content="item.content">
              <a>·&nbsp;{{item.content}}</a>
            </el-tooltip>
          </li>
        </ul>
      </div>
    </template>
  </tab-panel>
</template>

<script>
import * as api from '@/api/warning'
import tabPanel from '@/components/common/tabPanel.vue'

const defaultImage = require('../../../../assets/images/default-photo.jpg')

export default {
  name: 'topInfo',
  components: {
    tabPanel
  },
  data () {
    return {
      activeName: '1',
      topPeople: [],
      topEvent: [],
      defaultImage
    }
  },
  watch: {
    activeName (val) {
      this.$nextTick().then(() => {
        this.sendRequest(val)
      })
    }
  },
  methods: {
    // 获取Top10关注人物/事件
    getTopInfo (data) {
      this.loading = true
      api.getTopInfo(data).then(res => {
        if (res.data.code === 0) {
          if (this.activeName === '1') {
            this.topPeople = res.data.data
          } else {
            this.topEvent = res.data.data
          }
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 发送请求
    sendRequest (val) {
      const data = {
        type: Number(val)
      }
      this.getTopInfo(data)
    }
  },
  mounted () {
    this.sendRequest(this.activeName)
  }
}
</script>

<style lang="scss" scoped>
.figure-wrap {
  width: 100%;
}
</style>
