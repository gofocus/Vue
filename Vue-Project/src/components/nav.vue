<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" @click="$router.push({name:'home'})">首页</el-menu-item>
      <!--下面这种写法无法映射到"/"，会映射到"/home"-->
      <!--<el-menu-item index="1" @click="$router.push('home')">首页</el-menu-item>-->
      <el-submenu index="2">
        <template slot="title">我的账户</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      <el-menu-item class="header-login" index="5"><span @click="dialogFormVisible=true">Sign in</span></el-menu-item>
      <!--<el-menu-item class="header-login" index="5"><span @click="$router.push('login')" >Sign in</span></el-menu-item>-->
    </el-menu>
    <router-view></router-view>
    <loginDialog :dialogFormVisible.sync="dialogFormVisible"></loginDialog>
    <!--<loginDialog :dialogFormVisible="dialogFormVisible" @visibilityChange="changeVisibility"></loginDialog>-->

  </div>


</template>

<script>
  import {requestLogin} from "../axios/api";
  import loginDialog from "./loginDialog.vue";

  export default {
    data: function () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogFormVisible: false,
        form: {
          email: 'admin',
          password: '111111',
        },
        checked: true,
        logining: false,
        rules: {
          email: [
            {required: true, message: '输入邮箱', trigger: 'change'},
            // { type: 'email', message:'输入正确的邮箱', trigger: 'change'}
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: '输入密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在6-20个字符之间', trigger: 'change'},
          ]
        }
      }
    },
    methods: {
      /*changeVisibility(visibility){
        this.dialogFormVisible = visibility;
      },*/
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = {email: this.form.email, password: this.form.password};
            loginParams = JSON.stringify(loginParams);

            requestLogin(loginParams).then(res => {
              console.log(res.data, res);
              this.logining = false;
              if (res.status !== 200) {
                this.$message({
                  message: '邮箱/密码错误',
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(res.data.user));
                this.dialogFormVisible = false;
                this.$message({
                  message: '登陆成功',
                  type: 'success'
                });
                this.$router.push({path: '/'});
              }
            }).catch((error) => {
              this.logining = false;
              console.log(error)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    components: {
      'loginDialog': loginDialog
    }
  }
</script>

<style>
  .header-login {
    position: absolute;
    right: 5px;
  }

</style>
