<template>
  <tmpl-panel class="fleft" panelClass="height-saleregion" title="地区排名">
    <div class="province-rank-item">
      <div class="province-rank-tt">省份排名</div>
      <div class="store-ranking-item" v-for="(item, index) in areaTopData.dart" :key="index">
        <span class="sale-number">{{formatNumber(index + 1)}}</span>
        <div class="store-name" :title="item.label">{{item.label}}</div>
      </div>
    </div>

    <div class="city-rank-item">
      <div class="city-rank-tt">城市排名</div>
      <div class="city-rank-cont" v-for="(item, index) in areaList" :key="index">
        <span class="city-name">{{item.label}}</span>
        <div class="city-progress">
          <div class="progress-percent" :style="{width: item.percent}"></div>
          <!-- <span class="progress-text">{{item.value}}</span> -->
        </div>
      </div>
    </div>
  </tmpl-panel>
</template>

<script>
import _ from 'lodash'
import tmplPanel from '@/components/common/tmplPanel.vue'
import { formatNumber } from '@/utils'

export default {
  name: 'areaRank',
  components: {
    tmplPanel
  },
  props: {
    areaTopData: Object
  },
  computed: {
    areaList () {
      if (_.isEmpty(this.areaTopData.area)) {
        return []
      }

      const value = this.areaTopData.area.map(item => {
        return item.value
      })

      const max = Math.max(...value)

      const arr = this.areaTopData.area.map(item => {
        return { label: item.label, value: item.value, percent: `${item.value / max * 100}%` }
      })
      return arr
    }
  },
  methods: {
    formatNumber
  }
}
</script>

<style lang="scss" scoped>
</style>
