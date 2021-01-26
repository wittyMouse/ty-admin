<template>
  <tmpl-panel title="暗网内容分布" panelClass="web-catelogebox">
    <template>
      <div class="chart-item-box">
        <line-chart :kind="2" :source="source" />
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import _ from 'lodash'
import moment from 'moment'
import tmplPanel from '@/components/common/tmplPanel.vue'
import lineChart from '@/components/common/lineChart.vue'

export default {
  name: 'contentPanel',
  components: {
    tmplPanel,
    lineChart
  },
  props: {
    contentSource: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    source () {
      if (_.isEmpty(this.contentSource)) {
        return []
      }
      // 对象的key即一项内容的名称
      const keys = Object.keys(this.contentSource)
      const contentSource = {}
      let temp = []

      keys.forEach(key => {
        const obj = {}
        this.contentSource[key].forEach(item => {
          const entries = Object.entries(item)
          obj[entries[0][0]] = entries[0][1]
        })

        // 保存所有内容内部的key
        temp = temp.concat(Object.keys(obj))

        // 由于一项内容中的key不会重复，将对象数组合并到一个对象中，根据原来的结构存储
        contentSource[key] = obj
      })

      // 去重
      temp = [...new Set(temp)]

      // 排序
      temp.sort((a, b) => {
        if (moment(a).isAfter(b)) {
          return 1
        }
        return -1
      })

      // 最终结构
      const arr = [
        ['produce', ...keys]
      ]

      // 循环所有key
      temp.forEach(item => {
        // 先将key存储到数组中
        const array = [item]

        // 将各项内容的value依次存入数组中
        keys.forEach((key, index) => {
          if (contentSource[key][item] > -1) {
            array.push(contentSource[key][item])
          } else {
            array.push('')
          }
        })

        // 推入最总结构
        arr.push(array)
      })

      return arr
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-item-box {
  height: 250px;
}
</style>
