<template>
  <div>

    <el-header>首页</el-header>
    <!-- <Index></Index> -->
    <!-- <div style="display: none;"> -->
    <div>
      <div>
        <!-- 不能识别部分 -->
        <div class="showCar" v-for="(p, index) in myCar" :key="index">
          <div class="left">
            <div>
              <p>车牌号：</p>
              <span>{{p.chepai}}</span>
            </div>
            <div>
              <p>位置：</p>
              <span>{{p.position}}</span>
            </div>
          </div>
          <div class="right">
            <a :href="p.href">
              <img width="300px" :src="p.userCarImage" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <el-footer>
      <Footer />
    </el-footer>
  </div>

</template>

<script>
  import axios from 'axios'
  import Footer from './public/Footer.vue'
  import Index from './index.vue'
  import Cookies from 'js-cookie'
  export default {
    components: {
      Footer,
      Index,
    },
    mounted() {
      let name = Cookies.get('userPhone')
      console.log(name, 'Cookies中的内容')
      let name1 = Cookies.get('user')
      console.log(name1, 'Cookies中的内容')

      let url = this.Global.host + "findUserFromUserPhone?userPhone=" + Cookies.get('userPhone')
      console.log(url)
      axios.get(url).then(
        response => {
          let res = response.data
          console.log(res)
          this.myCar = [{}, {}, {}]
          let car = {}
          console.log('---------------')
          // 第一个车牌
          this.myCar[0].chepai = res.userCarPlate
          this.myCar[0].userCarImage = res.userCarImage
          this.myCar[0].href = '../../static/findPosition.html?position=E'
          // 第二个车牌
          // console.log(res.userCarPlate1)
          if (res.userCarPlate1) {
            console.log('加入第一个车牌')
            this.myCar[1].chepai = res.userCarPlate1
            this.myCar[1].userCarImage = res.userCarImage1
            this.myCar[1].href = '../../static/findPosition.html?position=E'
          } else {
            this.myCar.pop()
          }

          // 第三个车牌
          if (res.userCarPlate2) {
            console.log('加入第二个车牌')
            this.myCar[2].chepai = res.userCarPlate2
            this.myCar[2].userCarImage = res.userCarImage2
            this.myCar[2].href = '../../static/findPosition.html?position=E'
          } else {
            this.myCar.pop()
          }
          console.log(this.myCar)
        }).catch(error => {
        console.log(error)
        console.log('请求失败')
      })
    },
    data() {
      return {
        myCar: [{
            chepai: '苏',
            userCarImage: '',
            position: ''
          },
          {
            chepai: '',
            userCarImage: '',
            position: 'C2'
          },
          {
            chepai: '',
            userCarImage: '',
            position: 'D1'
          },
        ]
      }
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .el-header,
  .el-footer {
    width: 100%;
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-header {
    position: fixed;
    top: 0;
  }

  .el-footer {
    position: fixed;
    bottom: 0;
  }



  .el-dropdown-link {
    cursor: pointer;
    color: #000000;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .showCar {
    border: 1% solid red;
  }

  .left {
    float: left;
    width: 20%;
  }

  .left div {
    /* margin-top: 1.25rem; */
    color: #ff9955;
    font-weight: bold;
  }

  .left span {
    color: #8A2BE2;
    font-size: small;
  }

  .right {
    width: 78%;
    height: 11rem;
    background-color: #ffffff;
    float: left;
  }

  .showCar img {
    width: 300px;
    /* height: 15.625rem; */
  }
</style>
