<template>
  <div>
    <el-footer>
      <el-col :span="12">
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/MyCar">
              <i class="el-icon-s-home">首页</i>
            </router-link>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-home">
              <router-link to="/MyCar">
                首页
              </router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="12">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>我的
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">
              <router-link to="/AddCar">
                新增绑定
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-fold">
              <router-link to="/HistoryPark">
                停车记录
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-custom">
              <router-link to="/MyMsg">
                个人信息
              </router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

    </el-footer>
  </div>
</template>

<script>
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

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 25rem;
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
</style>
