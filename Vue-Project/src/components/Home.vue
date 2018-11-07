<template>
  <el-container>
    <header-bp></header-bp>

    <el-header class="header-carousel" style="height: 300px;">
      <carousel></carousel>
    </el-header>

    <el-container>
      <!--<el-aside width="85px" class="left-aside" style="background-color: #f5f5f5;"></el-aside>-->
      <!--<el-aside></el-aside>-->
      <el-container class="main-content">
        <el-main class="main2special">
          <el-container class="main1">
            <el-main>
              <div class="source">
                <!--第一行-->
                <el-row :gutter="0">
                  <el-col :span="4" class="single_one">
                    <div class="grid-content bg-purple single_one">
                      <a href="">
                        <img class="single_logo" src="//img.yihaodianimg.com/front-homepage/index/images/single_img.png"
                             alt="">
                        <div class="single_text">限时 限量 品质 超值</div>
                      </a>
                    </div>
                  </el-col>
                  <el-col :span="5" v-for="(item,index) in itemList" v-if="index < 4" :key="item">
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
                  <el-col :span="(index===4)? 4 : 5" v-for="(item,index) in itemList" v-if="index >= 4 && index < 9"
                          :key="item">
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
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content bg-purple main2-left">
                      <div class="main2-title">
                        <a href="">
                          <span class="main2-title-big">超级品牌 </span>
                          <span class="main2-title-small"> /&nbsp;超级品牌/精品荟萃</span>
                        </a>
                      </div>
                      <div class="main2-content1">
                        <a href="">
                          <img
                            src="//img10.360buyimg.com/img/jfs/t1/8178/28/2183/49252/5bd13a64E55783117/199e12de8f4eb8d0.jpg"
                            alt="">
                          <div class="brand_bg_img_mc"></div>
                          <div class="logo">
                            <img
                              src="//img30.360buyimg.com/img/jfs/t1/888/14/12147/3559/5bd12908E337b964b/aca063d10671c595.jpg"
                              alt="">
                          </div>
                          <div class="brand_pinpai">
                            <div>雀巢</div>
                            <div>满199减100</div>
                            <div>进入<i class="iconfont icon-xiangyoujiantou"></i></div>
                          </div>
                          <div class="brand_sp_bg"><img src="//img14.360buyimg.com/img/jfs/t25105/108/1848839110/219852/92a17844/5bbd823aN8298bc56.jpg" alt=""></div>
                          <div class="brand_sp_bg"><img src="//img13.360buyimg.com/img/jfs/t24466/364/2305915215/208098/67e6d60/5b7b9167N1a48e42d.jpg" alt=""></div>
                          <div class="brand_sp_bg"><img src="//img30.360buyimg.com/img/jfs/t1/2693/30/10167/257782/5bc991d6Ef67a32a8/6f16f87ef693927c.jpg" alt=""></div>
                        </a>
                      </div>
                      <div class="main2-content2">
                        <a href="">
                          <img
                            src="//img20.360buyimg.com/img/jfs/t1/4086/13/12005/35020/5bd167f0Ed05023b8/81c2464635e55f3a.jpg"
                            alt="">
                          <div class="brand_bg_img_mc"></div>
                        </a>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple main2-right">
                      <div class="main2-title main2-right-title">
                        <a href="">
                          <span class="main2-title-big main2-right-title-big">超级品类</span>
                          <span class="main2-title-small main2-right-title-small"> /&nbsp;超级品类/品质甄选</span>
                        </a>
                      </div>
                      <div class="main2-content1">
                        <a href="">
                          <img
                            src="//img13.360buyimg.com/img/jfs/t1/4804/30/11675/51143/5bd01a6eE5906c2da/f519fde738c6a39e.jpg"
                            alt="">
                          <div class="brand_bg_img_mc"></div>
<!--                          <div class="logo">
                            <img
                              src="//img30.360buyimg.com/img/jfs/t1/888/14/12147/3559/5bd12908E337b964b/aca063d10671c595.jpg"
                              alt="">
                          </div>-->
                          <div class="brand_pinpai floor_left">
                            <div>衣服清洁</div>
                            <div>两件5折</div>
                            <div>进入<i class="iconfont icon-xiangyoujiantou"></i></div>
                          </div>
                          <div class="brand_sp_bg"><img src="//img11.360buyimg.com/img/jfs/t18862/16/2535614924/420677/17265718/5afa9a4dNdfdb1f23.jpg" alt=""></div>
                          <div class="brand_sp_bg"><img src="//img11.360buyimg.com/img/jfs/t3289/266/3781930398/366284/f7723b3c/57f8acf7N78c5df80.jpg" alt=""></div>
                          <div class="brand_sp_bg"><img src="//img30.360buyimg.com/img/jfs/t20734/73/999105781/289506/1ba00b5b/5b1e3268N1c0fa25a.jpg" alt=""></div>
                        </a>
                      </div>
                      <div class="main2-content2">
                        <a href="">
                          <img
                            src="//img12.360buyimg.com/img/jfs/t1/8988/9/1868/65513/5bd01aaaE46c0126e/68bb26effc5d4af5.jpg"
                            alt="">
                          <div class="brand_bg_img_mc"></div>
                        </a>

                      </div>
                    </div>
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
      <!--<el-aside width="85px" class="right-aside" style="background-color: #f5f5f5;"></el-aside>-->
      <!--<el-aside></el-aside>-->

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
  .floor_left {
    width: 210px!important;
  }

  .brand_sp_bg {
    float: left;
    position: relative;
    width: 80px;
    margin-top: 25px;
    margin-right: 10px;
  }
  .brand_sp_bg>img {
    width: 80px;
    height: 80px;
  }

  .brand_pinpai div:first-child {
    font-weight: bold;
    margin-top: 25px;
    line-height: 18px;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .brand_pinpai div:last-child {
    margin-top: 10px;
    border: 1px solid white;
    border-radius: 100px;
    margin-left: 20px;
    width: 63px;
    text-indent: 12px;
    font-size: 14px;
    line-height: 20px;
  }

  .brand_pinpai {
    position: relative;
    color: white;
    width: 140px;
    height: 100%;
    float: left;
    text-indent: 25px;
  }

  .logo {
    margin-top: 40px;
    margin-left: 20px;
    float: left;
    position: relative;
    top: 0;
  }

  .logo img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  .main2-left {
    margin-right: 5px;
  }

  .main2-right {
    margin-left: 5px;
  }

  .main2special {
    margin: 0 100px !important;
  }

  .main2-content1 {
    margin-left: 20px;
    position: relative;
    height: 130px;
  }

  .main2-content1 a > img {
    width: 490px;
    height: 130px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .main2-content2 {
    margin-top: 20px;
    margin-left: 20px;
    position: relative;
  }

  .main2-content2 img {
    width: 490px;
    height: 130px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .brand_bg_img_mc {
    opacity: 0.4;
    background-color: #000;
    width: 490px;
    height: 130px;
    position: absolute;
  }

  .main2-left, .main2-right {
    background: #ffffff;
  }

  .main2-title {
    margin-left: 19px;
    line-height: 67px;
    overflow: hidden;
  }

  .main2-title-big {
    color: #493188;
    font-size: 26px;
    float: left;
    margin-right: 7px;
  }

  .main2-title-small {
    color: rgba(69, 52, 127, 0.7);
    font-size: 16px;
    float: left;
  }

  .main2-right-title-big {
    color: #AC8602;
    font-size: 26px;
    float: left;
    margin-right: 7px;
  }

  .main2-right-title-small {
    color: rgba(166,135,6,0.7);
    font-size: 16px;
    float: left;
  }


  .single_one {
    background-color: transparent !important;
  }

  .single_text {
    position: absolute;
    top: 60px;
    left: 4px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: bold;
  }

  .single_logo {
    width: 129px !important;
    height: 36px !important;
    position: absolute;
    top: 20px;
    left: 0;
  }

  .main1 .el-row > div:not(.single_one):hover {
    transform: translate3d(0px, 0px, -65px);
    box-shadow: 0 0 40px rgba(0, 0, 0, .4);
    background: whitesmoke;
  }

  body {
    margin: 0 0;
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: #000;
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
    min-height: 362px;
  }

  .main-content section.el-container.main1 {
    margin: 50px 0;
    /*background: whitesmoke;*/
    background: url("http://img.yihaodianimg.com/front-homepage/index/images/super_single_bg.png?1be4686");
    /*background: #00a2d4;*/
    padding: 10px;
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
    /*width: 200px;*/
  }

  .el-main {
    color: #333;
    /*text-align: center;*/
    padding: 0;
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
