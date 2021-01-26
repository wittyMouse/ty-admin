<template>
  <div class="container">
    <div class="login-logo">
      <img src="../../assets/images/logo-icon.png">
      <span class="login-text">天眼情报 · 隐匿网络空间情报领航者</span>
    </div>

    <div class="login-mainbox">
      <div class="login-item">
        <login-form />
      </div>
    </div>
  </div>
</template>
<script>
import loginForm from './components/loginForm'

export default {
  name: 'login',
  components: {
    loginForm
  }
}
</script>
<style lang="scss" scoped>
</style>
