<template>
  <el-container>
    <el-header>注册</el-header>
    <el-main>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userPhone">
          <el-input v-model.number="ruleForm.userPhone"></el-input>
        </el-form-item>
        <el-form-item label="车辆照片" prop="">
          <!-- <el-input v-model.number="ruleForm.userPhone"></el-input> -->
          <UploadImage v-on:childByValue="childByValue"></UploadImage>
        </el-form-item>
        <el-form-item label="验证码" prop="confirmCode">
          <div>
            <div style="float: left; width: 50%;">
              <el-input v-model.number="ruleForm.confirmCode"></el-input>
            </div>
            <div style="float: left;width: 40%;">
              <el-button type="warning">获取验证码</el-button>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="我的车牌号" prop="userCarPlate">
          <el-input v-model.number="ruleForm.userCarPlate"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :disabled="isDisable">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  import UploadImage from './UploadImage.vue'
  import axios from 'axios'
  export default {
    components: {
      UploadImage
    },
    data() {
      var checkUserPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          let reg = /^1[3|4|5|7|8][0-9]{9}$/
          if (!reg.test(value)) {
            this.isDisable = true
            callback(new Error('请输入正确手机号'));
          } else {
            this.isDisable = false
            callback()
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          this.isDisable = true
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          this.isDisable = false
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          this.isDisable = true
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          this.isDisable = true
          callback(new Error('两次输入密码不一致!'));
        } else {
          this.isDisable = false
          callback();
        }
      }
      var checkUserCarPlate = (rule, value, callback) => {
        let reg =
          /([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|(DF[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})/
        if (value === '') {
          this.isDisable = true
          callback(new Error('请输入车牌号'));
        } else if (!reg.test(value)) {
          this.isDisable = true
          callback(new Error('输入车牌号不合法'));
        } else {
          this.isDisable = false
          callback();
        }
      }
      var checkConfirmCode = (rule, value, callback) => {
        if (value != '1234') {
          this.isDisable = true
          callback(new Error('验证码不正确'));
        } else {
          this.isDisable = false
          callback();
        }
      }
      return {
        ruleForm: {
          userName: '',
          pass: '',
          checkPass: '',
          userPhone: '',
          userCarPlate: '',
          confirmCode: ''
        },
        userCarImage: '',
        userName: '',
        isDisable: false,
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          userPhone: [{
            validator: checkUserPhone,
            trigger: 'blur'
          }],
          userCarPlate: [{
            validator: checkUserCarPlate,
            trigger: 'blur'
          }],
          confirmCode: [{
            validator: checkConfirmCode,
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!')
            let fd = new FormData();
            fd.append("userName", this.userName)
            fd.append("userPhone", this.ruleForm.userPhone)
            fd.append("passWord", this.ruleForm.checkPass)
            fd.append("userCarPlate", this.ruleForm.userCarPlate)
            fd.append("userCarImage", this.userCarImage)
            // 输出值
            for (var [a, b] of fd.entries()) {
              console.log(a, b);
            }

            axios({
              url: this.Global.host + 'userAdd',
              method: 'post',
              data: fd
            }).then((res) => {
              console.log(res)
              console.log(res.data)
              this.$message('注册成功，跳转登录界面')
              this.$router.push('/Login')
            }).catch(errors => {
              this.$message('注册失败,未知错误')
              console.log(errors)
            })


            // const url = this.Global.host + 'userAdd?userPhone=' + this.ruleForm.userPhone + '&passWord=' +
            //   this.ruleForm.password + '&userCarPlate=' + this.ruleForm.userCarPlate + '&userCarImage=' + this.userCarImage
            // console.log(url)
            // let isSuccessReg = false
            // axios.get(url).then(
            //   response => {
            //     isSuccessReg = response.data
            //     console.log(isSuccessReg)
            //   }).catch(error => {
            //   console.log(error)
            //   alert('请求失败')
            // }).then(() => {
            //   if (isSuccessReg) {
            //     console.log('跳转页面')
            //     this.$message('注册成功，去登陆....')
            //     this.$router.push('/Login');
            //   }
            // })
          } else {
            console.log('error submit!!');
            this.$message('手机号已经被注册')
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      childByValue: function(childValue) {
        // childValue就是子组件传过来的值
        // this.name = childValue
        console.log(childValue)
        console.log('父组件获取---')
        this.userCarImage = childValue
      },
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
