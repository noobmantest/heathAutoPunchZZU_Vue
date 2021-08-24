<template>
  <div id="findUser" style="padding:0% 3%;">
    <div id="" style="padding: 1% 3%;">
      <h3>查找我的打卡</h3>

      <el-row :gutter="12">
        <el-col :span="50">
          <el-input v-model="search" placeholder="输入您的邮箱" />
        </el-col>
        <el-col :span="50">
          <el-button type="primary" @click="findUserByEmail">搜索</el-button>
        </el-col>
      </el-row>

    </div>
    <div id="">
      <!-- <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"> -->
      <el-table :data="tableData" style="width: 100%" v-loading="isNoDisplay">
        <el-table-column label="账号" prop="user">
        </el-table-column>
        <el-table-column label="剩余天数" prop="days">
        </el-table-column>
        <el-table-column label="今天是否已经打卡" prop="today">
        </el-table-column>
        <el-table-column label="邮箱" prop="email">
        </el-table-column>
        <el-table-column label="省市代码" prop="city">
        </el-table-column>
        <el-table-column label="详细地址" prop="address">
        </el-table-column>
        <el-table-column align="right" label="操作">

          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="" style="padding-top: 100px;">
      <el-col :span="100">
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
        tableData: [{
          user: '账号',
          days: 'x',
          today: '0/1',
          email: '邮箱'
        }],
        search: '',
        isNoDisplay: false
      }
    },
    mounted() {
      console.log(this.get_province)
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      get_province(address) {
        let province = this.Global.province
        for (let i = 0; i < province.length; i++) {
          if (province[i].address == address) {
            return province.value
          }
        }
      },
      findUserByEmail() {
        console.log(this.search)
        let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (reg.test(this.search)) {
          this.isNoDisplay = true
          let url = this.Global.host + 'findUserByEmail?email=' + this.search
          console.log(url)
          axios.get(url).then(
            response => {
              let res = response.data
              console.log(res)
              for (let i = 0; i < res.length; i++) {
                let msg = {}
                msg.user = res[i].user
                msg.days = res[i].days
                msg.today = res[i].today
                msg.email = res[i].email
                msg.city = res[i].city_code
                msg.address = res[i].address
                this.tableData.push(msg)
              }
            }).catch(error => {
            console.log(error)
            this.$message('提交失败，请联系管理员：2039808146@qq.com')
          }).then(() => {
            this.isNoDisplay = false
          })
        } else {
          this.$message('请检查邮箱格式是否正确')
        }
      }
    },
  }
</script>
<style>
  #findUser {
    text-align: center;
  }
</style>
