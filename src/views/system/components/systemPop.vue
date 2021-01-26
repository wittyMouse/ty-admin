<template>
  <el-dialog
    :visible="showSystemPop"
    custom-class="system-pop-dialog"
    width="920px"
    :lock-scroll="false"
    append-to-body
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    destroy-on-close
    v-loading="loading"
  >
    <span class="system-pop-dialog-top-left"></span>
    <span class="system-pop-dialog-bottom-right"></span>
    <div class="system-pop">
      <div class="system-pop-header">
        <div class="system-pop-title">添加任务</div>
        <a class="system-pop-close" @click="handleCloseClick"></a>
      </div>
      <div class="system-pop-body">

        <div class="pop-inline-width margin-bottom10">
          <div class="pop-half-wid">
            <span class="inline-textl">任务名称</span>
            <input type="text" value="" class="common-input width320" />
          </div>
          <div class="pop-half-wid">
            <span class="inline-textl margin-left30">来源类型</span>
            <select class="select-common width320 fright">
              <option>示例</option>
            </select>
          </div>
        </div>

        <!--选项卡标题=start-->
        <div class="bar-tab-item clear">
          <ul class="bar-tab-list">
            <li class="current">基本设置</li>
            <li>采集网址</li>
            <li>采集规则</li>
          </ul>
        </div>
        <!--选项卡标题=end-->

        <div class="pop-tab-box">
          <!--基本设置=start-->
          <div class="pop-tab-width">
            <!--基本信息-->
            <p class="pop-blue-title">基本信息</p>
            <div class="pop-inline-width">
              <span class="inline-textl second">任务备注</span>
              <textarea name rows cols class="common-textarea"></textarea>
            </div>

            <div class="pop-inline-width">
              <span class="inline-textl second">
                采集临时数
                <br />据保存地址
              </span>
              <div class="fleft">
                <input
                  type="text"
                  value="C:\Program Files\Rivet Networks"
                  class="common-input width640"
                />
                <button class="file-btn fleft ml12">浏览</button>
                <p class="red">只有在选择“直接入库”时，系统才不会自动保存临时数据。通常情况下，不建议非专业用户修改地址。</p>
              </div>
            </div>

            <!--任务类型-->
            <p class="pop-blue-title dash-blue-line">任务类型</p>
            <div class="pop-inline-width">
              <span class="inline-textl second">执行类型</span>
              <select class="select-common width320">
                <option>仅采集数据</option>
              </select>
            </div>
            <div class="pop-inline-width">
              <span class="inline-textl second">任务类型</span>
              <select class="select-common width320">
                <option>根据网址采集网页数据</option>
              </select>
            </div>

            <!--采集设置-->
            <p class="pop-blue-title dash-blue-line">采集设置</p>
            <div class="pop-inline-width">
              <span class="inline-textl second">Cookie</span>
              <div class="fleft">
                <input
                  type="text"
                  value="C:\Program Files\Rivet Networks"
                  class="common-input width640"
                />
                <button class="file-btn fleft ml12">获取</button>

                <p class="white clear pt10 pb10">
                  <label>
                    <input type="checkbox" class="checkbox-type" />
                  </label>需要人工登录，登录地址
                </p>

                <input type="text" value placeholder class="common-input width730" />
              </div>
            </div>
          </div>
          <!--基本设置=end-->

          <!--采集网址=start-->
          <div class="pop-tab-width" style="display: none;"></div>
          <!--采集网址=end-->

          <!--采集规则=start-->
          <div class="pop-tab-width" style="display: none;"></div>
          <!--采集规则=end-->
        </div>

      </div>
      <div class="system-pop-footer">
        <el-button class="system-pop-button system-pop-add" @click="handleAddClick">添加</el-button>
        <el-button class="system-pop-button system-pop-cancel" @click="handleCloseClick">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: 'systemPop',
  props: {
    showSystemPop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      taskForm: {

      }
    }
  },
  computed: {
  },
  methods: {
    handleAddClick () {
      this.handleCloseClick()
    },
    handleCloseClick () {
      this.$emit('closePop')
    },
    setFormData (data) {
      this.taskForm = data
    },
    formReset () {
      this.taskForm = {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
