<template>
  <div class="layout-test">

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
        <aside class="el-aside" >
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
