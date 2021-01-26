<template>
  <el-form class="register-form" :model="registerForm" ref="register-form" :rules="registerRules" label-position="left" label-width="80px" @submit.native.prevent>
    <div class="register-form__title">欢迎注册企业账号</div>
    <el-form-item required label="用户名" prop="username">
      <el-input v-model="registerForm.username" placeholder="2-12位英文字母" />
    </el-form-item>
    <el-form-item required label="密码" prop="password">
      <el-input v-model="registerForm.password" type="password" show-password placeholder="8-60位，包含不止一种字符" />
    </el-form-item>
    <el-form-item required label="重复密码" prop="checkPass">
      <el-input v-model="registerForm.checkPass" type="password" show-password />
    </el-form-item>
    <el-form-item required label="真实姓名" prop="realname">
      <el-input v-model="registerForm.realname" />
    </el-form-item>
    <el-form-item required label="工作单位" prop="company">
      <el-input v-model="registerForm.company" />
    </el-form-item>
    <el-form-item required label="职位" prop="position">
      <el-input v-model="registerForm.position" />
    </el-form-item>
    <el-form-item required label="电子邮箱" prop="email">
      <el-input v-model="registerForm.email" />
    </el-form-item>
    <el-form-item required label="联系电话" prop="phone">
      <el-input v-model="registerForm.phone" placeholder="电话或手机，固定电话请注明区号" />
    </el-form-item>
    <el-form-item class="register-form__captcha" required label="验证码" prop="captchaValue">
      <el-input v-model="registerForm.captchaValue">
        <template slot="append">
          <el-image :src="captchaUrl" @click="updateCaptcha" />
        </template>
      </el-input>
    </el-form-item>
    <div class="register-form__rules">
      <el-checkbox v-model="isAgree" />
      <span>同意<a>《服务条款》</a>、<a>《隐私政策》</a></span>
    </div>
    <el-button class="register-form__submit" type="primary" native-type="submit" @click="handleFormSubmit">立即注册</el-button>
  </el-form>
</template>

<script>
import { getCaptcha, register } from '@/api/auth.js'

export default {
  name: 'register',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs['register-form'].validateField('checkPass')
        }
        callback()
      }
    }
    const validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validateRealname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入真实姓名'))
      } else {
        callback()
      }
    }
    const validateCompany = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入工作单位'))
      } else {
        callback()
      }
    }
    const validatePosition = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入职位'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入电子邮箱'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系电话'))
      } else {
        callback()
      }
    }
    const validateCaptchaValue = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      // 加载状态
      loading: false,
      // 验证码地址
      captchaUrl: '',
      isAgree: false,
      // 注册表单
      registerForm: {
        // 用户名
        username: '',
        // 密码
        password: '',
        // 重复密码
        checkPass: '',
        // 真实姓名
        realname: '',
        // 工作单位
        company: '',
        // 职位
        position: '',
        // 电子邮箱
        email: '',
        // 联系电话
        phone: '',
        // 验证码编号
        captchaId: '',
        // 验证码
        captchaValue: ''
      },
      // 注册规则
      registerRules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        checkPass: [{ validator: validateCheckPass, trigger: 'blur' }],
        realname: [{ validator: validateRealname, trigger: 'blur' }],
        company: [{ validator: validateCompany, trigger: 'blur' }],
        position: [{ validator: validatePosition, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        captchaValue: [{ validator: validateCaptchaValue, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 获取验证码
    updateCaptcha () {
      this.loading = true
      getCaptcha().then(res => {
        if (res.data.code === 0) {
          this.captchaUrl = res.data.data
          this.registerForm.captchaId = res.data.captchaId
        } else {
          console.log(res)
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 注册
    register (data) {
      this.loading = true
      register(data).then(res => {
        if (res.data.code === 0) {
          console.log(res)
          this.$message.success({
            message: '注册成功，即将返回登录页',
            onClose: () => {
              this.$router.push({ name: 'login' })
            }
          })
        } else {
          this.$message.error(res.data.msg)
          this.updateCaptcha()
        }
      }).catch(err => {
        console.error(err)
        this.$message.error('未知错误')
      }).finally(() => {
        this.loading = false
      })
    },
    // 提交表单
    handleFormSubmit () {
      this.$refs['register-form'].validate((valid) => {
        if (valid) {
          if (!this.isAgree) {
            this.$message.error('请选勾选同意条款')
            return
          }
          const data = {
            username: this.registerForm.username,
            password: this.registerForm.password,
            password2: this.registerForm.checkPass,
            name: this.registerForm.realname,
            workUnit: this.registerForm.company,
            position: this.registerForm.position,
            email: this.registerForm.email,
            phone: this.registerForm.phone,
            captchaId: this.registerForm.captchaId,
            captchaValue: this.registerForm.captchaValue
          }
          this.register(data)
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    this.updateCaptcha()
  }
}
</script>

<style lang="scss" scoped>
.register-form::v-deep {
  margin: 0 auto;
  width: 500px;

  .register-form__title {
    height: 60px;
    text-align: center;
    font-size: 24px;
    color: #F56C6C;
    line-height: 60px;
  }

  .el-form-item {

    .el-form-item__label {
      color: #fff;
    }

    &.register-form__captcha {

      .el-input-group__append {
        padding: 0;
        font-size: 0;

        .el-image {
          width: 100px;
          height: 38px;
          cursor: pointer;
        }
      }
    }
  }

  .register-form__rules {
    margin-bottom: 20px;

    .el-checkbox {
      margin-right: 10px;
    }
  }

  .register-form__submit {
    width: 100%;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
