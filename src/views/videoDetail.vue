<template>
  <div class="container video-detail">
    <page-header />
    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />
      <div class="search-content-main">
        <span class="footer-shadow"></span>
        <base-panel>
          <search-bar :keywords="reqParams.keywords" @searchEvent="handleSearchEvent" />

          <div class="box-content">
            <div class="video-detail-box">
              <div class="video-width-box">
                <div class="video-detail-play">
                  <!--音频的图片或者视频的video-->
                  <!-- <img :src="resultData.imgSrc"> -->
                  <video
                    :src="resultData.video"
                    controls="controls"
                    style="width: 640px;"
                    ref="video"
                  >您的浏览器不支持 video 标签。</video>
                </div>

                <div class="video-detail-right">
                  <div class="video-detail-title">{{resultData.title}}</div>

                  <div class="width clear">
                    <p>
                      <span class="fleft">来源：{{resultData.source}}</span>
                      <span
                        class="fleft margin-left35"
                      >时间：{{formatDate(resultData.time, "yyyy-MM-dd")}}</span>
                    </p>
                  </div>

                  <div class="video-detail-info">
                    <p>{{resultData.content}}</p>
                  </div>

                  <div class="video-button clear">
                    <a @click="handlePlay">
                      <span class="v-play-icon"></span>播放
                    </a>
                    <a @click="handleStop">
                      <span class="v-pause-icon"></span>停止
                    </a>
                    <a :href="resultData.video" :download="resultData.fileName">
                      <span class="v-download-icon"></span>下载
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </base-panel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import basePanel from '@/components/common/basePanel.vue'
import searchBar from '@/components/common/searchBar.vue'
import { isEmpty, isEmptyObject, formatDate } from '@/utils/index.js'

export default {
  name: '',
  components: {
    pageHeader,
    breadcrumb,
    basePanel,
    searchBar
  },
  data () {
    return {
      video: '',
      navList: [
        { label: '情报检索', pathName: 'search' },
        { label: '音视频', pathName: 'video' },
        { label: '视频详情页', pathName: 'videoDetail' }
      ],
      reqParams: {
        keywords: ''
      },
      resultData: {
        id: 1,
        imgSrc: require('../assets/images/pic10.jpg'),
        video: require('../assets/video.mp4'),
        fileName: 'video.mp4',
        title:
          '刘烨马伊琍致敬时代刘烨马伊琍致敬时代刘烨马伊琍致敬时代刘烨马伊琍致敬时代',
        source: '特讯工种工具',
        time: 1574640000000,
        content: `详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情详情内容详情内容详情内容内容详情内容详情内容详情内容详情内容详
          情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容xxxxxxxxxxxxxxxxxxx详情内容xxxxxxxxxxxxxxxxxxx详情内容x
          xxxxxxxxxxxxxxxxxx详情内容xxxxxxxxxxxxxxxxxxx
          详情内容xxxxxxxxxxxxxxxxxxx详情内容xxxxxxxxxxxxxxxxxxx详情内容xxxxxxxxxxxxxxxxxxx
          详情内容xxxxxxxxxxxxxxxxxxx详情内容xxxxxxxxxxxxxxxxxxx`
      }
    }
  },
  methods: {
    formatDate,
    // 搜索
    handleSearchEvent () {},
    // 播放
    handlePlay () {
      this.video.play()
    },
    // 暂停
    handleStop () {
      this.video.pause()
    },
    // 下载
    handleDownload () {
      location.href = this.resultData.video
    }
  },
  mounted () {
    this.video = this.$refs.video
  }
}
</script>

<style>
</style>
