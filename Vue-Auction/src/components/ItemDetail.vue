<template>
  <div class="item-detail">
    <router-view></router-view>
    <HeaderBp class="item-detail-header-bp"/>

    <el-container>
      <el-header style="height: 20px;">
        <div class="detail-crumb">
          <!--<router-link to="/">首页</router-link>-->
          <button @click="goIndex">首页</button>
        </div>

      </el-header>
      <el-main>
        <el-container class="detail-1" v-if="item!==null">
          <el-main>
            <el-row>
              <el-col :span="8">
                <div class="detail-1-left">
                  <div class="detail1-pic">
                    <img :src="$itemPicUrl + item.pic" alt="商品图片">
                  </div>
                  <div class="detail1-itemInfo">
                    <span>商品编号&nbsp;{{item.id}}</span>
                    <span @mouseover="collectIcon=true" @mouseleave="collectIcon=false">
                      <font-icon :id="collectIcon?'icon-jushoucanggift':'icon-jushoucang'"></font-icon>&nbsp;关注</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="detail-1-middle">
                  <div class="name-detail">
                    <span>{{item.name}}&nbsp;{{item.detail}}</span>
                  </div>
                  <div class="price">
                    <ul>
                      <li>价格</li>
                      <li>￥{{ item.price}}</li>
                    </ul>
                  </div>
                  <div class="cart">
                    <inputNumber></inputNumber>
                    <a href="javascript:">
                      <font-icon id="icon-gouwuche"></font-icon>
                      <span>加入购物车</span></a></div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="detail-1-right"></div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

        <el-container class="detail-2">
          <el-aside width="250px">
            <div>用户还购买了</div>
          </el-aside>
          <el-main class="detail-2">
            <el-row>
              <el-col :span="24">
                <div class="grid-content detail-one">详情2</div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

      </el-main>
      <el-footer>footer</el-footer>
    </el-container>


  </div>
</template>

<script>
  import HeaderBp from './HeaderBp'
  import InputNumber from './BaseInputNumber';

  export default {
    name: "ItemDetail",

    components: {
      HeaderBp: HeaderBp,
      InputNumber: InputNumber
    },

    props: ['itemId'],

    data: function () {
      return {
        // itemId: this.$route.params.itemId,
        item: null,
        collectIcon: false,
      }
    },

    created: function () {
      const id = this.itemId;
      this.$axios.post(`/api/items/getItemInfo`, id, {headers: {'Content-Type': 'application/json'}}).then(res => {
        this.item = res.data;
      })
    },
//     beforeRouteEnter(to, from, next) {
//       //检查权限，登录拦截在全局守卫里进行
//       next(vm => {
//         console.log("传入回调函数，仅限beforeRouteEnter");
//         if (vm.$store.state.currentUser) {
//           if (vm.$hasPermission(to.name)) {
//             console.log("啥也不做")
//           }
//           else {
//             console.log("已登陆，无权访问,跳转页面");
//             // next({name: "home"});
//             // next({path: "/"});
//             next("/");
//           }
//         }
// /*        else {
//           console.log("未登陆，无权访问");
//           next("/");
//         }*/
//       })
//     }
    mounted: function () {
    },
    methods: {
      goIndex: function () {
        this.$router.push('/');
      },
    },

  }

</script>

<style lang="scss">
  @import "../css/itemDetail";

  /*  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
      border: 1px solid;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 300px;
    }*/

</style>
