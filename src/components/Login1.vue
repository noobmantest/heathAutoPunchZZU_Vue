<template>
  <el-container>
    <el-header>登录</el-header>
    <el-main>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userPhone">
          <el-input v-model="ruleForm.userPhone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :disabled="isDisabled" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
          <router-link to="/Register">
            <el-button href="">去注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios'
  import Cookies from 'js-cookie'
  export default {
    mounted() {},
    data() {
      var validatePass = (rule, value, callback) => {
        console.log('test----')
        if (value === '') {
          this.isDisabled = false
          callback(new Error('请输入手机号'));
        } else {
          let reg = /^1[3|4|5|7|8][0-9]{9}$/
          if (!reg.test(value)) {
            this.isDisabled = false
            callback(new Error('请输入手机号'));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          this.isDisabled = false
          callback(new Error('密码不能为空'));
        } else {
          callback();
        }
      };
      return {
        isDisabled: false,
        fullscreenLoading: false,
        ruleForm: {
          userPhone: Cookies.get('userPhone') ? Cookies.get('userPhone') : '',
          password: Cookies.get('password') ? Cookies.get('password') : '',
        },
        rules: {
          userPhone: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          password: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 提交登录
            this.fullscreenLoading = true
            const url = this.Global.host + 'isPassCount?userPhone=' + this.ruleForm.userPhone + '&passWord=' +
              this.ruleForm.password
            let isPassCount = false
            axios.get(url).then(
              response => {
                isPassCount = response.data
                console.log(isPassCount)
                if (!isPassCount) {
                  this.fullscreenLoading = false
                  this.$message('账号或密码错误')
                }
              }).catch(error => {
              console.log(error)
              alert('请求失败')
            }).then(() => {
              if (isPassCount) {
                console.log('跳转页面')
                Cookies.set('userPhone', this.ruleForm.userPhone)
                Cookies.set('password', this.ruleForm.password)

                let url1 = this.Global.host + "findUserFromUserPhone?userPhone=" + Cookies.get('userPhone')
                axios.get(url1).then(
                  response => {
                    let res = response.data
                    console.log(res)

                    this.fullscreenLoading = false
                    sessionStorage.setItem('user', JSON.stringify(res));
                    this.$router.push('/MyCar');
                  }).catch(errors => {
                  console.log(errors)
                })


              }
            })

            console.log(url)
            console.log(this.ruleForm.userPhone, this.ruleForm.password)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        console.log(this.$refs[formName])
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>


<style>
  .el-header {
    background-color: blueviolet;
    color: white;
    font-size: 2.1875rem;
  }
</style>
