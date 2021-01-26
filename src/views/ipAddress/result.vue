<template>
  <div>
    <div class="main-left percent-25">
      <base-panel panelClass="height-ipaddress">
        <div class="box-content">
          <div class="ipaddress-item">
            <a href="#" class="ipaddress-more" v-if="info.ip">{{info.ip}}</a>
            <p class="blue">{{info.remarks}}</p>
            <div class="address-tag">
              <span v-for="(item, index) in info.tags" :key="index">{{item}}</span>
            </div>

            <div class="address-data">
              <p class="white">
                <span class="small-flag">
                  <img src="../../assets/images/small-flag.jpg" width="26" />
                </span>
                <span>{{info.countryName}}<span v-if="info.subdivisionName">,{{info.subdivisionName}}</span></span>
              </p>
              <p>{{info.time}}</p>
            </div>
          </div>
        </div>
      </base-panel>

      <base-panel panelClass="height-ipaddress-map">
        <!-- <div class="box-content address-map-box"> -->
          <baidu-map :point="info.coordinates" />
          <!-- <div class="address-map">
            <img src="../../assets/images/address-pic.jpg" />
          </div> -->
        <!-- </div> -->
      </base-panel>

    </div>

    <!--//RIGHT=start//-->
    <div class="main-right percent-75">
      <base-panel>
        <div class="common-title">
          <h3>端口&nbsp;ports</h3>
        </div>
        <!--title=end-->

        <!--content=start-->
        <div class="box-content">
          <!--端口=start-->
          <div class="port-list-item">
            <a :class="{current: currentPort === index}" v-for="(item, index) in portList" :key="index" @click="handlePortChange(index)">{{item}}</a>
          </div>
          <!--端口=end-->
        </div>
        <!--content=end-->

        <!--服务=start-->
        <div class="address-service-item">
          <div class="left-arrow-title">
            <h3>服务&nbsp;services</h3>
          </div>
          <ul class="address-service-list">
            <li v-for="(item, index) in serviceList" :key="index">
              <span class="service-pic">
                <img src="../../assets/images/flag-pic.jpg" width="128" />
              </span>
              <p>{{item.remarks}}</p>
            </li>
          </ul>
        </div>
      </base-panel>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import basePanel from '@/components/common/basePanel.vue'
import baiduMap from '@/components/search/baiduMap.vue'
import complexChart from '@/components/common/complexChart.vue'
const { mapGetters } = createNamespacedHelpers('ipAddress')

export default {
  name: 'result',
  components: {
    basePanel,
    baiduMap,
    complexChart
  },
  data () {
    return {
      currentPort: 0
    }
  },
  computed: {
    ...mapGetters(['resultPageData']),
    info () {
      // if (!this.resultPageData || !this.resultPageData.info) {
      //   return {};
      // }
      // return this.resultPageData.info;

      if (!this.resultPageData) {
        return {}
      }
      return this.resultPageData
    },
    portList () {
      if (!this.resultPageData || !this.resultPageData.port) {
        return []
      }
      const arr = []
      this.resultPageData.port.map(item => {
        arr.push(item)
      })
      return arr
    },
    serviceList () {
      if (!this.resultPageData || !this.resultPageData.ports) {
        return []
      }
      return this.resultPageData.ports[this.currentPort].services
    }
  },
  methods: {
    // 端口切换
    handlePortChange (idx) {
      if (this.currentPort === idx) {
        return
      }
      this.currentPort = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-box {
  width: 100%;
  height: 100%;
}
</style>
