<template>
  <div class="word-globe" ref="globe" @mouseover="handleMouseover" @mouseout="handleMouseout" @mousemove="handleMousemove">
    <div class="keyword" v-for="(item, index) in list" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'wordGlobe',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isRender: false,
      id: '',
      radius: 100,
      dtr: Math.PI / 180,
      d: 300,

      active: false,
      lasta: 1,
      lastb: 1,
      tspeed: 5,
      size: 250,

      mouseX: 0,
      mouseY: 0,

      howElliptical: 1,

      globe: null,
      globeChildren: null,
      globeChildrenProp: []
    }
  },
  watch: {
    list (val) {
      this.$nextTick(() => {
        if (val && val.length > 0 && !this.isRender) {
          this.isRender = true
          this.pageInit()
        }
      })
    }
  },
  methods: {
    handleMouseover () {
      this.active = true
    },
    handleMouseout () {
      this.active = false
    },
    handleMousemove (e) {
      // console.log(e);
      this.mouseX = e.clientX - ($(this.globe).offset().left + $(this.globe).width() / 2)
      this.mouseY = e.clientY - ($(this.globe).offset().top + $(this.globe).height() / 2)

      this.mouseX /= 5
      this.mouseY /= 5
    },
    pageInit () {
      this.globe = this.$refs.globe

      this.globeChildren = $(this.globe).children()

      for (let i = 0; i < this.globeChildren.length; i++) {
        this.globeChildrenProp.push({
          width: $(this.globeChildren[i]).width(),
          height: $(this.globeChildren[i]).height()
        })
      }

      this.positionAll()

      this.id = setInterval(this.update, 30)
    },
    update () {
      let a = 0
      let b = 0

      if (this.active) {
        a = (-Math.min(Math.max(-this.mouseY, -this.size), this.size) / this.radius) * this.tspeed
        b = (Math.min(Math.max(-this.mouseX, -this.size), this.size) / this.radius) * this.tspeed
      } else {
        a = this.lasta * 0.98
        b = this.lastb * 0.98
      }

      this.lasta = a
      this.lastb = b

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return
      }

      const c = 0

      const obj = this.sineCosine(a, b, c)

      for (let i = 0; i < this.globeChildrenProp.length; i++) {
        const rx1 = this.globeChildrenProp[i].cx
        const ry1 = this.globeChildrenProp[i].cy * obj.ca + this.globeChildrenProp[i].cz * (-obj.sa)
        const rz1 = this.globeChildrenProp[i].cy * obj.sa + this.globeChildrenProp[i].cz * obj.ca

        const rx2 = rx1 * obj.cb + rz1 * obj.sb
        const ry2 = ry1
        const rz2 = rx1 * (-obj.sb) + rz1 * obj.cb

        const rx3 = rx2 * obj.cc + ry2 * (-obj.sc)
        const ry3 = rx2 * obj.sc + ry2 * obj.cc
        const rz3 = rz2

        const per = this.d / (this.d + rz3)

        const prop = {
          cx: rx3,
          cy: ry3,
          cz: rz3,
          x: (this.howElliptical * rx3 * per) - (this.howElliptical * 2),
          y: ry3 * per,
          scale: per,
          alpha: (per - 0.6) * (10 / 6)
        }
        this.$set(this.globeChildrenProp, i, Object.assign({}, this.globeChildrenProp[i], prop))
      }

      this.doPosition()
      this.depthSort()
    },
    depthSort () {
      const arr = []
      for (let i = 0; i < this.globeChildren.length; i++) {
        arr.push({ el: this.globeChildren[i], cz: this.globeChildrenProp[i].cz })
      }

      arr.sort((a, b) => {
        if (a.cz > b.cz) {
          return -1
        } else if (a.cz < b.cz) {
          return 1
        } else {
          return 0
        }
      })

      for (let i = 0; i < arr.length; i++) {
        $(arr[i].el).css('zIndex', i)
      }
    },
    positionAll () {
      let theta = 0 // θ
      let phi = 0 // φ
      const max = this.globeChildrenProp.length

      const arr = [...this.globeChildren]
      const fragment = document.createDocumentFragment()

      arr.sort(() => {
        return Math.random() < 0.5 ? 1 : -1
      })

      for (let i = 0; i < arr.length; i++) {
        $(fragment).append(arr[i])
      }

      $(this.globe).append(fragment)

      for (let i = 1; i < max + 1; i++) {
        phi = Math.acos(-1 + (2 * i - 1) / max)
        theta = Math.sqrt(max * Math.PI) * phi

        // 坐标变换
        const obj = {
          cx: this.radius * Math.cos(theta) * Math.sin(phi),
          cy: this.radius * Math.sin(theta) * Math.sin(phi),
          cz: this.radius * Math.cos(phi)
        }

        this.$set(this.globeChildrenProp, i - 1, Object.assign({}, this.globeChildrenProp[i - 1], obj))

        const left = this.globeChildrenProp[i - 1].cx + $(this.globe).width() / 2 - this.globeChildrenProp[i - 1].width / 2 + 'px'
        const top = this.globeChildrenProp[i - 1].cy + $(this.globe).height() / 2 - this.globeChildrenProp[i - 1].height / 2 + 'px'
        $(this.globeChildren[i - 1]).css({ left, top })
      }
    },
    doPosition () {
      const l = $(this.globe).width() / 2
      const t = $(this.globe).height() / 2
      for (let i = 0; i < this.globeChildrenProp.length; i++) {
        $(this.globeChildren[i]).css({
          left: this.globeChildrenProp[i].cx + l - this.globeChildrenProp[i].width / 2 + 'px',
          top: this.globeChildrenProp[i].cy + t - this.globeChildrenProp[i].height / 2 + 'px',
          fontSize: Math.ceil(12 * this.globeChildrenProp[i].scale / 2) + 8 + 'px',
          filter: 'alpha(opacity=' + 100 * this.globeChildrenProp[i].alpha + ')',
          opacity: this.globeChildrenProp[i].alpha
        })
      }
    },
    sineCosine (a, b, c) {
      return {
        sa: Math.sin(a * this.dtr),
        ca: Math.cos(a * this.dtr),
        sb: Math.sin(b * this.dtr),
        cb: Math.cos(b * this.dtr),
        sc: Math.sin(c * this.dtr),
        cc: Math.cos(c * this.dtr)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.word-globe {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  user-select: none;
  .keyword {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 3px 6px;
    color: #fff;
    font-weight: bold;
    cursor: default;
  }
  .keyword:hover {
    border: 1px solid #eee;
    background: #000;
    border-radius: 5px;
  }
}
</style>
