<template>
  <div class="map-chart" ref="chart"></div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import mapList from '@/utils/mapList'
import nameMap from '@/utils/nameMap'

const image = require('../../assets/images/arrow-left.png')

export default {
  name: 'mapChart',
  props: {
    mapData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 单击事件延迟id
      id: '',
      chart: '',
      // 是否在全国地图
      isRoot: true
    }
  },
  watch: {
    mapData () {
      this.mapInit()
    }
  },
  methods: {
    // 获取地图地址
    getUrl (province) {
      if (province) {
        return `map/province/${province}.json`
      }
      return 'map/china.json'
    },
    // 通过province获取mapName
    getMapNameByProvince (province) {
      const mapObj = mapList.find(item => item.province === province)
      if (!mapObj) {
        this.$message.error('无法获取地图')
        return mapObj
      }
      return mapObj.mapName
    },
    // 加载地图
    loadMap (url) {
      return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
          resolve(res.data)
        }).catch(() => {
          reject(new Error('地图资源加载失败'))
        })
      })
    },
    // 注册地图
    registerMap (url) {
      return new Promise((resolve, reject) => {
        let mapName = url.match(/([^/]+).json$/)
        if (mapName) {
          mapName = mapName[1]
        } else {
          reject(new Error('地图路径解析错误'))
        }

        if (echarts.getMap(mapName)) {
          resolve(mapName)
        } else {
          this.loadMap(url).then(res => {
            echarts.registerMap(mapName, res)
            resolve(mapName)
          }).catch(err => reject(err))
        }
      })
    },
    // 渲染地图
    render (url, option) {
      this.chart.showLoading()
      this.registerMap(url).then(mapName => {
        if (option) {
          this.chart.setOption({
            toolbox: {
              show: true,
              feature: {
                myTool: {
                  show: true,
                  title: '返回全国',
                  icon: `image://${image}`,
                  onclick: () => {
                    this.mapInit()
                  }
                }
              }
            },
            ...option
          })
        } else {
          this.chart.setOption({
            tooltip: {
              trigger: 'item'
            },
            toolbox: {
              show: false
            },
            visualMap: {
              min: 800,
              max: 50000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                name: '情报高发地',
                type: 'map',
                map: mapName,
                label: {
                  show: true
                },
                data: this.mapData
              }
            ],
            nameMap
          })
        }
      }).catch(err => {
        this.$message.error(err)
      }).finally(() => {
        this.chart.hideLoading()
      })
    },
    // 单击
    onClick (params) {
      clearTimeout(this.id)
      this.id = setTimeout(() => {
        this.$emit('click', params.name)
      }, 500)
    },
    // 双击
    onDblclick (params) {
      clearTimeout(this.id)
      if (params.name === '南海诸岛') {
        return
      }
      if (!this.isRoot) {
        return
      }
      this.isRoot = false
      const mapName = this.getMapNameByProvince(params.name)
      if (!mapName) {
        return
      }
      this.render(this.getUrl(mapName), {
        series: [
          {
            type: 'map',
            map: mapName,
            label: {
              show: false
            }
          }
        ]
      })
    },
    // 地图初始化
    mapInit () {
      this.isRoot = true
      this.render(this.getUrl())
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    this.chart.on('dblclick', this.onDblclick)
    this.chart.on('click', this.onClick)
    this.mapInit()
  }
}
</script>

<style lang="scss" scoped>
.map-chart {
  width: 100%;
  height: 100%;
}
</style>
