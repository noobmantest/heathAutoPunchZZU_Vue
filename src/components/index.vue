<template>
  <div>
    <!-- <div>
      <div style="float: left;width: 80%;">
        <el-input v-model="value" placeholder="请输入内容"></el-input>
      </div>
      <div style="float: left;width: 10%;">
        <el-button type=" primary" icon="el-icon-search">
        </el-button>
      </div>
    </div> -->
    <div>
      <!-- 不能识别部分 -->
      <div class="showCar" v-for="(p, index) in noShiBie" :key="index">
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
            <img width="300px" :src="p.id" />
          </a>
        </div>
      </div>
    </div>
    <div style="">

      <!-- 搜索 -->
      <div class="showCar" v-for="(p, index) in searchRes" :key="index">
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
          <!-- ../../static/findPosition.html -->
          <a :href="p.href">
            <img width="300px" :src="p.id" />
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  import axios from 'axios'

  export default {
    watch: {
      value: function(value) {
        console.log(value)
        let reg = new RegExp(value)
        if (value === '') {
          this.searchRes = []
        } else {
          for (let i = 0; i < this.findAllRes.length; i++) {
            if (this.findAllRes[i].chepai.match(reg)) {
              this.searchRes.push(this.findAllRes[i])
            }
          }
        }
      }
    },
    mounted() {
      let url = this.Global.host + 'findAll'
      axios.get(url).then(
        response => {
          this.findAllRes = response.data
        }).catch(error => {
        console.log(error)
        alert('请求失败')
      }).then(() => {
        for (let i = 0; i < this.findAllRes.length; i++) {
          this.findAllRes[i].id = 'http://81.70.250.230:8080/download/' + this.findAllRes[i].id
          this.findAllRes[i].href = '../../static/findPosition.html?position=' + this.findAllRes[i].position.slice(
            5, 6)
          if (this.findAllRes[i].chepai === '未能识别') {
            console.log(this.findAllRes[i].id + '-------' + this.findAllRes[i].position)
            this.noShiBie.push(this.findAllRes[i])
            this.findAllRes[i].position = this.findAllRes[i].position.slice(5)
          } else {
            this.findAllRes[i].position = this.findAllRes[i].position.slice(5)
          }
        }
        this.noShiBie.push(this.findAllRes[0])
        this.noShiBie.push(this.findAllRes[1])
        this.noShiBie.push(this.findAllRes[2])
        console.log(this.noShiBie)
      })
      console.log('mounted执行了。。。。。。。。。。。')
      this.value = '渝H11557'
    },
    updated() {
      // let imgTag = document.querySelectorAll('#displayImage img')
      // for (let i = 0; i < this.searchRes; i++) {
      //   imgTag[i].src = 'http://81.70.250.230:8080/download/' + this.searchRes[i].id
      //   console.log('更新')
      // }
    },
    data() {
      return {
        value: '渝H11557',
        findAllRes: '',
        searchRes: [],
        noShiBie: []
      }
    },
    methods: {
      testClick() {
        // Toast('提示信息')
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  }
</script>

<style>
  .mint-search-list {
    display: none;
  }

  .mint-search {
    height: auto;
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


  /* 修改mint-ui 样式 */
  .mint-header.is-fixed {
    z-index: 2;
  }
</style>
