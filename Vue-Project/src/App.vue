<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--普通组件-->
    <nav-bar></nav-bar>
    <h5>123</h5>

    <!--路由组件-->
    <!--vue-router特有标签，将组件映射到这里-->
    <router-view/>
    <router-view class="view two" name="login"></router-view>

  </div>
</template>

<script>
import nav from './components/nav'

  export default {
  name: 'app',
  components: {
    'nav-bar': nav
  }
}

</script>

<style>

</style>
