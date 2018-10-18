<template>
  <div id="nav">
    <!--<img src="./assets/logo.png">-->
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" id="testmenu">
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
      <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <el-menu-item class="header-login" index="5" @click="dialogFormVisibleParent=true"><span>Sign in</span></el-menu-item>
      <!--<el-menu-item class="header-login" index="5"><span @click="$router.push('login')" >Sign in</span></el-menu-item>-->
    </el-menu>

    <!--.sync实现双向数据绑定-->
    <loginDialog :dialogFormVisibleParent.sync="dialogFormVisibleParent"></loginDialog>

  </div>

</template>

<script>
  import loginDialog from "./loginDialog.vue";
  import carousel from "./carousel.vue";

  export default {
    data: function () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogFormVisibleParent: false,
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },
    components: {
      loginDialog: loginDialog,
    },
/*    created: function () {
      alert("123")
      alert( $('#header-nav').height())
      $('#testmenu').css('height', $('#header-nav').height())
    }*/
  }
</script>

<style>
  .header-login {
    position: absolute;
    right: 5px;
    /*height: 31px;*/
    /*line-height: 30px;*/

  }
/*  #nav {
    box-sizing: border-box;
  }*/
/*  el-menu {
    box-sizing: border-box;
  }*/
/*  .el-menu-demo .el-menu--horizontal .el-menu-item {
    height: 31px;
    line-height: 30px;
  }*/

/*  .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 31px;
    line-height: 31px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    height: 31px;
    line-height: 31px;
  }*/
/*  .el-menu-item.is-disabled{
    height: 31px;
    line-height: 31px;
  }*/

</style>
