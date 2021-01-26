<template>
  <tmpl-panel title="黑地址分布" panelClass="height-black-address">
    <baseTable :list="darkAddressSourceList" tableHeight="220px">
      <el-table-column align="center" prop="currency" label="币种"></el-table-column>
      <el-table-column align="center" min-width="300px" prop="address" label="地址"></el-table-column>
      <el-table-column align="center" prop="feature" label="事件"></el-table-column>
    </baseTable>
  </tmpl-panel>
</template>
<script>
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseTable from '@/components/common/baseTable.vue'

export default {
  name: 'darkAddressSource',
  components: {
    tmplPanel,
    baseTable
  },
  props: {
    darkAddressSourceList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
.height-black-address {
  height: 280px;
}
</style>
