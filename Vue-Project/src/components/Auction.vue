<template>
  <el-table :data="auctionHistoryList" style="width: 100%">
    <el-table-column prop="gear" label="装备"></el-table-column>
    <el-table-column prop="auctioneer" label="拍卖师"></el-table-column>
    <el-table-column prop="highestBid" width="100" label="最高出分"></el-table-column>
    <el-table-column prop="secondBid" width="100" label="第二出分"></el-table-column>
    <el-table-column prop="successfulBidder" label="中标人"></el-table-column>
    <el-table-column prop="auctionTime" label="拍卖时间"></el-table-column>

  </el-table>
</template>

<script>
    export default {
        name: "Auction"
    }
</script>

<style scoped>

</style>
