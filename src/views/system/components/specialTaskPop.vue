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
    v-loading="loading"
  >
    <span class="system-pop-dialog-top-left"></span>
    <span class="system-pop-dialog-bottom-right"></span>
    <div class="system-pop">
      <div class="system-pop-header">
        <div class="system-pop-title">添加专项任务</div>
        <a class="system-pop-close" @click="handleCloseClick"></a>
      </div>
      <div class="system-pop-body">
        <el-form class="special-task-form" label-width="80px" label-position="left" size="small">
          <el-form-item>
            <template #label>任务名称&nbsp;<span style="color: #d4000f;">*</span></template>
            <el-input v-model="taskForm.task"></el-input>
          </el-form-item>
          <el-form-item label="子任务名称">
            <el-input v-model="taskForm.childrenTask"></el-input>
          </el-form-item>
          <el-form-item label="情报来源">
            <basic-checkbox
              :selected="taskForm.source"
              :list="sourceList"
              @change="handleSourceChange"
            />
          </el-form-item>
          <el-form-item label="关键词">
            <el-input
              v-model="taskForm.keyword"
              class="special-task-form-inline"
              placeholder="多个关键词以逗号分隔"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <template #label>监控周期&nbsp;<span style="color: #d4000f;">*</span></template>
            <el-date-picker
              class="special-task-form-inline"
              v-model="taskForm.startTime"
              :editable="false"
              :time-arrow-control="true"
              value-format="timestamp"
              type="datetime"
              placeholder="请选择开始时间">
            </el-date-picker>
            <el-date-picker
              class="special-task-form-inline"
              v-model="taskForm.endTime"
              :editable="false"
              :time-arrow-control="true"
              value-format="timestamp"
              type="datetime"
              placeholder="请选择结束时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="标签">
            <baseSelect
              class="special-task-form-inline"
              :selected="taskForm.remark"
              :list="remarkList"
              showDefault
              placeholder="请选择标签"
              @change="handleRemarkChange"
            />
          </el-form-item>

          <div class="special-task-form-block">
            <div class="special-task-form-block-title">报警条件&nbsp;<span style="color: #d4000f;">*</span></div>
            <basic-radio
              :currentPick="taskForm.warning.type"
              :value1="taskForm.warning.value1"
              :value2="taskForm.warning.value2"
              :value3="taskForm.warning.value3"
              @change="handleTypeChange"
              @valueChange="handleValueChange"
            />
          </div>

          <div class="special-task-form-block">
            <div class="special-task-form-block-title">实时消息</div>

            <el-form-item>
              <template #label>接收方式&nbsp;<span style="color: #d4000f;">*</span></template>
              <el-input
                v-model="taskForm.realTime.contact"
                placeholder="请输入手机号或者邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item label="接收时间">
              <el-date-picker
                class="special-task-form-inline"
                v-model="taskForm.realTime.startTime"
                :editable="false"
                :time-arrow-control="true"
                value-format="timestamp"
                type="datetime"
                placeholder="请选择开始时间">
              </el-date-picker>
              <el-date-picker
                class="special-task-form-inline"
                v-model="taskForm.realTime.endTime"
                :editable="false"
                :time-arrow-control="true"
                value-format="timestamp"
                type="datetime"
                placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="system-pop-footer">
        <el-button class="system-pop-button system-pop-add" @click="handleAddClick">{{ isEdit ? '修改' : '添加' }}</el-button>
        <el-button class="system-pop-button system-pop-cancel" @click="handleCloseClick">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import { updateSpecialTask } from '@/api/system'
import baseSelect from '@/components/common/baseSelect'
import basicCheckbox from './basicCheckbox'
import basicRadio from './basicRadio'

export default {
  name: 'specialTaskPop',
  components: {
    basicCheckbox,
    basicRadio,
    baseSelect
  },
  props: {
    showSystemPop: {
      type: Boolean,
      default: false
    },
    remarkList: {
      type: Array,
      default () {
        return []
      }
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: false,
      taskForm: {
        task: '',
        childrenTask: '',
        source: '',
        keyword: '',
        startTime: null,
        endTime: null,
        remark: '',
        warning: {
          type: 1,
          value1: '',
          value2: '',
          value3: ''
        },
        realTime: {
          contact: '',
          startTime: null,
          endTime: null
        }
      }
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList
    }),
    isEdit () {
      return !!this.id
    }
  },
  methods: {
    handleAddClick () {
      if (this.taskForm.task === '') {
        this.$message.error('请填写任务名称')
        return false
      } else if (this.taskForm.startTime === null || this.taskForm.endTime === null) {
        this.$message.error('请选择监控周期')
        return false
      } else if (this.taskForm.warning[`value${this.taskForm.warning.type}`] === '') {
        this.$message.error('请填写报警条件')
        return false
      } else if (new RegExp('[^\\d]').test(this.taskForm.warning[`value${this.taskForm.warning.type}`])) {
        this.$message.error('报警条件的输入格式有误，请输入整数')
        return false
      } else if (this.taskForm.realTime.contact === '') {
        this.$message.error('请填写接收方式')
        return false
      }
      this.updateSpecialTask()
    },
    handleCloseClick () {
      this.$emit('closePop')
    },
    handleSourceChange (val) {
      this.taskForm.source = val
    },
    handleTypeChange (type) {
      this.taskForm.warning.type = type
    },
    handleValueChange (type, val) {
      this.taskForm.warning[`value${type}`] = val
    },
    handleRemarkChange (val) {
      this.taskForm.remark = val
    },

    updateSpecialTask () {
      const data = {
        task: this.taskForm.task,
        childrenTask: this.taskForm.childrenTask,
        source: this.taskForm.source,
        keyword: this.taskForm.keyword.replace(/，/g, ','),
        startTime: this.taskForm.startTime,
        endTime: this.taskForm.endTime,
        remark: Number(this.taskForm.remark),
        warning: {
          type: this.taskForm.warning.type,
          value: this.taskForm.warning[`value${this.taskForm.warning.type}`]
        },
        realTime: {
          contact: this.taskForm.realTime.contact,
          startTime: this.taskForm.realTime.startTime,
          endTime: this.taskForm.realTime.endTime
        }
      }
      if (this.id) {
        data.id = this.id
      }
      this.loading = true
      updateSpecialTask(data).then(res => {
        if (res.data.code === 0) {
          if (this.id) {
            this.$message.success('更新成功')
          } else {
            this.$message.success('添加成功')
          }
          this.$emit('success')
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    setFormData (data) {
      this.taskForm = data
    },
    formReset () {
      this.taskForm = {
        task: '',
        childrenTask: '',
        source: '',
        keyword: '',
        startTime: null,
        endTime: null,
        minute: 0,
        remark: '',
        warning: {
          type: 1,
          value1: '',
          value2: '',
          value3: ''
        },
        realTime: {
          contact: '',
          startTime: null,
          endTime: null
        }
      }
    }
  }
}
</script>

<style lang="scss">
.special-task-form {
  .el-form-item {
    margin-bottom: 10px;
  }

  .el-form-item__label {
    padding: 0 10px 0 0;
    font-size: 14px;
    color: #fff;
  }

  .el-input {
    .el-input__inner {
      border: 1px solid #1c6bab;
      background-color: #0f3867;
      color: #fff;
      border-radius: 3px;
    }

    &:not(.el-input--prefix),
    &:not(.el-input--suffix) {
      .el-input__inner {
        padding: 0 10px;
      }
    }
  }

  .el-input-number {
    position: relative;

    &:nth-of-type(1)::after,
    &:nth-of-type(2)::after {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 43px;
      height: 100%;
      color: #fff;
    }

    &:nth-of-type(1)::after {
      content: '小时';
    }

    &:nth-of-type(2)::after {
      content: '分钟';
    }

    .el-input-number__decrease,
    .el-input-number__increase {
      border-left: 1px solid #46c7ea;
      background-color: transparent;
      color: #46c7ea;
    }

    .el-input-number__decrease {
      border-radius: 0 0 3px;

      .el-icon-arrow-down {

      }
    }

    .el-input-number__increase {
      border-radius: 0 3px 0 0;
      border-bottom: 1px solid #46c7ea;

      .el-icon-arrow-up {

      }
    }

    .el-input__inner {
      padding: 0 80px 0 10px !important;
      text-align: left;
    }

    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
    .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
      border-color: #1c6bab;
    }
  }
}

.special-task-form-inline {
  display: inline-block;
  width: calc((100% - 30px) / 2) !important;
}

.special-task-form-inline + .special-task-form-inline {
  margin-left: 30px;
}

.special-task-form-block {
  margin-top: 30px;
  border-top: 1px dashed #0f3867;
}

.special-task-form-block-title {
  padding: 10px 0 5px;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
}
</style>
