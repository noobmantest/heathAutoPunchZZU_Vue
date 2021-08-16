<template>
  <el-container>
    <el-header>修改信息</el-header>
    <el-main>
      <el-form :model="ruleForm" label-width="100px" class="">
        <el-form-item label="用户名" prop="pass">
          <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="我的密码" prop="passWord">
          <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="我的车牌号1" prop="userCarPlate">
          <el-input v-model.number="ruleForm.userCarPlate"></el-input>
        </el-form-item>
        <el-form-item label="我的车牌号2" prop="userCarPlate1">
          <el-input v-model.number="ruleForm.userCarPlate1"></el-input>
        </el-form-item>
        <el-form-item label="我的车牌号3" prop="userCarPlate2">
          <el-input v-model.number="ruleForm.userCarPlate2"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userPhone">
          <el-input v-model.number="ruleForm.userPhone"></el-input>
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
  import Footer from './public/Footer.vue'
  export default {
    components: {
      Footer,
    },
    mounted() {
      let user = window.sessionStorage.getItem('user')
      console.log(JSON.parse(user))
      this.ruleForm = JSON.parse(user)
    },
    data() {
      return {
        ruleForm: {
          userName: 'test',
          passWord: '123456',
          userPhone: '17633908064',
          userCarPlate: '闽A77518',
          userCarPlate1: '皖H88888',
          userCarPlate2: '',
        },

      }
    }
  };
</script>

<style>
  .el-header,
  .el-footer {
    width: 100%;
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
