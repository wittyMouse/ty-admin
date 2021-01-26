<template>
  <div>
    <tab-panel
      :list="tabList"
      :currentTab.sync="currentTab"
      :tabName.sync="tabName"
      @addTab="handleAddTab"
      @closeTab="handleCloseTab"
    >
      <div class="table-headsearch text-right">
        <!-- <label class="fleft margin-left10">
          <input type="checkbox" class="checkbox-type" />全选
        </label> -->
        <div class="fright headtable-right">
          <button class="default-blue-smallbtn" @click="handleAddTask">添加任务</button>
          <button class="default-blue-smallbtn" @click="handleDeleteTask">删除</button>
        </div>
      </div>
      <!--表头=end-->

      <base-table :list="taskList">
        <el-table-column prop="name" width="38">
          <template slot="header">
            <input type="checkbox" class="checkbox-type" :checked="isAllCheck" @change="handleAllCheck($event.target.checked)" />
          </template>
          <template slot-scope="scope">
            <input type="checkbox" class="checkbox-type" :checked="checkList.includes(scope.row.id)" @change="handleCheck($event.target.checked, scope.row.id)" />
          </template>
        </el-table-column>
        <el-table-column prop="task" label="专项任务"></el-table-column>
        <el-table-column prop="childrenTask" label="子任务"></el-table-column>
        <el-table-column prop="rule" label="标签规则"></el-table-column>
        <el-table-column prop="time" label="监控时间"></el-table-column>
        <el-table-column prop="source" label="源站类型"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="table-icons-box">
              <a title="编辑" class="s-edit-icon" @click="handleIconClick(0, scope.$index)"></a>
              <a title="删除" class="s-delete-icon" @click="handleIconClick(1, scope.$index)"></a>
            </div>
          </template>
        </el-table-column>
      </base-table>

      <base-pagination class="pagenation-box clearfix" :currentPage="pageData.currentPage" :pageSize="pageData.pageSize" :total="pageData.total" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
    </tab-panel>

    <special-task-pop
      ref="pop"
      :showSystemPop="showSystemPop"
      :remarkList="tabList"
      :id="taskId"
      @closePop="handleClosePop"
      @success="handleUpdateSuccess"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import * as api from '@/api/system'
import baseTable from '@/components/common/baseTable.vue'
import basePagination from '@/components/common/basePagination.vue'
import tabPanel from './components/tabPanel.vue'
import specialTaskPop from './components/specialTaskPop.vue'

export default {
  name: 'specialTask',
  components: {
    tabPanel,
    baseTable,
    basePagination,
    specialTaskPop
  },
  data () {
    return {
      // 当前分类
      currentTab: 0,
      // 分类列表
      tabList: [],
      // 分类名称输入框
      tabName: '',
      // 分页参数
      pageData: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      // 任务列表
      taskList: [],
      // 任务详情弹窗显示状态
      showSystemPop: false,
      // 是否全选任务
      isAllCheck: false,
      // 选中任务列表
      checkList: [],
      // 任务id
      taskId: ''
      // 标签列表
      // remarkList: []
    }
  },
  watch: {
    // 监测tab切换
    currentTab () {
      this.pageData.currentPage = 1
      this.pageData.pageSize = 10
      this.getSpecialTaskList()
    }
  },
  methods: {
    // 添加tab
    handleAddTab () {
      if (this.tabName === '') {
        this.$message.error('请先输入分类名称')
        return
      }

      if (this.tabList.findIndex(item => item.name === this.tabName) > -1) {
        this.$message.error('请勿添加相同分类')
        return
      }

      this.addSpecialClassify(this.tabName)
    },
    // 关闭tab(删除分类)
    handleCloseTab (id) {
      this.$confirm('确定要删除分类吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteSpecialClassify(id.toString())
      }).catch(() => {})
    },
    // 添加任务
    handleAddTask () {
      this.showSystemPop = true
    },
    // 关闭任务详情
    handleClosePop () {
      this.showSystemPop = false
      this.taskId = ''
      this.$refs.pop.formReset()
    },
    // 批量删除任务
    handleDeleteTask () {
      if (this.checkList.length === 0) {
        this.$message.error('请先选择删除项')
        return
      }

      const ids = this.checkList.join(',')
      this.deleteTask(ids)
    },
    // 删除任务逻辑
    deleteTask (ids) {
      this.$confirm('确定要删除任务吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteSpecialTask(ids)
      }).catch(() => {})
    },
    // 全选/全取消
    handleAllCheck (checked) {
      this.isAllCheck = checked
      if (checked) {
        const arr = []
        this.taskList.map(item => {
          arr.push(item.id)
        })
        this.checkList = arr
      } else {
        this.checkList = []
      }
    },
    // 选中/取消
    handleCheck (checked, id) {
      if (checked) {
        if (!this.checkList.includes(id)) {
          this.checkList.push(id)
        }
        if (this.checkList.length === this.taskList.length) {
          let isAllCheck = true
          for (let i = 0; i < this.taskList.length; i++) {
            if (!this.checkList.includes(this.taskList[i].id)) {
              isAllCheck = false
              break
            }
          }
          if (isAllCheck) {
            this.isAllCheck = true
          }
        }
      } else {
        if (this.isAllCheck) {
          this.isAllCheck = false
        }
        this.checkList = this.checkList.filter(item => {
          return item !== id
        })
      }
    },
    // 表格操作功能事件
    handleIconClick (target, idx) {
      switch (target) {
        case 0:
          // 编辑
          this.handleEdit(this.taskList[idx].id.toString())
          break
        case 1:
          // 删除
          this.deleteTask(this.taskList[idx].id.toString())
          break
        default:
          break
      }
    },
    // 编辑
    handleEdit (id) {
      this.getSpecialTaskDetail(id, (obj) => {
        this.taskId = obj.id
        this.$refs.pop.setFormData({
          task: obj.task,
          childrenTask: obj.childrenTask,
          source: obj.source,
          keyword: obj.keyword,
          startTime: obj.startTime,
          endTime: obj.endTime,
          remark: obj.remark || '',
          warning: {
            type: obj.warning.type,
            value1: '',
            value2: '',
            value3: '',
            [`value${obj.warning.type}`]: obj.warning.value
          },
          realTime: {
            contact: obj.realTime.contact,
            startTime: obj.realTime.startTime,
            endTime: obj.realTime.endTime
          }
        })
        this.showSystemPop = true
      })
    },
    // 当前页切换
    handleCurrentChange (page) {
      this.pageData.currentPage = page
      this.getSpecialTaskList()
    },
    // 每页条数切换
    handleSizeChange (size) {
      this.pageData.pageSize = size
      this.getSpecialTaskList()
    },
    // 查询分类列表
    getSpecialClassifyList () {
      this.loading = true
      api.getSpecialClassifyList().then(res => {
        if (res.data.code === 0) {
          this.tabList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 添加分类
    addSpecialClassify (name) {
      this.loading = true
      api.addSpecialClassify({ name }).then(res => {
        if (res.data.code === 0) {
          this.tabName = ''
          this.$message.success('添加分类成功')
          this.getSpecialClassifyList()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 删除分类
    deleteSpecialClassify (ids) {
      this.loading = true
      api.deleteSpecialClassify({ ids }).then(res => {
        if (res.data.code === 0) {
          this.$message.success('删除分类成功')
          this.currentTab = 0
          this.getSpecialClassifyList()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 查询任务列表
    getSpecialTaskList () {
      this.loading = true
      const data = {
        id: this.currentTab,
        pageIndex: this.pageData.currentPage,
        pageCount: this.pageData.pageSize
      }
      api.getSpecialTaskList(data).then(res => {
        if (res.data.code === 0) {
          this.taskList = res.data.data.taskList
          this.pageData.total = res.data.data.totalCount
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 查询任务详情
    getSpecialTaskDetail (taskId, cb) {
      this.loading = true
      const data = {
        id: taskId
      }
      api.getSpecialTaskDetail(data).then(res => {
        if (res.data.code === 0) {
          cb && cb(res.data.data)
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 删除任务
    deleteSpecialTask (ids) {
      this.loading = true
      api.deleteSpecialTask({ ids }).then(res => {
        if (res.data.code === 0) {
          this.$message.success('删除任务成功')
          this.pageData.currentPage = 1
          this.pageData.pageSize = 10
          this.getSpecialTaskList()
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 获取标签列表
    // getSpecialRemarkList () {
    //   api.getSpecialRemarkList().then(res => {
    //     if (res.data.code === 0) {
    //       this.remarkList = res.data.data
    //     }
    //   })
    // },
    handleUpdateSuccess () {
      this.pageData.currentPage = 1
      this.pageData.pageSize = 10
      this.getSpecialTaskList()
      this.handleClosePop()
    }
  },
  mounted () {
    this.getSpecialClassifyList()
    this.getSpecialTaskList()
    // this.getSpecialRemarkList()
  }
}
</script>
<style lang="scss" scoped>
</style>
