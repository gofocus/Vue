<template>
  <div class="itemDetail" >
    <!--<header-bp class="itemDetail_header_bp" :searchBorder="searchBorder"></header-bp>-->
    <header-bp class="itemDetail_header_bp"></header-bp>

    <el-container>
      <el-header style="height: 20px;">
        <div class="detail_crumb">
          <!--<router-link to="/">首页</router-link>-->
          <button @click="goIndex">首页button</button>
        </div>

      </el-header>
      <el-main>
        <el-container class="detail_1">
          <el-main>
            <el-row>
              <el-col :span="8">
                <div class="detail1_pic">
                  <img :src=" this.$itemPicUrl + item.pic" alt="">
                </div>
                <div class="detail1_itemInfo">
                  <div>商品编号{{item.id}}</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div><p>12</p></div>
              </el-col>
              <el-col :span="4">
                <div><p>12</p></div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

        <el-container class="detail_2">
          <el-aside width="250px">
            <div>用户还购买了</div>
          </el-aside>
          <el-main class="detail_2">
            <el-row>
              <el-col :span="24">
                <div class="grid-content detail_one">详情2</div>
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
  import header_bp from '../components/header-bp'
  // import {requestItemInfo} from '../axios/api';

  export default {
    name: "itemDetail",
    components: {
      'header-bp': header_bp
    },
    data: function () {
      return {
        itemId: this.$route.params.itemId,
        item: {},
        // searchBorder: 'border: 1px solid red',
      }
    },
    methods:{
      goIndex:function () {
        this.$router.push('/');
      }
    },

    mounted:
      function () {
        const id = this.itemId;
        this.$axios.post(`/api/items/getItemInfo`, id, {headers: {'Content-Type': 'application/json'}}).then(res => {
          // requestItemInfo(id).then(res => {
          console.log(res.data);
          this.item = res.data;
        })
      }
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
