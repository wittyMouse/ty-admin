<template>
  <div class="main-map-item">
    <!--地图map=start-->
    <div class="data-map-box">
      <map-chart @click="handleMapClick" />
      <!-- <div class="data-map-content">地图</div> -->
    </div>
    <!--地图map=end-->

    <!--搜索内容=start-->
    <div class="map-selsect-box">
      <select class="select-common width150">
        <option>请选择专项任务</option>
      </select>

      <!--请选择时间-->
      <select class="select-common width150">
        <option>请选择时间</option>
        <option>24h</option>
        <option>7天</option>
        <option>1个月</option>
        <option>全部时间</option>
      </select>
    </div>
    <!--搜索内容=end-->

    <!--地图统计信息=start-->
    <div class="map-statistic-databox">
      <div class="mstatistic-data">
        <span class="map-news-icon"></span>
        <div class="ms-data-text">
          <p>监测到的信息总量</p>
          <p class="yellow-math">1,358,023</p>
        </div>
      </div>

      <div class="mstatistic-data">
        <span class="map-user-icon"></span>
        <div class="ms-data-text">
          <p>活跃用户</p>
          <p class="yellow-math">1,358,023</p>
        </div>
      </div>

      <div class="mstatistic-data">
        <span class="map-topic-icon"></span>
        <div class="ms-data-text">
          <p>话题</p>
          <p class="yellow-math">1,358,023</p>
        </div>
      </div>
    </div>
    <!--地图统计信息=end-->

    <!--类别统计=start-->
    <div class="map-statistic-data-box">
      <ul class="map-stdata-list">
        <li>
          <div class="map-st-title">
            <span class="font16">Tor</span>
            <span class="text-right white">58%</span>
          </div>
          <div class="yellow-math-small">
            <span>558,023</span>
            <span class="ms-up-icon" title="上升"></span>
          </div>
        </li>
        <li>
          <div class="map-st-title">
            <span class="font16">Tor</span>
            <span class="text-right white">58%</span>
          </div>
          <div class="yellow-math-small">
            <span>558,023</span>
            <span class="ms-down-icon" title="下降"></span>
          </div>
        </li>
        <li>
          <div class="map-st-title">
            <span class="font16">Tor</span>
            <span class="text-right white">58%</span>
          </div>
          <div class="yellow-math-small">
            <span>558,023</span>
            <span class="ms-up-icon" title="上升"></span>
          </div>
        </li>
        <li>
          <div class="map-st-title">
            <span class="font16">Tor</span>
            <span class="text-right white">58%</span>
          </div>
          <div class="yellow-math-small">
            <span>558,023</span>
            <span class="ms-down-icon" title="下降"></span>
          </div>
        </li>
      </ul>
    </div>
    <!--类别统计=end-->
  </div>
</template>

<script>
import mapChart from '@/components/common/mapChart.vue'

export default {
  name: 'mapPanel',
  components: {
    mapChart
  },
  methods: {
    handleMapClick (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
