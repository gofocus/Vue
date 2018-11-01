<template>
  <el-container>
    <header-bp></header-bp>

<!--    <el-header class="header-carousel" style="height: 300px;">
      <carousel></carousel>
    </el-header>-->

    <el-container>
      <el-aside width="50px" class="left-aside"></el-aside>
      <el-container class="main-content">
        <el-main>
          <el-container class="main1">
            <el-main>
              <div class="source">
                <!--第一行-->
                <el-row :gutter="0">
                  <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                  </el-col>
                  <el-col :span="5" v-for="(item,index) in itemList" v-if="index < 4">
                    <div class="grid-content bg-purple">
                      <a href="//qianggou.yhd.com/1-47793680" target="_blank"
                         :title="item.title" title="英国进口 麦维他（Mcvitie's）原味全麦粗粮酥性消化饼干 400g"
                         :href="item.url" class="superSingle_a">
                        <div class="single_top">
                          <img class="single_top_img"
                               src="https://img11.360buyimg.com/mobilecms/s450x450_jfs/t5944/343/5666623751/199570/e50a1a36/596c93c7Nf4804b2e.jpg"
                               :src="item.url"
                               alt="">
                        </div>
                        <div class="single_bottom">
                          <div class="s_title">{{ item.s_title}}</div>
                          <div class="s_con">
                            <div class="s_num">
                              <span class="s_num_unit">￥</span><span class="s_num_act">{{ item.s_num}}</span>
                              <span class="s_num_underline"><span class="s_num_unit">￥</span><span class="s_num_line">{{ item.s_num_underline}}</span></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </el-col>
                </el-row>
                <!--第二行-->
                <el-row :gutter="0">
                  <el-col :span="(index===4)? 4 : 5"  v-for="(item,index) in itemList" v-if="index >= 4 && index < 9">
                    <div class="grid-content bg-purple">
                      <a href="//qianggou.yhd.com/1-47793680" target="_blank"
                         :title="item.title" title="英国进口 麦维他（Mcvitie's）原味全麦粗粮酥性消化饼干 400g"
                         :href="item.url" class="superSingle_a">
                        <div class="single_top" :class="(index===4)?'unique':''">
                          <img class="single_top_img"
                               src="https://img11.360buyimg.com/mobilecms/s450x450_jfs/t5944/343/5666623751/199570/e50a1a36/596c93c7Nf4804b2e.jpg"
                               :src="item.url"
                               alt="">
                        </div>
                        <div class="single_bottom">
                          <div class="s_title">{{ item.s_title}}</div>
                          <div class="s_con">
                            <div class="s_num">
                              <span class="s_num_unit">￥</span><span class="s_num_act">{{ item.s_num}}</span>
                              <span class="s_num_underline"><span class="s_num_unit">￥</span><span class="s_num_line">{{ item.s_num_underline}}</span></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </el-col>
                </el-row>

              </div>
            </el-main>

          </el-container>

          <el-container class="main2">
            <el-main>
              <div class="source">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="grid-content bg-purple"></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple"></div>
                  </el-col>
                </el-row>
              </div>
            </el-main>
          </el-container>

          <el-container class="main3">
            <el-main>main3</el-main>
          </el-container>

        </el-main>
      </el-container>
      <el-aside width="50px" class="right-aside"></el-aside>

    </el-container>


    <el-footer></el-footer>

  </el-container>

</template>

<script>
  import carousel from '../components/carousel'
  import header_bp from '../components/header-bp'
  import {requestItemList} from "../axios/api";

  export default {
    name: "Home",
    data: function () {
      return {
        itemList: requestItemList().then(res => {
          console.log(res);
          this.itemList = res.data.Data;
          console.log(this.itemList)
        })
      }
    },
    components: {
      'carousel': carousel,
      'header-bp': header_bp,
    }
  }
</script>

<style>

  .el-col:hover {
     transform:translate3d(0px,0px,15px);
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
    background: whitesmoke;
    -webkit-transition: 5ms time;
    -moz-transition: 5ms time;
    -ms-transition: 5ms time;
    -o-transition: 5ms time;
    transition: 5ms time;
  }

  body {
    margin: 0 0;
  }

  .single_bottom .s_con .s_num .s_num_underline {
    text-decoration: line-through;
    font-size: 12px;
    color: #999;
    font-weight: normal;
    margin-left: 4px;
  }

  .superSingle_a {
    text-decoration: none;
    color: black;
  }

  .single_bottom .s_title {
    width: 153px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    text-decoration: none;
    text-decoration-style: wavy;
  }

  .single_bottom .s_con {
    height: 33px;
    padding-top: 12px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .single_bottom .s_con .s_num {
    display: inline-block;
    color: #e50113;
    font-weight: bold;
    font-size: 14px;
    height: 20px;
  }

  .single_bottom {
    height: 61px;
    width: 150px;
    margin: 0 auto;
    position: relative;
  }

  .single_top {
    top: 10px;
    height: 135px;
    background: no-repeat center;
    text-align: center;
    position: relative;
  }

  .single_con .superSingle ul li .superSingle_a {
    width: 100%;
    height: 100%;
    display: block;
  }

  .main1 .grid-content {
    /*border-radius: 4px;*/
    min-height: 200px;
    background: white;

  }

  .main1 img {
    width: 110px;
    height: 110px;
  }

  .main2 .grid-content {
    /*border-radius: 4px;*/
    min-height: 400px;
  }

  .main-content section.el-container {
    margin: 50px 0;
    /*background: whitesmoke;*/
    background: url("http://img.yihaodianimg.com/front-homepage/index/images/super_single_bg.png?1be4686");
    /*background: #00a2d4;*/
  }

  .el-header {
    padding: 0;
  }

  .el-row {
    /*margin-bottom: 20px;*/
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
    /*border-radius: 4px;*/
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-header, .el-footer {
    background-color: whitesmoke;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
    height: 500px;
    width: 200px;
  }

  .el-main {
    color: #333;
    text-align: center;
    padding: 10px;
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
