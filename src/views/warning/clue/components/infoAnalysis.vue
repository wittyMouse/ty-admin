<template>
  <div class="inner-tab-width clearfix">
    <div class="clue-relation-box">
      <relative-chart :currentTab="currentTab" />
    </div>

    <!--功能操作内容=start-->
    <div class="clue-function-box">
      <!--活动地点&相关人物=start-->
      <div class="clue-function-item">
        <ul class="clue-function-tab">
          <li class="current">活动地点</li>
          <li>相关人物</li>
        </ul>

        <div class="clue-function-tabbox">
          <!--活动地点=start-->
          <div class="clue-function-tabwid">
            <div class="clue-activity-cont">
              <a href="#">
                天河区
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                黄埔区
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                番禺区
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                天河区
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                黄埔区
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                番禺区
                <span class="delete-arrow"></span>
              </a>
            </div>
            <div class="clue-add-btn">
              <a href="#">+&nbsp;新增</a>
            </div>
          </div>
          <!--活动地点=end-->

          <!--相关人物=start-->
          <div class="clue-function-tabwid" style="display: none;">
            <div class="clue-person-cont">
              <a href="#">
                科神布尔
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                xxxxxxxxxxx
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                xxxxxxxxxxx
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                xxxxxxxxxxx
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                xxxxxxxxxxx
                <span class="delete-arrow"></span>
              </a>
              <a href="#">
                xxxxxxxxxxx
                <span class="delete-arrow"></span>
              </a>
            </div>
            <div class="clue-add-btn">
              <a href="#">+&nbsp;新增</a>
            </div>
          </div>
          <!--相关人物=end-->
        </div>
      </div>
      <!--活动地点&相关人物=end-->

      <!--IP地址&端口=start-->
      <div class="clue-function-item margin-top10">
        <ul class="clue-function-tab">
          <li class="current">IP地址</li>
          <li>端口</li>
        </ul>

        <div class="clue-function-tabbox">
          <!--IP地址=start-->
          <div class="clue-function-tabwid">
            <div class="clue-ip-box">
              <div class="clue-ipcontent">
                <input type="text" value="192.168.1.110" class="input-bgnone" />
                <span class="delete-arrow"></span>
              </div>

              <div class="clue-ipcontent">
                <input type="text" value="192.168.1.110" class="input-bgnone" />
                <span class="delete-arrow"></span>
              </div>
            </div>
            <div class="clue-add-btn">
              <a href="#">+&nbsp;新增</a>
            </div>
          </div>
          <!--IP地址=end-->

          <!--端口=start-->
          <div class="clue-function-tabwid" style="display: none;">
            <div class="clue-ip-box">
              <div class="clue-ipcontent">
                <input type="text" value="8080" class="input-bgnone" />
                <span class="delete-arrow"></span>
              </div>

              <div class="clue-ipcontent">
                <input type="text" value="8006" class="input-bgnone" />
                <span class="delete-arrow"></span>
              </div>
            </div>
            <div class="clue-add-btn">
              <a href="#">+&nbsp;新增</a>
            </div>
          </div>
          <!--端口=end-->
        </div>
      </div>
      <!--IP地址&端口=end-->

      <!--域名列表=start-->
      <div class="clue-function-item margin-top10">
        <ul class="clue-function-tab">
          <li class="current">域名列表</li>
        </ul>
        <div class="clue-function-tabbox">
          <div class="clue-function-tabwid">
            <div class="clue-ip-box">
              <div class="clue-ipcontent">
                <input type="text" value="www.tianyanqingbao.com" class="input-bgnone" />
                <span class="delete-arrow"></span>
              </div>
            </div>
            <div class="clue-add-btn">
              <a href="#">+&nbsp;新增</a>
            </div>
          </div>
        </div>
      </div>
      <!--域名列表=end-->
    </div>
    <!--功能操作内容-content=end-->
  </div>
</template>

<script>
import relativeChart from '../../components/relativeChart.vue'

export default {
  name: 'infoAnalysis',
  components: {
    relativeChart
  },
  props: {
    currentTab: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.clue-relation-box {
  height: 575px;
}
</style>
