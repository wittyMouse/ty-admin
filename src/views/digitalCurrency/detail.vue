<template>
  <div class="main-left percent-100">
    <base-panel panelClass="height-digital">
      <div class="box-content space-none">
        <div class="trade-list-item" v-for="(item, index) in list" :key="index">
          <div class="trade-list-title">
            <h3>{{item.transId}}</h3>
            <!-- <span class="text-right fright">{{formatDate(item.time)}}</span> -->
            <span class="text-right fright">{{item.time}}</span>
          </div>
          <div class="trade-list-box">
            <div class="trade-left-data">
              <a v-for="(item, index) in item.inputs" :key="index" @click="handleUpdateSearch(item.name)">
                <span>{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.totalFee}}</span><b>B</b>
              </a>
              <!-- <a v-for="(item, index) in item.inputs" :key="index" @click="handleChangeInfo(item)">
                <span>{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.totalFee}}</span><b>B</b>
              </a> -->
            </div>
            <div class="trade-right-data">
              <!-- <a v-for="(item, index) in item.outputs" :key="index" @click="handleUpdateSearch(item.name)">
                <span>{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.totalFee}}</span><b>B</b>
              </a> -->
              <a v-for="(item, index) in item.outputs" :key="index" @click="handleChangeInfo(item)">
                <span>{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.totalFee}}</span><b>B</b>
              </a>
              <list-info-panel :infoData="saleInfo" panelClass="trade-list-data" v-show="saleInfo&&Object.keys(saleInfo).length > 0" />
            </div>
          </div>
        </div>
      </div>
    </base-panel>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import basePanel from '@/components/common/basePanel.vue'
import listInfoPanel from '@/components/digitalCurrency/listInfoPanel.vue'
import { formatDate } from '@/utils/index.js'
const { mapGetters } = createNamespacedHelpers('digitalCurrency')

export default {
  name: 'detail',
  components: {
    basePanel,
    listInfoPanel
  },
  data () {
    return {
      saleInfo: {}
    }
  },
  computed: {
    ...mapGetters(['listPageData']),
    list () {
      if (!this.listPageData || this.listPageData.length <= 0) {
        return []
      }
      return this.listPageData
    }
  },
  watch: {
    listPageData (arr) {
      if (arr && arr.length > 0 && arr[0].outputs && arr[0].outputs.length > 0) {
        this.saleInfo = arr[0].outputs[0]
      }
    }
  },
  methods: {
    formatDate,
    // 更新搜索内容
    handleUpdateSearch (text) {
      this.$router.push({ name: 'digitalCurrency_info', query: { keywords: text } })
    },
    // 更新信息
    handleChangeInfo (obj) {
      this.saleInfo = obj
    }
  },
  mounted () {
    if (this.listPageData && this.listPageData.length > 0 && this.listPageData[0].outputs && this.listPageData[0].outputs.length > 0) {
      this.saleInfo = this.listPageData[0].outputs[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
