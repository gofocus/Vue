<template>
  <div class="nav">
    <!--<img src="./assets/logo.png">-->
    <el-menu
      background-color="#f4f4f4" text-color="black" active-text-color="#ffd04b"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect">

      <!--<el-menu-item class="header-login" index="5"><span @click="$router.push('login')" >Sign in</span></el-menu-item>-->
      <!--.sync实现双向数据绑定-->
      <!--<loginDialog :dialogFormVisibleParent.sync="dialogFormVisibleParent" ref="loginDialog"></loginDialog>-->
      <!--组件：登录dialog-->
      <LoginDialog ref="loginDialog" @keyup.enter="handleSubmit"/>

      <div class="hd_indxProvce">
        <a href="">
          <FontIcon id="icon-shouhuodizhi"/>
          <span>送货地址</span>
        </a>
      </div>

      <ul class="topbar_right">
        <li class="global_unlogin">
          <div>
            <span class="hd_login_span">{{ greeting }}</span>
            <a href="javascript:" class="hd_login_link" target="_self" @click="change_loginDialogVisible">登录2</a>
            <template v-if="isLogin">
              <a class="hd_login_currentUser"><span>{{ currentUser.username }}</span></a>
              <a href="javascript:" class="hd_login_logout" @click="logout">登出</a>
            </template>
            <template v-else>
              <a
                href="javascript:" class="hd_login_link" target="_self"
                id="test134" ref="testClass"
                @click="change_loginDialogVisible"
              >登录</a>
              <a href="javascript:" class="hd_register_link" target="_blank" @customEvent="foo">注册</a>
              <a href="javascript:" class="hd_login_logout" @click="logout">登出</a>
            </template>

          </div>
        </li>
        <li>
          <div class="hd_menu">
            <a href="" target="_blank">
              <FontIcon id="icon-wodejuhuasuan"/>
              <span>会员俱乐部</span>
            </a>
          </div>
        </li>
        <li>
          <div class="hd_menu">
            <a href="" target="_blank">
              <FontIcon id="icon-wodedingdan"/>
              <span>我的订单</span>
            </a>
          </div>
        </li>
      </ul>

    </el-menu>
  </div>
</template>

<script>
  import LoginDialog from "./LoginDialog.vue";
  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';

  export default {
    data: function () {
      return {
        // initial: this.initial_vuex_currentUser(),
        activeIndex: '1',
        activeIndex2: '1',
        // dialogFormVisibleParent: false,
        form: {
          email: 'admin',
          password: '111111',
        },
        checked: true,
        loginIng: false,
        rules: {
          email: [
            {required: true, message: '输入邮箱', trigger: 'change'},
            // { type: 'email', message:'输入正确的邮箱', trigger: 'change'}
          ],
          password: [
            {required: true, message: '输入密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在6-20个字符之间', trigger: 'change'},
          ]
        },
      }
    },

    computed: {
      greeting() {
        const date = new Date();
        const hour = date.getHours();
        if (hour > 6 && hour < 12) return "上午好,";
        else if (hour >= 12 && hour < 18) return "下午好,";
        else return "晚上好,";
      },

      ...mapGetters(
        ['currentUser', 'isLogin'])

    },

    methods: {

      ...mapMutations(['mu_loginDialogVisible']),

      /**
       * 将vuex中的loginDialogVisible属性设为true =>显示登录dialog
       */
      change_loginDialogVisible() {
        this.$emit('customEvent');
        this.mu_loginDialogVisible(true);
      },

      /**
       *
       * @param key
       * @param keyPath
       */
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },

      /**
       * 登出用户
       */
      logout() {
        this.$axios.post("/api/logout").then(() => this.$refs.loginDialog.getCaptcha());
        this.$store.commit('userStatus', null);
      },

      foo() {
        console.log("customEvent proceeded!")
      }

    },

    mounted: function () {
    },

    components: {
      LoginDialog: LoginDialog,
    },

  }
</script>

<style lang="scss">
  @import "../css/nav.scss";
</style>
