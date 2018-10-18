<template>

  <section class="el-container is-vertical">
    <header id="header-nav" class="el-header" style="height: 30px;">
    </header>
    <br>
    <router-view name="carousel"></router-view>
    <carousel></carousel>
    <section class="el-container">
      <aside class="el-aside" style="width: 80px;height: 500px;"></aside>
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

</style>
