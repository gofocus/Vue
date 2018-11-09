<template>
  <div>
    <header-bp></header-bp>
    <el-container>
      <el-header>
        <div>
          <router-link to="/">首页</router-link>
        </div>

      </el-header>
      <el-main>
        <el-container class="detail_1">
          <el-main>
            <el-row>
              <el-col :span="8">
                <div class="detail1_pic">
                  <!--<img :src="$itemPicUrl + itemId" alt="">-->
                </div>
                <div class="detail1_itemInfo"></div>
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
  import {requestItemInfo} from '../axios/api';

  export default {
    name: "itemDetail",
    components: {
      'header-bp': header_bp
    },
    data: function () {
      return {
        itemId: this.$route.params.itemId,
        // item: function () {
        //   console.log()
        //   return requestItemInfo(this.itemId).then(res => res.data);
        // }
      }
    },
    computed: {
      item: {
        get: function () {
          // var id = {itemId: this.itemId};
          var id = this.itemId;
          // id = JSON.stringify(id);
          requestItemInfo(id).then(res => {
            console.log(res.data);
            return res.data;
          })
        },
        set:function () {

        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../css/itemDetail";

  .el-header, .el-footer {
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
  }

  body {
    margin: 0 0;
  }
</style>
