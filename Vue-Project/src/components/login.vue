<template>
    <el-form :model="form" label-width="80px">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label=""></el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
      data: function () {
        return {
          form:{
            email: '',
            password:''
          }
        }
      }
    }
</script>

<style scoped>

</style>
