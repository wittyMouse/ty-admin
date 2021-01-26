<template>
  <tab-panel :activeName.sync="activeName" :tabTitleList="['最新群组', '重点群组']" panelClass="height-four">
    <template #1>
      <new-group :list="newGroup" @newsChange="handleNewChange" />
    </template>
    <template #2>
      <new-group :list="keyGroup" @newsChange="handlekeyChange" />
    </template>
  </tab-panel>
</template>

<script>
import * as api from '@/api/communicationTools'
import tabPanel from '@/components/common/tabPanel.vue'
import newGroup from './newGroup.vue'

export default {
  name: 'groupPanel',
  components: {
    tabPanel,
    newGroup
  },
  data () {
    return {
      activeName: '1',
      newGroup: [],
      keyGroup: []
    }
  },
  watch: {
    activeName () {
      this.getRemoteData()
    }
  },
  methods: {
    // 获取最新群组列表
    getNewGroup (params) {
      this.loading = true
      api.getNewGroup(params).then(res => {
        if (res.data.code === 0) {
          this.newGroup = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 更新最新群组通知
    updateNewGroupSubscribe (data, cb) {
      this.loading = true
      api.updateNewGroupSubscribe(data).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.msg)
          cb && cb()
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
    getKeyGroup (params) {
      this.loading = true
      api.getKeyGroup(params).then(res => {
        if (res.data.code === 0) {
          this.keyGroup = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取最新群组或重点群组列表
    getRemoteData () {
      if (this.activeName === '1') {
        this.getNewGroup()
      } else if (this.activeName === '2') {
        this.getKeyGroup()
      }
    },
    // 捕获切换消息订阅
    handleNewChange (obj) {
      this.updateNewGroupSubscribe({ id: obj.id, subscribe: obj.isSubscribe ? 0 : 1 }, () => {
        this.getNewGroup()
      })
    },
    // 捕获切换消息订阅
    handlekeyChange (obj) {
      this.updateNewGroupSubscribe({ id: obj.id, subscribe: obj.isSubscribe ? 0 : 1 }, () => {
        this.getKeyGroup()
      })
    }
  },
  mounted () {
    this.getRemoteData()
  }
}
</script>

<style lang="scss" scoped>
</style>
