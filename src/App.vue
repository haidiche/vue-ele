<template>
  <div id="app">
    <div>

      <router-link to="/hellovue">hellovue</router-link>
      <router-link to="/parents">parents</router-link>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

 .el-row {
    margin-bottom: 30px;
    &:last-child {
       margin-left: 0px;
       margin-top: 40px
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
