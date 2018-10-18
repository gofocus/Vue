<template>

  <section class="el-container is-vertical">
    <header id="header-nav" class="el-header" style="height: 60px;">
      header
      <carousel></carousel>
    </header>
    <section class="el-container">
      <aside class="el-aside" style="width: 80px;height: 500px;">Aside</aside>
      <section class="el-container is-vertical">
        <main class="el-main">Main</main>
        <footer class="el-footer" style="height: 60px;">Footer</footer>
      </section>
    </section>
  </section>

</template>

<script>
  import carousel from '../components/carousel'


  export default {
    name: "Home",
    components:{
      'carousel': carousel
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
