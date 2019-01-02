<template>

  <div style="height: 180px;">
    <div class="header-bp">

      <div class="hd-header">

        <div class="hd-logo-area">
          <a href="" class="hd-logo">
            <img src="//img.yihaodianimg.com/front-homepage/global/images/logo/logo-new@2x.png" alt="" title="logo">
          </a>
          <a href="" class="hd-logo hd-slogan">
            <img src="//img13.360buyimg.com/img/jfs/t1/1396/16/14352/76151/5bdabbfaE8361975e/00939743b8194909.png"
                 alt="" title="slogan">
          </a>
        </div>

        <div class="hd-header-right">
          <div class="hd-head-search">
            <div class="hd-search">
              <input type="text" placeholder="图书超级品类日 满199减100">
              <button onclick="">
                <font-icon id="icon-sousuo"><a href="#"></a></font-icon>
              </button>
            </div>
            <div class="hotKeywordsShow">
              <ul>
                <li><a href="">进口食品</a></li>
                <li><a href="">果汁</a></li>
                <li><a href="">每日坚果</a></li>
                <li><a href="">牛奶</a></li>
                <li><a href="">进口</a></li>
              </ul>
            </div>
          </div>

          <div class="hd-mini-cart">
            <a href="" class="mini-cart">
              <font-icon id="icon-gouwuche"></font-icon>
              <span>购物车</span>
            </a>
          </div>

        </div>

        <div class="hd-header-nav">
          <ul>
            <li class="category-list">
              <a href="">
                <i class="iconfont icon-xitongcaidan"></i>
                <!--                <svg class="icon icon-xitongcaidan" aria-hidden="true">
                                  <use xlink:href="#icon-xitongcaidan"></use>
                                </svg>-->
                全部类目
                <i class="iconfont icon-moreunfold"></i>
              </a></li>
            <li><a href="">领金币</a></li>
            <li><a href="">领券中心</a></li>
            <li><a href="">充值</a></li>
            <li><a href="">超级单品</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBp",
    data:function () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import "../css/header-bp.scss";
</style>
