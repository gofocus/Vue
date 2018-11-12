<template>
  <div id="app">
    <el-container class="el-container myNav">
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
    </el-container>

    <!--<router-view name="home"></router-view>-->
    <router-view></router-view>

  </div>
</template>

<script>
  import nav from './components/nav'

  export default {
    name: 'app',
    components: {
      'nav-bar': nav,
    }
  }

</script>

<style scoped>
  .el-header {
    height: 31px !important;
    color: #333;
    text-align: center;
    padding: 0px;
    margin:0 96px;
  }

  .myNav{
    background-color: #f4f4f4;
    border-bottom: solid 1px #e6e6e6!important;
  }

</style>
