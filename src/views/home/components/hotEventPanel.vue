<template>
  <tmpl-panel title="热点事件" panelClass="height-two">
    <template>
      <div class="select-item-box clearfix">
        <base-select v-model="reqParams.source" :list="sourceList" placeholder="请选择来源" />
        <base-select v-model="reqParams.dateTime" :list="timeList" placeholder="请选择时间" />
      </div>

      <div class="list-eventbox">
        <ul class="pt10">
          <li v-for="item in hotEvent" :key="item.id">
            <div class="circle-blue">
              <p class="math">{{item.heat}}</p>
              <p class="font12">当前热度</p>
            </div>
            <div class="list-text-box">
              <router-link :to="{ path: '/home', params: { id: item.id }}">
                <p class="text-title one-ellipsis" :title="item.title">{{item.title}}</p>
                <p class="text-info two-ellipsis" :title="item.content">{{item.content}}</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </tmpl-panel>
</template>
<script>
import { mapState } from 'vuex'
import mixin from '../mixin'
import tmplPanel from '@/components/common/tmplPanel.vue'
import baseSelect from '@/components/common/baseSelect.vue'

export default {
  name: 'hotEventPanel',
  components: {
    tmplPanel,
    baseSelect
  },
  props: {
    hotEvent: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      reqParams: {
        source: '',
        dateTime: ''
      }
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList,
      timeList: state => state.timeList
    })
  },
  watch: {
    'reqParams.source' () {
      this.sendRequest()
    },
    'reqParams.dateTime' () {
      this.sendRequest()
    }
  },
  mixins: [mixin],
  methods: {
    // 发送请求
    sendRequest () {
      const params = {
        source: this.reqParams.source,
        ...this.buildTimeObj(this.reqParams.dateTime)
      }
      this.$emit('change', params)
    }
  }
}
</script>
<style lang="scss" scoped>
.select-item-box {
  display: flex;
  justify-content: flex-end;
}

.list-eventbox {
  ul {
    max-height: 480px;
    overflow-y: auto;

    li {
      float: none;
    }
  }
}
</style>
