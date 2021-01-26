<template>
  <div class="container blackMarket">
    <page-header />
    <div class="mainbox clearfix">
      <div class="main-left percent-25">
        <quantity-rank :siteRankList="siteRankList" />

        <sale-rank :saleRankList="saleRankList" />

        <store-rank :shopTopData="shopTopData" />

        <rate-info :shopTypeList="shopTypeList" />
      </div>

      <div class="main-mid percent-75">
        <div class="percent-70 fleft">
          <statistic-info />
        </div>

        <div class="percent-30 fright main-right">
          <sale-trend :salesTrendData="salesTrendData" />

          <area-rank :areaTopData="areaTopData" />
        </div>

        <div class="width clear">
          <div class="percent-100">
            <sale-table :msgData="msgData" @search="handleSearchEvent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/blackMarket'
import pageHeader from '@/components/common/pageHeader.vue'
import quantityRank from './components/quantityRank'
import saleRank from './components/saleRank'
import storeRank from './components/storeRank'
import rateInfo from './components/rateInfo'
import statisticInfo from './components/statisticInfo'
import areaRank from './components/areaRank'
import saleTrend from './components/saleTrend'
import saleTable from './components/saleTable'

export default {
  name: 'blackMarket',
  components: {
    pageHeader,
    quantityRank,
    saleRank,
    storeRank,
    rateInfo,
    statisticInfo,
    areaRank,
    saleTrend,
    saleTable
  },
  data () {
    return {
      siteRankList: [],
      saleRankList: [],
      shopTopData: {},
      shopTypeList: [],
      msgData: {},
      salesTrendData: {},
      areaTopData: {}
    }
  },
  methods: {
    // 获取销售额排行
    getSiteTop () {
      this.loading = true
      api.getSiteTop({ size: 5 }).then(res => {
        if (res.data.code === 0) {
          this.siteRankList = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取销售量排行
    getSalesTop () {
      this.loading = true
      api.getSalesTop({ size: 5 }).then(res => {
        if (res.data.code === 0) {
          this.saleRankList = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取店铺排行
    getShopTop () {
      this.loading = true
      api.getShopTop({ size: 5 }).then(res => {
        if (res.data.code === 0) {
          this.shopTopData = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取商品类型分布
    getTypeAgg () {
      api.getTypeAgg().then(res => {
        if (res.data.code === 0) {
          this.shopTypeList = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {})
    },

    // 获取最新资讯
    getMarketMsg (params = { keyword: '', pageIndex: 1, pageCount: 10 }) {
      this.loading = true
      api.getMarketMsg(params).then(res => {
        if (res.data.code === 0) {
          this.msgData = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取销售趋势
    getSalesTrend () {
      this.loading = true
      const params = {
        timeStart: null,
        timeEnd: null
      }
      api.getSalesTrend(params).then(res => {
        if (res.data.code === 0) {
          this.salesTrendData = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 获取地区排行
    getAreaTop () {
      this.loading = true
      api.getAreaTop({ size: 5 }).then(res => {
        if (res.data.code === 0) {
          this.areaTopData = res.data.data
        } else {

        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },

    // 搜索事件
    handleSearchEvent (params) {
      this.getMarketMsg(params)
    },

    sendRequest () {
      this.getSiteTop()
      this.getSalesTop()
      this.getShopTop()
      this.getTypeAgg()
      this.getMarketMsg()
      this.getSalesTrend()
      this.getAreaTop()
    }
  },
  mounted () {
    this.sendRequest()
  }
}
</script>

<style lang="scss" scoped>
</style>
