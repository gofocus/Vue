<template>

  <div style="height: 180px;">
    <div class="header_bp">

      <div class="hd_header">

        <div class="hd_logo_area">
          <a href="" class="hd_logo">
            <img src="//img.yihaodianimg.com/front-homepage/global/images/logo/logo_new@2x.png" alt="" title="logo">
          </a>
          <a href="" class="hd_logo hd_slogan">
            <img src="//img13.360buyimg.com/img/jfs/t1/1396/16/14352/76151/5bdabbfaE8361975e/00939743b8194909.png"
                 alt="" title="slogan">
          </a>
        </div>

        <div class="hd_header_right">
          <div class="hd_head_search">
            <div class="hd_search">
              <label for=""></label>
              <input type="text" class="hd_search_input" placeholder="图书超级品类日 满199减100">
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

          <div class="hd_mini_cart">
            <a href="" class="mini_cart">
              <font-icon id="icon-gouwuche"></font-icon>
              <span>购物车</span>
            </a>
          </div>

        </div>

        <div class="hd_header_nav">
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
    name: "header-bp"
  }
</script>

<style scoped>

  .icon-xitongcaidan{
    position: relative;
    left: -2px;
  }

  .icon-moreunfold {

  }


  .category-list {
    background-color: red !important;
  }

  .category-list a {
    color: whitesmoke;
    display: block;
    padding: 0 15px;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .hotKeywordsShow {
    position: absolute;
    bottom: 4px;
  }

  .hotKeywordsShow a {
    color: #aaa;
    font-size: 14px;
    margin-left: 8px;
  }

  .hotKeywordsShow ul {
    padding-left: 25px;
  }

  .hotKeywordsShow li {
    float: left;
  }

  .hd_header_nav {
    position: absolute;
    line-height: 38px;
    bottom: 0;
  }

  .hd_header_nav li {
    float: left;
    background-color: #fff;
    font-size: 16px;
    margin: 0 10px;
  }

  .hd_header_nav li:hover {
    color: #ff4040;
  }

  .hd_header_nav ul {
    margin: 0;
    padding-left: 0;
  }

  .hd_mini_cart {
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid #e2e2e2;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
  }

  .mini_cart {
    height: 40px;
    display: block;
    color: #000;
    line-height: 40px;
    padding: 0 20px;
  }

  .hd_head_search {
    position: relative;
    height: 100%;
  }

  .hd_search {
    position: absolute;
    border-radius: 100px;
    border: 1px solid #e2e2e2;
    background: 0;
  }

  .hd_search:hover {
    border: 1px solid red;
  }

  .hd_search_input {
    padding-left: 32px;
    outline: 0 none;
    border: 0 none;
    width: 476px;
    line-height: 38px;
    /*height: 38px;*/
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    font-size: 14px;
    float: left;
    background-color: transparent;
  }

  button {
    float: left;
    height: 42px;
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    position: absolute;
    right: 0;
  }

  .icon-sousuo {
    font-size: 24px;
    padding-right: 15px;
  }

  .header_bp {
    margin: 0 auto;
    height: 180px;
    width: 100%;
    background: url(//img10.360buyimg.com/img/jfs/t1/9777/13/4381/33990/5bdab14eEe1811832/634b2008eab9f84e.jpg) center no-repeat
  }

  .hd_header {
    width: 1070px;
    height: 180px;
    margin: 0 auto;
    position: relative;
  }

  .hd_logo_area {
    float: left;
    width: 300px;
    height: 140px;
  }

  .hd_logo {
    width: 140px;
    height: 140px;
    display: block;
    float: left;
  }

  .hd_logo img {
    width: 100%;
    height: 100%;
  }

  .hd_slogan {
    width: 160px;
    height: 90px;
    position: relative;
    top: 29px;
  }

  .hd_header_right {
    float: right;
    width: 650px;
    margin-top: 50px;
    height: 70px;
  }


</style>
