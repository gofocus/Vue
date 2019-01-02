<template>
  <el-input-number id="el-input-number" :min="1" v-model="cartNum" controls-position="right"></el-input-number>
</template>

<script>
  export default {
    name: "BaseInputNumber",
    data: function () {
      return {
        cartNum: 0
      }
    }
  }
</script>

<style lang="scss">
  #el-input-number {
    float: left;
    width: 70px;
    height: 50px;
    .el-input-number__decrease:hover, .el-input-number__increase:hover {
      border: none;
    }
    .el-input-number__increase, .el-input-number__decrease {
      line-height: 25px;
      width: 25px;
    }

    .el-input__inner {
      height: 50px;
      padding-right: 23px;
      padding-left: 0;
      text-align: center;
    }
  }

</style>
