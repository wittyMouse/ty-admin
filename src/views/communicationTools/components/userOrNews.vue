<template>
  <tab-panel class="tab-panel" :activeName.sync="activeName" :tabTitleList="['重点用户', '最新情报']" panelClass="height-user-info">
    <template #1>
      <major-user :list="keyUser.users_info" />
    </template>
    <template #2>
      <news-list :list="newMsg" />
    </template>
  </tab-panel>
</template>

<script>
import * as api from '@/api/communicationTools'
import tabPanel from '@/components/common/tabPanel.vue'
import majorUser from './majorUser.vue'
import newsList from './newsList'

export default {
  name: 'userOrNews',
  components: {
    tabPanel,
    majorUser,
    newsList
  },
  data () {
    return {
      activeName: '1',
      keyUser: {},
      newMsg: []
    }
  },
  watch: {
    activeName () {
      this.getRemoteData()
    }
  },
  methods: {
    // 获取重点群组列表
    getKeyUser (params) {
      this.loading = true
      api.getKeyUser(params).then(res => {
        if (res.data.code === 0) {
          this.keyUser = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取重点群组列表
    getNewMsg (params) {
      this.loading = true
      api.getNewMsg(params).then(res => {
        if (res.data.code === 0) {
          this.newMsg = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取重点用户或最新情报
    getRemoteData () {
      if (this.activeName === '1') {
        this.getKeyUser()
      } else if (this.activeName === '2') {
        this.getNewMsg()
      }
    },
    // 更新消息订阅
    updateNewsSubscribe (obj) {
      this.$set(this.list[obj.idx], 'isSubscribe', !obj.item.isSubscribe)
      console.log(this.list)
    },
    // 捕获切换消息订阅
    handleNewsChange (obj) {
      this.updateNewsSubscribe(obj)
    }
  },
  mounted () {
    this.getRemoteData()
  }
}
</script>

<style lang="scss" scoped>
.tab-panel::v-deep .el-tabs__content {
  overflow: unset;
}
</style>
