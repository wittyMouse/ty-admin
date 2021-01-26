<template>
  <div class="photo-scroll-list">
    <a class="left-scroll-arrow" @click="handleLeftClick">&lt;</a>
    <div class="photo-list-box">
      <ul>
        <li :class="{current:index===currentPerson}" v-for="(item, index) in list" :key="item.id" @click="handlePersonChange(index)">
          <a>
            <img :src="item.src" />
          </a>
        </li>
      </ul>
    </div>
    <a class="right-scroll-arrow" @click="handleRightClick">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'imageSlide',
  // props: {
  //   list: {
  //     type: Array,
  //     required: true
  //   },
  //   currentPerson: {
  //     type: Number
  //   }
  // },
  data () {
    return {
      currentPerson: 0,
      list: [
        {
          id: 1,
          src: require('../../../../assets/images/pic7.jpg')
        },
        {
          id: 2,
          src: require('../../../../assets/images/pic8.jpg')
        },
        {
          id: 3,
          src: require('../../../../assets/images/pic7.jpg')
        },
        {
          id: 4,
          src: require('../../../../assets/images/pic8.jpg')
        },
        {
          id: 5,
          src: require('../../../../assets/images/pic7.jpg')
        },
        {
          id: 6,
          src: require('../../../../assets/images/pic8.jpg')
        },
        {
          id: 7,
          src: require('../../../../assets/images/pic7.jpg')
        },
        {
          id: 8,
          src: require('../../../../assets/images/pic8.jpg')
        },
        {
          id: 9,
          src: require('../../../../assets/images/pic7.jpg')
        },
        {
          id: 10,
          src: require('../../../../assets/images/pic8.jpg')
        }
      ]
    }
  },
  methods: {
    // 上一页
    handleLeftClick () {

    },
    // 下一页
    handleRightClick () {

    },
    // 切换人物详情
    handlePersonChange (idx) {
      this.$emit('update:currentPerson', idx)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
