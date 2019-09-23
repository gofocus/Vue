<template>
  <div id="app">

    <el-container class="el-container myNav">
      <input type="button" value="test">

      <el-main>
        <nav-bar/>
      </el-main>
    </el-container>
    <!--<router-view name="home"></router-view>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import nav from './components/BaseNav'

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

    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.1;
  }

</style>
