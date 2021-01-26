<template>
<tab-panel class="tab-panel" :activeName.sync="activeName" :tabTitleList="['重点用户', '热门话题']" panelClass="height-point">
  <template #1>
    <major-user :list="list" />
  </template>
  </tab-panel>
</template>

<script>
import tabPanel from '@/components/common/tabPanel.vue'
import majorUser from './majorUser.vue'

const avatar = require('../../../assets/images/pic2.jpg')

export default {
  name: 'userOrNews',
  components: {
    tabPanel,
    majorUser
  },
  data () {
    return {
      activeName: '1',
      list: [
        {
          id: '1',
          avatar,
          username: '瓜棚',
          content: 'dmt:Telegram中文本地化文件',
          time: '5月20日',
          tagList: [
            '机器达人',
            '智能极客'
          ],
          group: '@Yixing_groups',
          channel: '@Yixing_News',
          detailList: [
            {
              id: '1',
              avatar,
              username: '@comedyinHampstead',
              code: '0.144567865656578',
              dateTime: 1561953630000,
              content: '在2019年百度AI开发者大会上，李彦宏演讲过程中，突然有人冲上台向其头部倒了一瓶水。随后，李彦宏淡定继续演讲。http://conmedu.com.fnqSDoLPtct'
            },
            {
              id: '2',
              avatar,
              username: '@comedyinHampstead',
              code: '0.144567865656578',
              dateTime: 1561953630000,
              content: '在2019年百度AI开发者大会上，李彦宏演讲过程中，突然有人冲上台向其头部倒了一瓶水。随后，李彦宏淡定继续演讲。http://conmedu.com.fnqSDoLPtct'
            }
          ]
        },
        {
          id: '2',
          avatar,
          username: '瓜棚',
          content: 'dmt:Telegram中文本地化文件',
          time: '5月20日',
          tagList: [
            '机器达人',
            '智能极客'
          ],
          group: '@Yixing_groups',
          channel: '@Yixing_News',
          detailList: [
            {
              id: '1',
              avatar,
              username: '@comedyinHampstead',
              code: '0.144567865656578',
              dateTime: 1561953630000,
              content: '在2019年百度AI开发者大会上，李彦宏演讲过程中，突然有人冲上台向其头部倒了一瓶水。随后，李彦宏淡定继续演讲。http://conmedu.com.fnqSDoLPtct'
            },
            {
              id: '2',
              avatar,
              username: '@comedyinHampstead',
              code: '0.144567865656578',
              dateTime: 1561953630000,
              content: '在2019年百度AI开发者大会上，李彦宏演讲过程中，突然有人冲上台向其头部倒了一瓶水。随后，李彦宏淡定继续演讲。http://conmedu.com.fnqSDoLPtct'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 获取最新群组或重点群组列表
    getRemoteData () {

    },
    // 更新消息订阅
    updateNewsSubscribe (obj) {
      this.$set(this.list[obj.idx], 'isSubscribe', !obj.item.isSubscribe)
      console.log(this.list)
    },
    // 捕获切换消息订阅
    handleNewsChange (obj) {
      this.updateNewsSubscribe(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-panel::v-deep .el-tabs__content {
  overflow: unset;
}
</style>
