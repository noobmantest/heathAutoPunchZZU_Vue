<template>
 <!-- <el-upload drag action="string" :http-request="uploadUrl1">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload> -->

  <el-upload  action="string" :http-request="uploadUrl1">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "test1",
    methods: {
      uploadUrl1(param) {
        let fd = new FormData();
        fd.append("file", param.file);
        // let url1 = 'http://127.0.0.1:8081/upload';
        let url1 = "http://81.70.250.230:8081/upload";
        axios({
          url: url1,
          method: 'post',
          data: fd
        }).then((res) => {
          console.log(res)
          console.log(res.data)
          window.name = res.data
          // 向父组件传值
          this.$emit('childByValue', res.data)
          console.log('向父组件传值')
        }).catch(errors => {
          console.log(errors)
        })
      },
    }
  }
</script>

<style scoped>

</style>
