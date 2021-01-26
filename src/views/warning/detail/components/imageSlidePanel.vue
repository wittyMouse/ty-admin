<template>
  <div class="clue-detail-width">
    <div class="photo-scroll-container">
      <image-slide />

      <!--photo-content=start-->
      <div class="photo-content-box" v-for="(item, index) in list" :key="item.id">
        <span class="photo-circle-left">
          <img :src="item.avatar" />
        </span>
        <div class="photo-info-item">
          <div class="photo-name-data">
            <span class="white font16">{{item.email}}</span>
            <span class="photo-flag">
              <img :src="item.icon" width="25" />
            </span>
            <div class="photo-icon-box">
              <a href="#">
                <i class="edition-icon"></i>编辑
              </a>
              <a class="already" @click="handleFollowClick" v-if="item.follow">
                <i class="attention-icon"></i>已关注
              </a>
              <a @click="handleFollowClick" v-else>
                <i class="attention-icon"></i>关注
              </a>
            </div>
          </div>

          <!--信息介绍=start-->
          <div class="photo-info-detail">
            <div class="group-tag fleft">
              <span>{{item.identity}}</span>
            </div>
            <span class="fleft data-ports">端口:{{item.port}}</span>

            <div class="photo-inline-width">
              <span class="photo-inline-half">国籍：{{item.country}}</span>
              <span class="photo-inline-half">职位：{{item.position}}</span>
            </div>

            <div class="photo-inline-width" >{{item.remark}}</div>

            <div class="photo-inline-width">
              专项任务：
              <span class="white">{{item.task}}</span>
            </div>
          </div>
          <!--信息介绍=end-->
        </div>

        <!--活动分析=start-->
        <div class="activity-chart-box">
          <p>活动分析</p>
          <div class="activity-chart-item">
            <heat-map />
          </div>
        </div>
        <!--活动分析=start-->
      </div>
      <!--photo-content=end-->
    </div>
  </div>
</template>

<script>
import imageSlide from './imageSlide.vue'
import heatMap from './heatMap.vue'

export default {
  name: 'imageSlidePanel',
  components: {
    imageSlide,
    heatMap
  },
  data () {
    return {
      list: [
        {
          id: 1,
          avatar: require('../../../../assets/images/pic7.jpg'),
          email: 'Marius@gmail.com',
          icon: require('../../../../assets/images/small-flag.jpg'),
          follow: false,
          identity: '黑客',
          port: '1199posts',
          country: '美国',
          position: '未知',
          remark: '2000年，丽莎毕业于哈佛大学丽莎毕业于哈佛大学（Harvard University），是一名杂志专栏作家。',
          task: '恐怖主义'
        }
      ]
    }
  },
  methods: {
    // 关注
    handleFollowClick () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
