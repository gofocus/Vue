<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <section class="el-container">
      <nav-bar></nav-bar>
    </section>

    <carousel></carousel>
    <!--路由组件--><!--vue-router特有标签，将组件映射到这里-->
    <router-view></router-view>
    <router-view name="home"></router-view>


  </div>
</template>

<script>
  import nav from './components/nav'
  import carousel from './components/carousel'

  export default {
    name: 'app',
    components: {
      'nav-bar': nav,
      'carousel': carousel

    }
  }

</script>

<style>

  header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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

  .el-header {
    background-color: #B3C0D1;
  }

  .el-aside {
    background-color: #B3C0D1;
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
