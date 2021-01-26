<template>
  <div class="baidu-map" ref="map"></div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_LOAD_API_FINISH } from '@/store/mutation-types.js'
const { mapState, mapMutations } = createNamespacedHelpers('ipAddress')

export default {
  name: 'baiduMap',
  props: {
    point: {
      type: Object
    }
  },
  data () {
    return {
      ak: 'numWbelsEG2aQgLuXvXFnkGy2cDrW7ou'
    }
  },
  computed: {
    ...mapState(['loadAPIFinish'])
  },
  watch: {
    loadAPIFinish (val) {
      // console.log(val)
      if (this.loadAPIFinish && this.point) {
        this.renderMap(this.point)
      }
    },
    point (val) {
      // console.log(val)
      if (this.loadAPIFinish && this.point) {
        this.renderMap(this.point)
      }
    }
  },
  methods: {
    ...mapMutations([CHANGE_LOAD_API_FINISH]),
    // 加载百度地图API
    loadBaiduMapAPI () {
      const script = document.createElement('script')
      window.BMap_loadScriptTime = Date.now()
      script.onload = () => {
        this[CHANGE_LOAD_API_FINISH](true)
      }
      script.type = 'text/javascript'
      script.src = 'http://api.map.baidu.com/getscript?v=3.0&ak=' + this.ak
      document.body.appendChild(script)
    },
    // 坐标转换
    convertorFn (point) {
      const convertor = new window.BMap.Convertor()
      const pointArr = [point]
      return new Promise((resolve, reject) => {
        convertor.translate(pointArr, 1, 5, (data) => {
          if (data.status === 0) {
            resolve(data.points[0])
          } else {
            reject(new Error('转换失败'))
          }
        })
      })
    },
    // 渲染地图
    renderMap (obj) {
      // console.log(obj)
      const map = new window.BMap.Map(this.$refs.map)
      let point = new window.BMap.Point(obj.longitude, obj.latitude)
      this.convertorFn(point).then(res => {
        point = res
        map.centerAndZoom(point, 1)
        map.enableScrollWheelZoom(true)
        map.addControl(new window.BMap.ScaleControl())
        const marker = new window.BMap.Marker(point)
        map.addOverlay(marker)
      }).catch(err => {
        console.error(err)
        map.centerAndZoom(point, 1)
        map.enableScrollWheelZoom(true)
        map.addControl(new window.BMap.ScaleControl())
        const marker = new window.BMap.Marker(point)
        map.addOverlay(marker)
      })
    }
  },
  mounted () {
    if (!this.loadAPIFinish) {
      this.loadBaiduMapAPI()
    }
  }
}
</script>

<style lang="scss" scoped>
.baidu-map {
  width: 100%;
  height: 100%;
}
</style>
