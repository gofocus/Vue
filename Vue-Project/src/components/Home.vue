<template>
  <el-container class="home">
    <header-bp class="home_header_bp"></header-bp>

<!--    <el-header style="height: 300px;">
      <carousel class="home_carousel"></carousel>
    </el-header>-->

    <el-container>
      <!--<el-aside width="85px" class="left-aside" style="background-color: #f5f5f5;"></el-aside>-->
      <!--<el-aside></el-aside>-->
      <el-container class="main-content">
        <el-main class="mainSpecial">

          <el-container class="main1">
            <el-main>
              <div class="source">
                <!--第一行-->
                <el-row :gutter="0">
                  <!--第一行single_one-->
                  <el-col :span="4" class="single_one">
                    <div class="grid-content bg-purple single_one">
                      <a href="">
                        <img class="single_logo" src="//img.yihaodianimg.com/front-homepage/index/images/single_img.png"
                             alt="">
                        <div class="single_text">限时 限量 品质 超值</div>
                      </a>
                    </div>
                  </el-col>
                  <!--第一行商品-->
                  <el-col :span="5" v-for="(item,index) in itemList" v-if="index < 4" :key="item.id">
                    <div class="grid-content bg-purple">
                      <a target="_blank" href="javascript:" @click="goItemDetails(item.id)"
                         :title="item.detail" class="superSingle_a">
                        <div class="single_top">
                          <img class="single_top_img"
                               :src="'http://localhost:8080/pic/'+item.pic"
                               alt="">
                        </div>
                        <div class="single_bottom">
                          <div class="s_title">{{ item.name}}</div>
                          <div class="s_con">
                            <div class="s_num">
                              <span class="s_num_unit">￥</span><span class="s_num_act">{{  item.price}}</span>
                              <span class="s_num_underline"><span class="s_num_unit">￥</span><span class="s_num_line">{{ item.price + 100}} </span></span>
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
                          :key="item.id">
                    <div class="grid-content bg-purple">
                      <a href="javascript:" @click="goItemDetails(item.id)" target="_blank"
                         :title="item.detail">
                        <div class="single_top" :class="(index===4)?'unique':''">
                          <img class="single_top_img"
                               :src="'http://localhost:8080/pic/' + item.pic"
                               alt="">
                        </div>
                        <div class="single_bottom">
                          <div class="s_title">{{ item.name}}</div>
                          <div class="s_con">
                            <div class="s_num">
                              <span class="s_num_unit">￥</span><span class="s_num_act">{{ item.price}}</span>
                              <span class="s_num_underline"><span class="s_num_unit">￥</span><span class="s_num_line">{{ item.price + 111}}</span></span>
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
                          <div class="main2-logo">
                            <img
                              src="//img30.360buyimg.com/img/jfs/t1/888/14/12147/3559/5bd12908E337b964b/aca063d10671c595.jpg"
                              alt="">
                          </div>
                          <div class="brand_pinpai">
                            <div>雀巢</div>
                            <div>满199减100</div>
                            <div>进入<i class="iconfont icon-xiangyoujiantou"></i></div>
                          </div>
                          <div class="brand_sp_bg"><img
                            src="//img14.360buyimg.com/img/jfs/t25105/108/1848839110/219852/92a17844/5bbd823aN8298bc56.jpg"
                            alt=""></div>
                          <div class="brand_sp_bg"><img
                            src="//img13.360buyimg.com/img/jfs/t24466/364/2305915215/208098/67e6d60/5b7b9167N1a48e42d.jpg"
                            alt=""></div>
                          <div class="brand_sp_bg"><img
                            src="//img30.360buyimg.com/img/jfs/t1/2693/30/10167/257782/5bc991d6Ef67a32a8/6f16f87ef693927c.jpg"
                            alt=""></div>
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
                          <div class="brand_pinpai floor_left">
                            <div>衣服清洁</div>
                            <div>两件5折</div>
                            <div>进入<i class="iconfont icon-xiangyoujiantou"></i></div>
                          </div>
                          <div class="brand_sp_bg"><img
                            src="//img11.360buyimg.com/img/jfs/t18862/16/2535614924/420677/17265718/5afa9a4dNdfdb1f23.jpg"
                            alt=""></div>
                          <div class="brand_sp_bg"><img
                            src="//img11.360buyimg.com/img/jfs/t3289/266/3781930398/366284/f7723b3c/57f8acf7N78c5df80.jpg"
                            alt=""></div>
                          <div class="brand_sp_bg"><img
                            src="//img30.360buyimg.com/img/jfs/t20734/73/999105781/289506/1ba00b5b/5b1e3268N1c0fa25a.jpg"
                            alt=""></div>
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

  export default {
    name: "Home",
    data: function () {
      return {
        itemList: this.$axios.get('/api').then(res=>{
          this.itemList = res.data;
        }),
      }
    },
    components: {
      'carousel': carousel,
      'header-bp': header_bp,
    },
    methods: {
      goItemDetails: function (itemId) {
        // this.$router.push("/item/" + itemId)
        //对于上面，假如itemDetail的路由变化，就需要相应的修改路径。这种写法可维护性（适应性）更高，
        this.$router.push({name: 'itemDetail', params: {itemId: itemId}})
      }
    }
  }
</script>

<style lang="scss">
  @import "../css/home.scss";
</style>
