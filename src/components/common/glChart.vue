<template>
  <div class="gl-chart" ref="chart"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'

export default {
  name: 'glChart',
  data () {
    return {
      chart: null
    }
  },
  methods: {
    // 渲染图表
    renderChart () {
      // const option = {
      //   backgroundColor: '#000',
      //   globe: {
      //     baseTexture: '/data-gl/world.topo.bathy.200401.jpg',
      //     heightTexture: '/data-gl/world.topo.bathy.200401.jpg',
      //     displacementScale: 0.04,
      //     shading: 'realistic',
      //     environment: '/data-gl/starfield.jpg',
      //     realisticMaterial: {
      //       roughness: 0.9
      //     },
      //     postEffect: {
      //       enable: true
      //     },
      //     light: {
      //       main: {
      //         intensity: 5,
      //         shadow: true
      //       },
      //       ambientCubemap: {
      //         texture: '/data-gl/pisa.hdr',
      //         diffuseIntensity: 0.2
      //       }
      //     }
      //   }
      // }
      let image = new Image()
      image.onload = () => {
        // this.chart.setOption(option);
        image.onload = null
        image = null
      }
      image.src = '/data-gl/world.topo.bathy.200401.jpg'
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    this.renderChart()
  }
}
</script>

<style lang="scss" scoped>
.gl-chart {
  width: 100%;
  height: 100%;
}
</style>
