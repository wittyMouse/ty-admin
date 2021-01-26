<template>
  <div class="warm-main-right">
    <base-panel panelClass="clearfix">
      <template #top>
        <span class="footer-shadow"></span>
      </template>
      <div class="common-title">
        <breadcrumb :navList="navList" />
      </div>
      <div class="box-content">
        <image-slide-panel />

        <!--右侧统计图=start-->
        <div class="clue-right-chart">
          <div class="clue-chart-relation">关系图</div>
          <div class="clue-chart-pie">饼图</div>
        </div>
        <!--右侧统计图=end-->

        <!--//table-content=start//-->
        <div class="clue-table-box">
          <!--选项卡标题=start-->
          <div class="bar-tab-item">
            <ul class="bar-tab-list margin-left10">
              <li class="current">威胁情报</li>
              <li>IP分析</li>
              <li>社交帐号</li>
              <li>比特币账号</li>
            </ul>
          </div>
          <!--选项卡标题=end-->

          <div class="bar-tab-box">
            <!--威胁情报=start-->
            <div class="bar-tab-width">
              <!--表头搜索=start-->
              <div class="table-headsearch">
                <span class="font16 fleft lh32">威胁情报检测</span>
                <div class="fright">
                  <input type="text" value placeholder="输入要搜索的内容" id class="common-input" />
                  <button class="search-icon-btn fright"></button>
                </div>
              </div>
              <!--表头搜索=end-->

              <div class="table-list-box">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <th width="45%" height="32">情报内容</th>
                      <th width="20%">发帖人</th>
                      <th width="20%">情报源</th>
                      <th width="15%">时间</th>
                    </tr>
                    <tr>
                      <td width="45%">
                        <div class="clue-information-text">
                          近日@俞敏洪 在演讲时表示，当初为新东方买楼时，后悔少买了一栋，
                          现在据说已经四、五十亿不止了。如果当时狠心买下来，新东方现在就
                          可以关门了。这世界其实不需要做那么多事，赚一票最后就.....
                          <span
                            class="full-information"
                          >展开&nbsp;></span>
                          <!--<span class="full-information">收起></span>-->
                        </div>
                      </td>
                      <td width="20%">xxxxxxxxxxxxxx</td>
                      <td width="20%">新浪新闻</td>
                      <td width="15%">2019-10-10 12:23:20</td>
                    </tr>

                    <tr>
                      <td width="45%">
                        <div class="clue-information-text">
                          近日@俞敏洪 在演讲时表示，当初为新东方买楼时，后悔少买了一栋，
                          现在据说已经四、五十亿不止了。如果当时狠心买下来，新东方现在就
                          可以关门了。这世界其实不需要做那么多事，赚一票最后就俞敏洪 在演讲时表示，当初为新东方买楼时，后悔少买了一栋，
                          现在据说已经四、五十亿不止了。
                          <span
                            class="full-information"
                          >收起&nbsp;></span>
                        </div>
                      </td>
                      <td width="20%">xxxxxxxxxxxxxx</td>
                      <td width="20%">新浪新闻</td>
                      <td width="15%">2019-10-10 12:23:20</td>
                    </tr>
                  </tbody>
                </table>

                <!--翻页内容=start-->
                <div class="pagenation-box clearfix">翻页内容</div>
                <!--翻页内容=end-->
              </div>
            </div>
            <!--威胁情报=end-->

            <!--IP分析=start-->
            <div class="bar-tab-width" style="display: none;"></div>
            <!--IP分析=end-->

            <!--社交帐号=start-->
            <div class="bar-tab-width" style="display: none;"></div>
            <!--社交帐号=end-->

            <!--比特币账号=start-->
            <div class="bar-tab-width" style="display: none;"></div>
            <!--比特币账号=end-->
          </div>
        </div>
        <!--//table-content=end//-->
      </div>
    </base-panel>
  </div>
</template>

<script>
import basePanel from '@/components/common/basePanel.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import imageSlidePanel from './components/imageSlidePanel.vue'

export default {
  name: 'detail',
  components: {
    basePanel,
    breadcrumb,
    imageSlidePanel
  },
  data () {
    return {
      navList: [
        { label: '监测预警', pathName: 'warning' },
        { label: '线索库', pathName: 'warning_clue' },
        { label: '情报线索详情', pathName: 'warning_clue_detail' }
      ]
    }
  }
}
</script>

<style>
</style>
