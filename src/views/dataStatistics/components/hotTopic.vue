<template>
  <tmpl-panel title="热门话题TOP" panelClass="height-topic">
    <base-table :list="hotTopic">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="topic" label="话题"></el-table-column>
      <el-table-column prop="hot" label="热度"></el-table-column>
      <el-table-column prop="value" label="人数"></el-table-column>
    </base-table>
  </tmpl-panel>
</template>

<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseTable from '@/components/common/baseTable.vue'

export default {
  name: 'hotTopic',
  components: {
    tmplPanel,
    baseTable
  },
  data () {
    return {
      hotTopic: []
    }
  },
  methods: {
    mock () {
      this.hotTopic = [
        { topic: '占中', hot: 90, value: 11000 },
        { topic: '反修例', hot: 90, value: 11000 },
        { topic: '绝食', hot: 90, value: 11000 },
        { topic: '罢课', hot: 90, value: 11000 },
        { topic: '占领机场', hot: 90, value: 11000 }
      ]
    }
  },
  created () {
    this.mock()
  }
}
</script>

<style lang="scss" scoped>

</style>
