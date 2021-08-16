<template>
  <el-upload drag action="string" :http-request="sendfile">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>
<script>
  import Footer from './public/Footer.vue'
  import axios from 'axios'
  export default {
    components: {
      Footer,
    },
    methods: {
      sendfile(param) {
        //获取id上传的file
        let fd = new FormData();
        fd.append("file", JSON.stringify(param.file));
        axios({
          url:'http://127.0.0.1:8081/upload/',
          method:'post',
          data:fd
        }).then((res) => {
          console.log(fd)
          console.log(res)
        }).catch(errors => {
          console.log("error")
          console.log(errors)
        })
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
