<template>
  <el-container>
    <el-header></el-header>
    <button @click="alert('test')">123</button>
    <el-main>
      <!--TODO 中间显示剩余秒，倒计时结束显示拍卖结束-->
      <el-progress type="circle" :percentage="percentage"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-plus" @click="countDown()"></el-button>
        </el-button-group>
      </div>
    </el-main>
    <el-main>
      <el-tabs v-model="activeName">
        <el-tab-pane label="当前拍卖" name="auction_now" >

          <el-table :data="currentAuction">
            <el-table-column prop="gear" label="装备"></el-table-column>
            <el-table-column prop="bottomPoint" label="底分"></el-table-column>
            <el-table-column prop="count_down" label="剩余时间"></el-table-column>
            <el-table-column label="操作" width="220"> <!--TODO 宽度自适应-->
              <template scope="scope">
                <el-button>出分</el-button>
                <el-button>撤销</el-button>
              </template>
            </el-table-column>
          </el-table>
          <p>我的出分：</p>

          <el-form>
            <el-form-item>
              <el-input placeholder="输入分数" size="medium" style="width: 100px;" v-model="form.bid_point"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">出分</el-button>
              <el-button>取消</el-button>
            </el-form-item>
            <el-input class="user_id" type="hidden" v-model="form.user_id"></el-input>
          </el-form>

        </el-tab-pane>

      </el-tabs>
    </el-main>

    <el-main>
      <!--拍卖记录-->
      <!--TODO 动态刷新历史拍卖记录-->
      <el-tabs v-model="activeName2">
        <el-tab-pane label="今日拍卖" name="auction_today">
          <el-table :data="auctionHistoryList" style="width: 100%">
            <el-table-column prop="gear" label="装备"></el-table-column>
            <el-table-column prop="auctioneer" label="拍卖师"></el-table-column>
            <el-table-column prop="highestBid" width="100" label="最高出分"></el-table-column>
            <el-table-column prop="secondBid" width="100" label="第二出分"></el-table-column>
            <el-table-column prop="successfulBidder" label="中标人"></el-table-column>
            <el-table-column prop="auctionTime" label="拍卖时间"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="历史拍卖" name="auction_past">
          <el-table :data="auctionHistoryList" style="width: 100%">
            <el-table-column prop="gear" label="装备"></el-table-column>
            <el-table-column prop="auctioneer" label="拍卖师"></el-table-column>
            <el-table-column prop="highestBid" width="100" label="最高出分"></el-table-column>
            <el-table-column prop="secondBid" width="100" label="第二出分"></el-table-column>
            <el-table-column prop="successfulBidder" label="中标人"></el-table-column>
            <el-table-column prop="auctionTime" label="拍卖时间"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <el-button type="text" @click="dialogVisible = true">新建拍卖</el-button>

      <el-dialog
        title="创建新的拍卖"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="装备名称">
            <el-input v-model="newAuction.gear"></el-input>
          </el-form-item>
          <el-form-item label="底分">
            <el-input v-model="newAuction.bottomPoint"></el-input>
            <button>20</button>
            <button>30</button>
          </el-form-item>
          <!--TODO 默认最低分、倒计时时间-->
          <!--TODO 修改默认最低分、默认倒计时时间-->
          <el-form-item label="倒计时">
            <el-input v-model="newAuction.countDown"></el-input>
            <button>30</button>
            <button>45</button>

          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false" v-on:click="onsubmit2">确 定</el-button>
        </span>
      </el-dialog>

    </el-main>

  </el-container>

</template>

<script>

  export default {
    name: "Auction",
    components: {},
    data: function () {
      return {
        dialogVisible: false,
        activeName: 'auction_now',
        activeName2: 'auction_today',
        auctionHistoryList: [],
        currentAuction: [{
          id: '',
          gear: '风剑',
          bottomPoint: '10',
          highestBid: '',
          secondBid: '',
          successfulBidder: '',
        }],
        form:{
          // auction_id: '',
          user_id: '',
          bid_point: '',
        },
        newAuction:{
          gear: '风剑',
          bottomPoint: '20',
          countDown: '10'
        },
        percentage: 10,
        /*colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],*/
        time_left:0,
        timer: null,

      }
    },
    mounted: function () {
      this.$axios.get("/api/auction/history").then(res => {
        this.auctionHistoryList = res.data;
      });
      this.$axios.post("/api/user/currentUser").then(res => {
        this.form.user_id = res.data.userid;
      });

    },
    methods: {
      bid: function () {

      },
      handleClose: function () {

      },
      // 出分
      onSubmit: function () {
        const bid = this.$qs.stringify({
          // auctionId:this.form.auction_id,
          userId:this.form.user_id,
          bidPoint: this.form.bid_point
        });
        this.$axios.post("/api/auction/bid",bid).then(res => {
          console.log("success");
        })
      },
      // 新建拍卖
      onsubmit2: function () {
        const auction = this.$qs.stringify({
          gear: this.newAuction.gear,
          bottomPoint: this.newAuction.bottomPoint,
          countDown: this.newAuction.countDown,
        });
        this.$axios.post("/api/auction/insert", auction).then(res => {
          //将返回的自增主键保存下来
          // this.form.auction_id = res.data;
          /*setTimeout(()=>{
            this.$axios.post("/api/auction/deal",).then(res => {
              alert("success");
            })
          }, this.count_down)*/
        })
      },
      countDown() {
        let time_left = this.newAuction.countDown;
        let countDown = this.newAuction.countDown;
        this.timer = setInterval(() => {
          this.percentage = Math.round((--time_left / countDown) * 100);
          console.log(time_left);
          if (time_left <= 0) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      }
    }
  }
</script>

<style scoped>

</style>
