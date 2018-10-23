<template>
  <div class="layout-test">

    <div class="source">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <div class="constr">
      <div class="nav">
        <a href="" class="nav-a width">导航1</a>
        <a href="" class="nav-a width">导航2</a>
        <a href="" class="nav-a width">导航3</a>
      </div>
    </div>

    <section class="el-container is-vertical">
      <header id="header-nav" class="el-header" style="">
        <carousel></carousel>
      </header>
      <br>
      <section class="el-container">
        <aside class="el-aside">
          <div class="constr">
            <div class="nav">
              <a href="" class="nav-a width">导航1</a>
              <a href="" class="nav-a width">导航2</a>
              <a href="" class="nav-a width">导航3</a>
            </div>
          </div>
        </aside>
        <section class="el-container is-vertical">
          <main class="el-main">

          </main>
          <footer class="el-footer" style="height: 60px;">Footer</footer>
        </section>
      </section>
    </section>

  </div>
</template>

<script>
  import carousel from '../components/carousel'

  export default {
    name: "Home",
    components: {
      'carousel': carousel
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
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
    /*line-height: 200px;*/
    height: 500px;
    width: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  /* .width {
     width: 100%;
   }*/

  .constr {
    width: 150px;
  }

  .nav {
    background-color: #cd0000;
    /*padding: 5px 10px;*/
    margin: 10px auto;
  }

  .nav-a {
    display: block;
    margin: 0 10px;
    padding: 9px 10px;
    border-bottom: 1px solid #b70000;
    border-top: 1px solid #de3636;
    color: #fff;
  }

  .nav-a:first-child {
    border-top: 0;
  }

  .nav-a + .nav-a + .nav-a {
    border-bottom: 0;
  }

  #header-nav::after {
    content: "";
    display: block;
    clear: both;
  }
</style>
