<template>
  <div id="addUser">
    <h1>
      郑州大学数据平台自动健康打卡系统
    </h1>

    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="账号">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item label="邮箱">
        <el-input v-model="form.email" placeholder="邮箱用于每日健康打卡提醒"></el-input>
      </el-form-item>

      <el-form-item label="选择所在地市">
        <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="输入搜索,参考下图位置1"
          @select="handleSelect">
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address" placeholder="输入您的详细地址图下如位置2"></el-input>
      </el-form-item>
      <el-form-item label="体验打卡天数">
        <el-select v-model="form.days" placeholder="请选择体验打卡天数">
          <el-option label="10天" value="10"></el-option>
          <el-option label="20天" value="20"></el-option>
          <el-option label="30天" value="30"></el-option>
        </el-select>
      </el-form-item>

      <!--      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即体验</el-button>
        <el-button type="primary" @click="findUser">我已经添加了账号</el-button>
      </el-form-item>
    </el-form>

    <div id="" style="padding-top: 70px;">
      <el-col style="padding: 1.25rem;">
        <img src="../../static/image/position.png" >
      </el-col>
      <el-col>
        <el-card shadow="always">
          <h2>默认其他位置填报为否,如有特殊情况请手动更改</h2>
          <h2>邮箱用于提醒每日打卡情况，请及时关注</h2>
          <h2>体验之余GitHub上记得帮我点一下star哦，请及时关注</h2>
          <h2>
            <a href="https://github.com/noobmantest">github：https://github.com/noobmantest</a>
          </h2>
          <h3>联系我: noobmantest@163.com</h3>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          user: '',
          password: '',
          email: '',
          days: '',
          address: '',
          city_code: '',
        },
        restaurants: [],
        state: '',
        timeout: null
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    methods: {
      onSubmit() {
        console.log(this.form)
        let form = this.form
        let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/

        if (form.user == '') {
          this.$message('账号不能为空')
        } else if (form.password == '') {
          this.$message('账号不能为空')
        } else if (!reg.test(form.email)) {
          this.$message('请检查邮箱格式是否正确')
        } else if (form.address == '') {
          this.$message('详细地址不能为空')
        } else if (form.city_code == '') {
          this.$message('地市不可为空')
        } else {
          console.log('总体合法')
          console.log('submit!')
          let url = this.Global.host + 'insertUser?' + 'user=' + this.form.user +
            '&password=' + this.form.password + '&days=' + this.form.days + '&today=1&email=' + this.form.email +
            '&address=' + this.form.address + '&city_code=' + this.form.city_code;
          console.log(url);
          axios.get(url).then(
            response => {
              let res = response.data
              console.log(res)
              // isPassCount = response.data
              // console.log(isPassCount)
              // if (!isPassCount) {
              //   this.fullscreenLoading = false
              //   this.$message('账号或密码错误')
              // }
            }).catch(error => {
            console.log(error)
            this.$message('提交失败，请联系管理员：2039808146@qq.com')
          }).then(() => {
            this.$message('提交成功，管理员：2039808146@qq.com')
            this.$router.push('/findUser')
          })
        }

      },
      findUser() {
        this.$router.push('findUser')
        // this.$router.push('/MyCar');
      },
      loadAll() {
        return this.Global.province;
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
        console.log(item.address)
        console.log(item.value)
        let provinceCode = item.address
        console.log(provinceCode.slice(0, 2))
        console.log(provinceCode.slice(0, 4))
        this.form.city_code = item.address


      }
    },
  }
</script>
<style>
  #addUser {
    box-shadow: 0 0 100px rgba(0, 0, 0, .08);
    padding: 2% 5%;
    /* margin: -160px 0 0 -160px; */
    /* border-radius: 4px; */
    /* position: absolute; */
    text-align: center;
    margin-left: 2%;
    width: 90%;
    /*    width: 80%;
    height: 100%;
    padding: 32px;
    top: 20%;
    left: 20px; */
  }
</style>
