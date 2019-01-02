<template>

  <!--<div class="block">-->
    <!--<span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel class="elCarousel">
      <!--<el-carousel height="150px" trigger="click">-->
      <el-carousel-item v-for="item in carouselList" :key="item">
        <img class="img-box" :src="item" alt=""
             onerror="this.onerror=null; this.src='http://woxin2.jx139.com/cztx/images/ic_default_head.png'">
      </el-carousel-item>
    </el-carousel>
  <!--</div>-->
</template>

<script>
  import {base} from "../axios/api";
  // import {getCarousel}from "../axios/api";

  export default {
    name: "Carousel",
    data: function () {
      return {
        carouselList: []
      }
    },
    mounted: function () {
      const _this = this;                                      // axios中的this不会指向当前实例，需要将当前实例提前存储起来
      this.$axios.get(`${base}/carouselList`)
        .then(function (response) {
          return _this.carouselList = response.data;    //只写response.data不行，Mock传回来的数据是一个Object，里面包含Array和其他对象
        })
      // .then(response => (this.carousel = response.data))   //箭头函数内部的this是词法作用域，由上下文确定。此处匿名函数内部的this已经绑定了外部的Vue实例了
    },

  }
</script>

<style scoped>

 /*el-carousel > .el-carousel__container {
    max-width: 1100px;
    margin: 0 auto;
    !*position: inherit;*!
    height: 30px;
  }*/


 el-carousel::after {
   content: "";
   display: block;
   clear: both;
 }


</style>
