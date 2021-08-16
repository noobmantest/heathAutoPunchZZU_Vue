<template>
  <el-container>
    <el-header>我的</el-header>
    <div style="width: 100%;">
      <el-card class="box-card" v-loading="loading">
        <div slot="header" class="clearfix">
          <span>我的信息</span>
          <router-link to="/UpdateUserMsg">
            <el-button style="float: right; padding: 3px 0" type="primary">修改</el-button>
          </router-link>
        </div>
        <div class="text item">
          <span>手机号码：</span>
          <span>{{user.userPhone}}</span>
        </div>
        <div class="text item">
          <span>车牌1：</span>
          <span>{{user.userCarPlate ? user.userCarPlate : '无'}}</span>
        </div>
        <div class="text item">
          <span>车牌2：</span>
          <span>{{user.userCarPlate1 ? user.userCarPlate1 : '无'}}</span>
        </div>
        <div class="text item">
          <span>车牌3：</span>
          <span>{{user.userCarPlate2 ? user.userCarPlate2 : '无'}}</span>
        </div>
      </el-card>
    </div>

    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
  import Footer from './public/Footer.vue'
  import axios from 'axios'
  import Cookies from 'js-cookie'
  export default {
    components: {
      Footer,
    },
    mounted() {
      let userPhone = Cookies.get('userPhone')
      const url = this.Global.host + 'findUserByUserPhone?userPhone=' + userPhone
      console.log(url)
      axios.get(url).then(
        response => {
          let res = response.data
          console.log(res)
          this.user = res
          this.loading = false
        }).catch(error => {
        console.log(error)
        alert('请求失败')
      }).then(() => {})
    },
    data() {
      return {
        user: {},
        userPhone: '',
        userCarPlate: '',
        userCarPlate1: '',
        userCarPlate2: '',
        loading: true,
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

  .text {
    font-size: 14px;
  }

  .item {
    width: 100%;
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    /* width: 480px; */
  }
</style>
