<template>
  <div>
    <el-header>停车记录</el-header>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="60">
      </el-table-column>
      <el-table-column prop="licensePlate" label="车牌号" width="100">
      </el-table-column>
      <el-table-column prop="entryTime" label="进入时间" width="85">
      </el-table-column>
      <el-table-column prop="parkingTime" label="停放时长">
      </el-table-column>
      <el-table-column prop="carPosition" label="位置">
      </el-table-column>
    </el-table>
    <el-footer>
      <Footer />
    </el-footer>
  </div>
</template>

<script>
  import Footer from './public/Footer.vue'
  import axios from 'axios'
  export default {
    components: {
      Footer,
    },
    data() {
      return {
        licensePlate: '闽A77518',
        loading: true,
        tableData: []

      }
    },
    mounted() {
      const url = this.Global.host + 'findAllHistoryCarParkFromCarPlate?licensePlate=' + this.licensePlate
      console.log(url)
      axios.get(url).then(
        response => {
          let res = response.data
          for (let i = 0; i < res.length; i++) {
            // date: '2016-05-02',
            // licensePlate: '豫A123456',
            // parkTime: '17:50:30-20:50:30',
            // parkingTime: '3:60:30',
            // carPosition: 'A1'

            // let test = this.Tools.toYYMMDD(res[i].entryTime)
            // let test2 = this.Tools.toHHMMSS(res[i].entryTime)
            // let test3 = this.Tools.getDuration(res[i].outTime - res[i].entryTime)
            // console.log(test)
            // console.log(test2)
            // console.log(test3)
            // console.log('-----')
            // console.log(new Date().getTime())

            let msg = {}
            msg.date = this.Tools.toYYMMDD(res[i].entryTime)
            msg.licensePlate = res[i].licensePlate
            msg.entryTime = this.Tools.toYYMMDD(res[i].entryTime) + ' ' + this.Tools.toHHMMSS(res[i].entryTime)
            msg.parkingTime = this.Tools.getDuration(res[i].outTime - res[i].entryTime)
            msg.carPosition = res[i].carPosition

            this.tableData.push(msg)
          }
          console.log(res)
        }).catch(error => {
        console.log(error)
        alert('请求失败')
      }).then(() => {
        this.loading = false
      })
    }
  }
</script>

<style>
</style>
