<template>
  <div class="container blockchain">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <!--//LEFT=start//-->
      <div class="main-left percent-25">
        <danger-level :dangerLevel="dangerLevel" />

        <top-area :topAreaList="topAreaList" />

        <dark-address-source :darkAddressSourceList="darkAddressSourceList" />

        <theme-source :themeSourceList="themeSourceList" />
      </div>
      <!--//LEFT=end//-->

      <!--//MID=start//-->
      <div class="main-mid percent-53">
        <div class="level-width clearfix">
          <div class="percent-50 space-right fleft">
            <transactionPanel :transactionData="transactionData" />
          </div>

          <div class="percent-50 fleft">
            <nodeCount :nodeCountData="nodeCountData" />
          </div>
        </div>

        <div class="level-width clearfix margin-top10">
          <darkAddressCount :darkAddressCountData="darkAddressCountData" />
        </div>

        <relational-chart :relationalChartData="relationalChartData" />
      </div>
      <!--//MID=end//-->

      <!--//RIGHT=start//-->
      <div class="main-right percent-22">
        <a href="#" class="close-text">x&nbsp;关闭</a>
        <detail-panel :detailData="relationalDetail" />
      </div>
      <!--//RIGHT=end//-->
    </div>
  </div>
</template>
<script>
import * as api from '@/api/blockchain'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import topArea from './components/topArea.vue'
import dangerLevel from './components/dangerLevel.vue'
import darkAddressCount from './components/darkAddressCount.vue'
import darkAddressSource from './components/darkAddressSource.vue'
import transactionPanel from './components/transactionPanel.vue'
import nodeCount from './components/nodeCount.vue'
import relationalChart from './components/relationalChart.vue'
import themeSource from './components/themeSource.vue'
import detailPanel from './components/detailPanel.vue'

export default {
  name: 'blockchain',
  components: {
    pageHeader,
    breadcrumb,
    topArea,
    dangerLevel,
    darkAddressCount,
    darkAddressSource,
    detailPanel,
    transactionPanel,
    nodeCount,
    relationalChart,
    themeSource
  },
  data () {
    return {
      navList: [
        { label: '态势感知', pathName: 'home' },
        { label: '区块链', pathName: 'blockchain' }
      ],
      loading: false,
      // 威胁评级数据
      dangerLevel: {},
      // 区域分布TOP5信息
      topAreaList: [],
      // 黑地址分布信息
      darkAddressSourceList: [],
      // 主题分布信息
      themeSourceList: [],
      // 交易分布
      transactionData: {},
      // 节点数量
      nodeCountData: {},
      // 黑地址数量
      darkAddressCountData: {},
      // 图表数据
      relationalChartData: {},
      // 详情数据
      relationalDetail: {}
    }
  },
  methods: {
    // 获取威胁评级数据
    getDangerLevel (params) {
      this.loading = true
      api.getDangerLevel(params).then(res => {
        if (res.data.code === 0) {
          this.dangerLevel = res.data.data
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取区域分布TOP5信息
    getTopArea (params) {
      this.loading = true
      api.getTopArea(params).then(res => {
        if (res.data.code === 0) {
          this.topAreaList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取黑地址分布信息
    getDarkAddressSource (params) {
      this.loading = true
      api.getDarkAddressSource(params).then(res => {
        if (res.data.code === 0) {
          this.darkAddressSourceList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取主题分布信息
    getThemeSource (params) {
      this.loading = true
      api.getThemeSource(params).then(res => {
        if (res.data.code === 0) {
          this.themeSourceList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取交易分布
    getTransaction (params) {
      this.loading = true
      api.getTransaction(params).then(res => {
        if (res.data.code === 0) {
          this.transactionData = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取节点数量
    getNodeCount (params) {
      this.loading = true
      api.getNodeCount(params).then(res => {
        if (res.data.code === 0) {
          this.nodeCountData = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取黑地址数量信息
    getDarkAddressCount (params) {
      this.loading = true
      api.getDarkAddressCount(params).then(res => {
        if (res.data.code === 0) {
          this.darkAddressCountData = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取交易映射
    getTransactedMapping (data) {
      this.loading = true
      api.getTransactedMapping(data).then(res => {
        if (res.data.code === 0) {
          this.relationalChartData = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取详情数据
    getRelationalDetail (data) {
      this.loading = true
      api.getRelationalDetail(data).then(res => {
        if (res.data.code === 0) {
          this.relationalDetail = res.data.data
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
    sendRequest () {
      this.getDangerLevel()
      this.getTopArea()
      this.getDarkAddressSource()
      this.getThemeSource()
      this.getTransaction()
      this.getNodeCount()
      this.getDarkAddressCount()
      this.getRelationalDetail({
        addr: '12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S'
      })
      this.getTransactedMapping({
        data: {
          blockType: 'btc'
        }
      })
    }
  },
  mounted () {
    this.sendRequest()
  }
}
</script>
<style lang="scss">
.height-relation {
  height: 462px;
}
</style>
