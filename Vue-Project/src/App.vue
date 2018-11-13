<template>
  <div id="app">
    <el-container class="el-container myNav">
      <el-main>
        <nav-bar></nav-bar>
      </el-main>
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

<style lang="scss">
  #app {
    .myNav {
      height: 31px;
      color: #333;
      text-align: center;
      padding: 0 98px;
      background-color: #f4f4f4;
      border-bottom: solid 1px #e6e6e6;

      .el-main {
        padding: 0;
        height: 30px;
      }
    }

  }

</style>
