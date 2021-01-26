<template>
  <tab-panel :activeName.sync="activeName" :tabTitleList="['节点列表', '网站列表', '用户列表']" panelClass="dark-table-height">
    <template #1>
      <div class="table-headsearch clearfix text-right">
        <base-select class="width200 float-none" v-model="reqParams.source" placeholder="请选择国家" :list="countryList" />
        <input v-model="reqParams.content" placeholder="输入要搜索的内容" class="common-input" />
        <button class="search-icon-btn fright" @click="handleSearchClick"></button>
      </div>
      <div class="table-content">
        <baseTable :list="nodeData.nodeList">
          <el-table-column prop="ip" width="130px" label="IP地址"></el-table-column>
          <el-table-column prop="remark" label="标签"></el-table-column>
          <el-table-column prop="version" label="ISP"></el-table-column>
          <el-table-column prop="area" label="地区"></el-table-column>
          <el-table-column prop="releaseTime" width="150px" label="发行时间">
            <template slot-scope="scope">
              {{formatDate(scope.row.releaseTime)}}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60px" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </baseTable>
        <base-pagination class="base-pagination" :currentPage="reqParams.currentPage" :pageSize="reqParams.pageSize" :total="nodeData.totalCount" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
      </div>
    </template>
    <template #2>
      <div class="table-headsearch clearfix text-right">
        <base-select class="width200 float-none" v-model="reqParams.source" placeholder="请选择语言" :list="languageList" />
        <input v-model="reqParams.content" placeholder="输入要搜索的内容" class="common-input" />
        <button class="search-icon-btn fright" @click="handleSearchClick"></button>
      </div>
      <div class="table-content">
        <baseTable :list="websiteData.websiteList">
          <el-table-column prop="name" label="网站名称"></el-table-column>
          <el-table-column prop="type" min-width="100px" label="标签"></el-table-column>
          <!-- <el-table-column prop="administrator" label="管理员"></el-table-column> -->
          <el-table-column prop="language" min-width="100px" label="语言"></el-table-column>
          <el-table-column prop="lastOnlineTime" width="150px" label="最近一次在线时间">
            <template slot-scope="scope">
              {{formatDate(scope.row.lastOnlineTime)}}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60px" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </baseTable>
        <base-pagination class="base-pagination" :currentPage="reqParams.currentPage" :pageSize="reqParams.pageSize" :total="websiteData.totalCount" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
      </div>
    </template>
    <template #3>
      <div class="table-headsearch clearfix text-right">
        <base-select class="width200 float-none" v-model="reqParams.source" placeholder="请选择来源" :list="sourceList" />
        <input v-model="reqParams.content" placeholder="输入要搜索的内容" class="common-input" />
        <button class="search-icon-btn fright" @click="handleSearchClick"></button>
      </div>
      <div class="table-content">
        <baseTable :list="userData.userList">
          <el-table-column prop="name" width="130px" label="昵称"></el-table-column>
          <el-table-column prop="source" min-width="200px" label="来源"></el-table-column>
          <el-table-column prop="remark" label="标签"></el-table-column>
          <el-table-column prop="area" label="地区"></el-table-column>
          <el-table-column prop="lastOnlineTime" width="150px" label="最近一次在线时间">
            <template slot-scope="scope">
              {{formatDate(scope.row.lastOnlineTime)}}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60px" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </baseTable>
        <base-pagination class="base-pagination" :currentPage="reqParams.currentPage" :pageSize="reqParams.pageSize" :total="userData.totalCount" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
      </div>
    </template>
  </tab-panel>
</template>
<script>
import * as api from '@/api/darknet'
import { mapState } from 'vuex'
import { formatDate } from '@/utils'
import { languageMap, countryMap } from '@/utils/localData'
import tabPanel from '@/components/common/tabPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'
import baseTable from '@/components/common/baseTable.vue'
import basePagination from '@/components/common/basePagination.vue'

export default {
  name: 'dataTableTab',
  components: {
    tabPanel,
    baseSelect,
    baseTable,
    basePagination
  },
  data () {
    return {
      loading: false,
      // 当前tab
      activeName: '1',
      reqParams: {
        source: '',
        content: '',
        currentPage: 1,
        pageSize: 10
      },
      // 节点列表
      nodeData: {},
      // 网站列表
      websiteData: {},
      // 用户列表
      userData: {}
    }
  },
  computed: {
    ...mapState(['sourceList']),
    // 语言列表
    languageList () {
      const arr = Object.keys(languageMap).map(key => {
        return { key, value: languageMap[key] }
      })
      return arr
    },
    // 国家列表
    countryList () {
      const arr = Object.keys(countryMap).map(key => {
        return { key, value: countryMap[key] }
      })
      return arr
    }
  },
  watch: {
    activeName (val) {
      debugger
      const params = {
        content: '',
        currentPage: 1,
        pageSize: 10
      }
      switch (val) {
        case '1':
          params.source = ''
          break
        case '2':
          params.source = 'tw,zh,cn,hk,sg'
          break
        case '3':
          params.source = ''
          break
      }
      this.reqParams = params
      this.sendRequest(val)
    }
  },
  methods: {
    formatDate,

    // 获取节点列表
    getNodeList (data) {
      this.loading = true
      api.getNodeList(data).then(res => {
        if (res.data.code === 0) {
          this.nodeData = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取网站列表
    getWebsiteList (data) {
      this.loading = true
      api.getWebsiteList(data).then(res => {
        if (res.data.code === 0) {
          this.websiteData = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取用户列表
    getUserList (params) {
      this.loading = true
      api.getUserList(params).then(res => {
        if (res.data.code === 0) {
          this.userData = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 点击搜索按钮
    handleSearchClick () {
      this.sendRequest(this.activeName)
    },

    // 当前页切换
    handleCurrentChange (page) {
      this.reqParams.currentPage = page
      this.sendRequest(this.activeName)
    },

    // 每页条数切换
    handleSizeChange (size) {
      this.reqParams.pageSize = size
      this.sendRequest(this.activeName)
    },

    // 发送请求
    sendRequest (activeName) {
      const params = {
        keywords: this.reqParams.content,
        pageIndex: this.reqParams.currentPage,
        pageCount: this.reqParams.pageSize
      }
      switch (activeName) {
        case '1':
          params.language = this.reqParams.source
          this.getNodeList(params)
          break
        case '2':
          params.language = this.reqParams.source
          this.getWebsiteList(params)
          break
        case '3':
          params.type = this.reqParams.source
          this.getUserList(params)
          break
        default:
          break
      }
    },

    // 查看详情
    handleClick (obj) {
      switch (this.activeName) {
        case '1':
          this.$router.push({ name: 'ipAddress_result', query: { keywords: obj.ip } })
          break
        case '2':
          this.$router.push({ name: 'websitePage', query: { name: obj.name } })
          break
        case '3':
          this.$router.push({ name: 'people', query: { ip: obj.ip } })
          break
        default:
          break
      }
    }
  },
  mounted () {
    this.sendRequest(this.activeName)
  }
}
</script>
<style lang="scss" scoped>
.select-common {
  vertical-align: middle;
}
.base-pagination {
  margin-top: 10px;
  text-align: center;
}
</style>
