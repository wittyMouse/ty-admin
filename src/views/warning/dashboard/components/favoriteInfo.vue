<template>
  <tab-panel
    :activeName.sync="activeName"
    :tabTitleList="['关注的网站', '关注的群组']"
    panelClass="height-figure"
  >
    <template #1>
      <div class="attention-website-box">
        <baseTable :list="favoriteWebsite" :tableHeight="440">
          <el-table-column prop="name" label="网站"></el-table-column>
          <el-table-column prop="administrator" label="管理员"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
        </baseTable>
      </div>
    </template>
    <template #2>
      <div class="attention-website-box">
        <baseTable :list="favoriteGroup" :tableHeight="440">
          <el-table-column prop="name" label="群组名"></el-table-column>
          <el-table-column prop="administrator" label="管理员"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
        </baseTable>
      </div>
    </template>
  </tab-panel>
</template>

<script>
import * as api from '@/api/warning'
import tabPanel from '@/components/common/tabPanel.vue'
import baseTable from '@/components/common/baseTable.vue'

export default {
  name: 'favoriteInfo',
  components: {
    tabPanel,
    baseTable
  },
  data () {
    return {
      activeName: '1',
      favoriteWebsite: [],
      favoriteGroup: []
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
    // 获取关注的网站/群组
    getFavoriteInfo (data) {
      this.loading = true
      api.getFavoriteInfo(data).then(res => {
        if (res.data.code === 0) {
          if (this.activeName === '1') {
            this.favoriteWebsite = res.data.data
          } else {
            this.favoriteGroup = res.data.data
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
      this.getFavoriteInfo(data)
    }
  },
  mounted () {
    this.sendRequest(this.activeName)
  }
}
</script>

<style lang="scss" scoped>
</style>
