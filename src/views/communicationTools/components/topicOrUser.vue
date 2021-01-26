<template>
  <tab-panel
    :activeName.sync="activeName"
    :tabTitleList="['话题分布', '用户分布']"
    panelClass="web-catelogebox"
  >
    <template #1>
      <div class="chart-item-box">
        <word-globe :list="topicList" />
      </div>
    </template>
    <template #2>
      <div class="chart-item-box">
        <word-globe :list="userList" />
      </div>
    </template>
  </tab-panel>
</template>

<script>
import * as api from '@/api/communicationTools'
import tabPanel from '@/components/common/tabPanel.vue'
import wordGlobe from './wordGlobe.vue'

export default {
  name: 'topicOrUser',
  components: {
    tabPanel,
    wordGlobe
  },
  data () {
    return {
      activeName: '1',
      topicDis: [],
      userDis: []
    }
  },
  computed: {
    topicList () {
      if (this.topicDis && this.topicDis.length > 0) {
        return this.formatData(this.topicDis)
      }
      return []
    },
    userList () {
      if (this.userDis && this.userDis.length > 0) {
        return this.formatData(this.userDis)
      }
      return []
    }
  },
  watch: {
    activeName (val) {
      if ((val === '1' && this.topicDis && this.topicDis.length === 0) || (val === '2' && this.userDis && this.userDis.length === 0)) {
        this.getRemoteData()
      }
    }
  },
  methods: {
    // 获取话题分布数据
    getTopicDis (params) {
      this.loading = true
      api.getTopicDis(params).then(res => {
        if (res.data.code === 0) {
          this.topicDis = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取用户分布数据
    getUserDis (params) {
      this.loading = true
      api.getUserDis(params).then(res => {
        if (res.data.code === 0) {
          this.userDis = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取话题分布或用户分布数据
    getRemoteData () {
      if (this.activeName === '1') {
        this.getTopicDis()
      } else if (this.activeName === '2') {
        this.getUserDis()
      }
    },
    // 数据格式化
    formatData (list) {
      const arr = []
      list.map(item => {
        if (typeof item === 'object') {
          let key = Object.keys(item)
          if (key && key.length > 0) {
            key = key[0]
            arr.push({
              name: key.length > 5 ? key.substr(0, 5) + '...' : key,
              value: item[key]
            })
          }
        }
      })
      return arr
    }
  },
  mounted () {
    this.getRemoteData()
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  height: 250px;
}
</style>
