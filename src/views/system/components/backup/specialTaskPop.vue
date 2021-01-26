<template>
  <el-dialog
    :visible="showSystemPop"
    custom-class="system-pop"
    width="920px"
    :lock-scroll="false"
    append-to-body
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    destroy-on-close
  >
    <div class="pop-container">
      <span class="pop-left-arrow"></span>
      <span class="pop-bootm-arrow"></span>
      <div class="pop-content">
        <!--//title=start//-->
        <div class="pop-title">
          <h3>添加专项任务</h3>
          <a title="关闭" class="pop-close fright" @click="handleCloseClick"></a>
        </div>
        <!--//title=end//-->

        <!--//content=start//-->
        <div class="pop-mainbox">
          <div class="pop-inline-width">
            <span class="inline-textl second">
              任务名称&nbsp;
              <i class="red">*</i>
            </span>
            <input type="text" v-model="taskForm.name" class="common-input width758" />
          </div>

          <div class="pop-inline-width">
            <span class="inline-textl second">子任务名称</span>
            <div class="number-input-box width758">
              <input type="text" value placeholder class="number-input" />
              <div class="number-controls">
                <span class="number-increase">+</span>
                <span class="number-decrease">-</span>
              </div>
            </div>
          </div>

          <div class="pop-inline-width">
            <span class="inline-textl second">情报来源</span>
            <div class="pop-label-box">
              <div class="label-checkbox-list">
                <label class="checkbox-box checked">
                  <span class="checkbox-lable">
                    <input type="checkbox" class="checkbox-input" />
                  </span>
                  <span class="label-text white">暗网</span>
                </label>
              </div>

              <div class="label-checkbox-list">
                <label class="checkbox-box">
                  <span class="checkbox-lable">
                    <input type="checkbox" class="checkbox-input" />
                  </span>
                  <span class="label-text white">深网</span>
                </label>
              </div>

              <div class="label-checkbox-list">
                <label class="checkbox-box">
                  <span class="checkbox-lable">
                    <input type="checkbox" class="checkbox-input" />
                  </span>
                  <span class="label-text white">区块链</span>
                </label>
              </div>

              <div class="label-checkbox-list">
                <label class="checkbox-box">
                  <span class="checkbox-lable">
                    <input type="checkbox" class="checkbox-input" />
                  </span>
                  <span class="label-text white">特种通信工具</span>
                </label>
              </div>
            </div>
          </div>

          <div class="pop-inline-width">
            <span class="inline-textl second">关键词</span>
            <select class="select-common width364 fright">
              <option>请选择关键词</option>
            </select>
          </div>

          <div class="pop-inline-width">
            <span class="inline-textl second">
              监控周期&nbsp;
              <i class="red">*</i>
            </span>
            <div class="fleft">
              <div class="number-input-box">
                <input type="text" value placeholder class="number-input" />
                <div class="number-controls">
                  <span class="number-increase">+</span>
                  <span class="number-decrease">-</span>
                </div>
                <span class="fright">小时</span>
              </div>

              <div class="number-input-box ml30">
                <input type="text" value placeholder class="number-input" />
                <div class="number-controls">
                  <span class="number-increase">+</span>
                  <span class="number-decrease">-</span>
                </div>
                <span class="fright">分钟</span>
              </div>
            </div>
          </div>

          <div class="pop-inline-width">
            <span class="inline-textl second">标签</span>
            <select class="select-common width364 fright">
              <option>请选择标签</option>
            </select>
          </div>

          <!--报警条件-->
          <p class="pop-blue-title dash-blue-line">
            报警条件&nbsp;
            <i class="red">*</i>
          </p>
          <div class="pop-inline-width">
            <div class="radio-pop-width">
              <label class="radio-box checked">
                <span class="radio-lable">
                  <input type="radio" class="radio-input" />
                </span>
                <span class="label-text white">数量较上监控周期增长的百分比</span>
              </label>
            </div>
            <div class="date-input-box unit ml30">
              <input type="text" class="number-input" value placeholder=">=" />
              <span class="unit-text fright">%</span>
            </div>
          </div>

          <div class="pop-inline-width">
            <div class="radio-pop-width">
              <label class="radio-box">
                <span class="radio-lable">
                  <input type="radio" class="radio-input" />
                </span>
                <span class="label-text white">数量较上监控周期增长的条数</span>
              </label>
            </div>
            <div class="date-input-box unit ml30 disabled">
              <input type="text" class="number-input" value placeholder=">=" disabled="disabled" />
              <span class="unit-text fright">条</span>
            </div>
          </div>

          <div class="pop-inline-width">
            <div class="radio-pop-width">
              <label class="radio-box">
                <span class="radio-lable">
                  <input type="radio" class="radio-input" />
                </span>
                <span class="label-text white">数量较上监控周期内达到的条数</span>
              </label>
            </div>
            <div class="date-input-box unit ml30 disabled">
              <input type="text" class="number-input" value placeholder=">=" disabled="disabled" />
              <span class="unit-text fright">条</span>
            </div>
          </div>

          <!--实时消息-->
          <p class="pop-blue-title dash-blue-line">实时消息</p>
          <div class="pop-inline-width">
            <span class="inline-textl second">
              接收方式&nbsp;
              <i class="red">*</i>
            </span>
            <div class="fleft">
              <input type="text" value placeholder="请输入手机号或者邮箱" class="common-input width758" />
            </div>
          </div>
          <div class="pop-inline-width">
            <span class="inline-textl second">接收时间</span>
            <div class="fleft">
              <div class="date-input-box">
                <input type="text" class="number-input" value placeholder="请选择开始时间" />
                <span class="input-date-icon fright"></span>
              </div>
              <div class="date-input-box ml30">
                <input type="text" class="number-input" value placeholder="请选择结束时间" />
                <span class="input-date-icon fright"></span>
              </div>
            </div>
          </div>
        </div>
        <!--//content=end//-->

        <!--//button=start//-->
        <div class="button-width-box pop-button-box">
          <button class="light-blue-btn" @click="handleAddClick">添加</button>
          <button class="default-blue-btn" @click="handleCloseClick">取消</button>
        </div>
        <!--//button=end//-->
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'specialTaskPop',
  props: {
    showSystemPop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      taskForm: {
        name
      }
    }
  },
  computed: {
    ...mapState({
      taskDetail: state => state.special.taskDetail,
      keywordList: state => state.special.keywordList,
      remarkList: state => state.special.remarkList
    })
  },
  methods: {
    handleAddClick () {
      this.handleCloseClick()
    },
    handleCloseClick () {
      this.$emit('closePop')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
