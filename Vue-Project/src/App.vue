<template>
  <div id="app">
    <el-container class="el-container myNav">
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
    </el-container>

    <router-view name="home"></router-view>

    <!--<router-view></router-view>-->

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
    background-color: #B3C0D1;
    height: 40px !important;
    line-height: 40px;
    color: #333;
    text-align: center;
    padding: 0 0;

  }

  .myNav {
    padding-bottom: 15px;
  }

  /*#app {
    height: 1100px;
    !*width: 1990px;*!
    background-size: cover;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539704749464&di=e2072ee8a58b506db298c816aedb0ce9&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fb3eae06d7495b392cabb2cb293a543ee98ba48e4.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    !*padding-top: 100px;*!
  }*/

</style>
