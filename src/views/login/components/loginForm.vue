<template>
  <el-form :model="loginForm" :rules="formRules" ref="loginForm" label-position="left" label-width="60px" :hide-required-asterisk="true" @submit.native.prevent>
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="loginForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="captchaValue">
      <el-input v-model="loginForm.captchaValue" maxlength="4">
        <template slot="append">
          <div class="loading-block" v-if="!captchaUrl || loading"><i class="el-icon-loading"></i></div>
          <img class="captcha-img" :src="captchaUrl" alt="验证码" @click="updateCaptcha" v-else />
        </template>
      </el-input>
    </el-form-item>
    <p class="text-right">不是会员？<router-link class="reg-link" :to="{ name: 'register' }">去注册</router-link></p>
    <div class="login-btn-box"><button class="circle-blue-btn" type="submit" @click="submitForm('loginForm')">登录</button></div>
  </el-form>
</template>

<script>
import * as api from '@/api/auth'
import { setToken } from '@/utils/token.js'
import { setSessionData } from '@/utils'

export default {
  name: 'loginForm',
  data () {
    return {
      submiting: false,
      loading: true,
      captchaUrl: '',
      loginForm: {
        userName: 'admin',
        password: '123456',
        captchaId: '',
        captchaValue: ''
      },
      formRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captchaValue: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 更新验证码
    updateCaptcha () {
      this.loading = true
      api.getCaptcha().then(res => {
        // console.log(res);
        this.loading = false
        if (res.data.code === 0) {
          this.loginForm.captchaId = res.data.captchaId
          this.captchaUrl = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch(err => console.error(err))
    },

    // 提交表单（登录）
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            fullscreen: true,
            lock: true,
            text: '拼命加载中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
          })
          api.login(this.loginForm).then(res => {
            // console.log(res);
            loading.close()
            if (res.data.code === 0) {
              const { token, userId, userName } = res.data
              setToken(token)
              setSessionData('userInfo', { userId, userName })
              this.$message.success(res.data.msg)
              if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
              } else {
                this.$router.push('/home')
              }
            } else {
              this.updateCaptcha()
              this.$message.error(res.data.msg)
            }
          }).catch(err => console.error(err))
        } else {
          // console.log('error submit!!');
          return false
        }
      })
    }
  },
  mounted () {
    this.updateCaptcha()
    // 强行修改字间距
    document.querySelector('[for=password].el-form-item__label').innerHTML = '密&nbsp;&nbsp;&nbsp;码'
  }
}
</script>

<style lang="scss" scoped>
.el-form::v-deep {
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-form-item__label {
    padding: 0 10px 0 0;
    color: #fff;
    line-height: 36px;
  }
  .el-form-item__content {
    line-height: unset;
    min-height: 38px;
  }
  .el-form-item__error {
    padding-top: 0;
  }
  .el-input__inner {
    padding: 0 10px;
    border: 1px #1c6bab solid;
    height: 36px;
    color: #fff;
    background-color: transparent;
  }
  .el-input .el-input__clear {
    color: #fff;
  }
  .el-input-group__append {
    padding: 0;
    font-size: 0;
  }
}
@mixin captcha-img-size {
  width: 100px;
  height: 34px;
}
.loading-block {
  @include captcha-img-size;
  text-align: center;
}
.el-icon-loading {
  font-size: 26px;
  line-height: 34px;
}
.captcha-img {
  @include captcha-img-size;
  max-width: unset;
  cursor: pointer;
}
</style>
