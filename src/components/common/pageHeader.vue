<template>
  <div class="header">
    <span class="head-corner-left"></span>
    <div class="head-logo">
      <a @click="backToHome">
        <img src="@/assets/images/logo.png" />
      </a>
    </div>

    <menu-bar v-bind="menuData" />

    <div class="head-member-item">
      <span class="headmember-arrow-left"></span>
      <div class="headmember-content">
        <div class="hm-member fleft">
          <span>{{currentUser}}，欢迎您！</span>
          <span class="date">{{currentTime}}</span>
        </div>

        <a class="exit" @click="handleExitClick">
          <i></i>退出
        </a>
      </div>
    </div>
    <span class="head-corner-right"></span>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import menuBar from '@/components/common/menuBar.vue'
import { formatDate, getSessionData, clearSessionData } from '@/utils'

export default {
  name: 'pageHeader',
  components: {
    menuBar
  },
  data () {
    return {
      currentMenu: 1
    }
  },
  computed: {
    ...mapState(['menuList']),
    menuData () {
      return { currentMenu: this.currentMenu, menuList: this.menuList }
    },
    currentTime () {
      return formatDate(new Date())
    },
    currentUser () {
      const userInfo = getSessionData('userInfo')
      if (userInfo) {
        return userInfo.userName
      }
      return ''
    }
  },
  methods: {
    ...mapActions(['getMenuList']),

    // 回到首页
    backToHome () {
      location.reload()
    },

    // 退出事件
    handleExitClick () {
      this.$confirm('您确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      })
        .then(() => {
          clearSessionData()
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '您已退出'
          })
        })
        .catch(() => {

        })
    }
  },
  mounted () {
    if (this.menuList.length === 0) {
      this.getMenuList()
    }
    this.currentMenu = this.$route.meta.menu
  }
}
</script>
<style lang="scss" scoped>
</style>
