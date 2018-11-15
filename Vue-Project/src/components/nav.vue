<template>
  <!--<div id="nav">-->
  <!--<img src="./assets/logo.png">-->
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
           background-color="#f4f4f4" text-color="black" active-text-color="#ffd04b">
    <!--<el-menu-item index="1" @click="$router.push({name:'home'})">首页</el-menu-item>
    &lt;!&ndash;下面这种写法无法映射到"/"，会映射到"/home"&ndash;&gt;
    &lt;!&ndash;<el-menu-item index="1" @click="$router.push('home')">首页</el-menu-item>&ndash;&gt;
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
    <el-menu-item index="4" id="test"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    &lt;!&ndash;<el-menu-item class="header-login" index="5" @click="dialogFormVisibleParent=true"><span>Sign in</span>
    </el-menu-item>&ndash;&gt;-->

    <!--<el-menu-item class="header-login" index="5"><span @click="$router.push('login')" >Sign in</span></el-menu-item>-->
    <!--.sync实现双向数据绑定-->
    <loginDialog :dialogFormVisibleParent.sync="dialogFormVisibleParent"></loginDialog>

    <div class="hd_indxProvce">
      <a href="">
        <font-icon id="icon-shouhuodizhi"></font-icon>
        <span>送货地址</span>
      </a>
    </div>

    <ul class="topbar_right">
      <li class="global_unlogin">
        <div>
          <span class="hd_login_span">{{ greeting }}</span>
          <!--<a v-if="currentUser!==''">-->
          <a v-if="currentUser!== null">
            <span>{{ currentUser }}</span>
            <button class="logout" @click="logout">登出</button>
          </a>
          <template v-else>
            <a href="javascript:" class="hd_login_link" target="_self" @click="dialogFormVisibleParent=true">登录</a>
            <a href="" class="hd_register_link" target="_blank">注册</a>
          </template>
        </div>
      </li>
      <li>
        <div class="hd_menu">
          <a href="" target="_blank">
            <font-icon id="icon-wodejuhuasuan"></font-icon>
            <span>会员俱乐部</span>
          </a>
        </div>
      </li>
      <li>
        <div class="hd_menu">
          <a href="" target="_blank">
            <font-icon id="icon-wodedingdan"></font-icon>
            <span>我的订单</span>
          </a>
        </div>
      </li>
    </ul>

  </el-menu>

</template>

<script>
  import loginDialog from "./loginDialog.vue";
  import {mapGetters} from 'vuex';
  import {currentUser} from "../vuex/getters";

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
        },
      }
    },
    computed: {
      greeting: function () {
        const date = new Date();
        const hour = date.getHours();
        if (hour > 6 && hour < 12) return "上午好,";
        else if (hour >= 12 && hour < 18) return "下午好,";
        else return "晚上好,";
      },
      localStorage: function () {
        if (sessionStorage.getItem('currentUser'))
          return sessionStorage.getItem('currentUser');
      },
      ...mapGetters(
        ['currentUser'])
    },
    mounted: function () {
      //刷新页面 vuex的数据会消失，通过sessionStorage将currentUser重新赋值给vuex
      const currentUser = sessionStorage.getItem("currentUser");
      if (currentUser !== null) {
        this.$store.commit('userStatus', currentUser);
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      logout: function () {
        this.$store.commit('userStatus', null);
      }
    },
    components: {
      loginDialog: loginDialog,
    },
  }
</script>

<style>
  .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }

  .logout {
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  .hd_indxProvce {
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding-left: 10px;
  }

  .icon-wodedingdan, .icon-wodejuhuasuan {
    font-size: 13px;
  }

  .icon-shouhuodizhi {
    font-size: 13px;
    color: red;
  }

  .topbar_right a, .hd_indxProvce a {
    text-decoration: none;
    color: #666;
  }

  ul > li > .hd_menu > a:hover, .hd_register_link:hover {
    color: #ff4040;
  }

  .topbar_right > li {
    height: 30px;
    line-height: 30px;
    list-style: none;
    float: left;
    font-size: 12px;
    padding: 0 8px;
  }

  .hd_login_link {
    color: #ff4040 !important;
  }

  .hd_register_link {
    padding-left: 8px;
    color: #aaa;
  }

  .el-menu-item, .el-submenu__title {
    background-color: rgb(244, 244, 244) !important;
  }

  .topbar_right {
    float: right;
  }

  .header-login {
    position: absolute;
    right: 5px;
  }

  .el-menu--horizontal > .el-menu-item,
  li.el-menu-item,
  div.el-submenu__title,
  .el-menu--horizontal > .el-submenu .el-submenu__title,
  .el-submenu {
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }

  .el-submenu__title i {
    color: whitesmoke;
  }

</style>
