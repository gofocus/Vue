<template>
  <el-dialog
    class="login-container" width="30%"
    ref="dialog"
    :visible.sync="loginDialogVisible_" :modal="true" :close-on-click-modal="true"
    @open="focusInput('username')" @close="closeDialog" @keydown.native="stopPropagation">

    <el-form ref="form" :model="form" :rules="rules" v-focus2>
      <h3 class="title">Sign In</h3>
      <el-form-item prop="username">
        <el-input
          type="text" auto-complete="off" placeholder="Email"
          v-model="form.username"
          ref="username"
          @keyup.enter.native="focusInput('password')">
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password" placeholder="Password"
          ref="password"
          v-model="form.password"
          @keyup.enter.native="focusInput('captcha')">
        </el-input>
      </el-form-item>

      <el-form-item class="captcha" v-if="form.requireCaptcha" prop="captcha" ref="captcha" v-focus>
        <el-input
          class="captcha_input" type="text" placeholder="验证码"
          id="captcha_input"
          v-model="form.captcha"
          @keyup.enter.native="handleSubmit">
        </el-input>
        <div id="captcha">
          <img :src="captchaBit" alt="验证码" @click="getCaptcha">
          <!--<img  src="" alt="" ref="captcha" @click="getCaptcha">-->
          <span>看不清？</span>
          <a href="javascript:" @click="getCaptcha">换一个</a>
        </div>
      </el-form-item>

      <el-form-item>
        <a
          href="javascript:"
          v-if="this.$hasPermission('captcha')"
          @click="turn_captcha">{{form.requireCaptcha?"关闭":"开启"}}验证码 </a>
        <!--<a v-if="hasPermissionQ('captcha')" href="javascript:" @click="turn_captcha">{{form.requireCaptcha?"关闭":"开启"}}验证码 </a>-->
        <el-checkbox class="remember" v-model="checked" checked>Stay signed in</el-checkbox>
      </el-form-item>

      <el-form-item style="width: 100%;">
        <el-button
          type="primary" style="width: 100%;"
          :loading="loginIng"
          @click.native.prevent="handleSubmit">Submit
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: 'LoginDialog',

    directives: {

      myOn: {
        bind(el, binding, vnode) {
          const event = binding.arg;
          const fn = binding.value;
          // console.log(binding);
          // console.log(el);
          // el.addEventListener(event, fn);
        },
      },

      focus: {
        inserted(el, vnode) {
          el.getElementsByTagName('input')[0].focus();
          // el.querySelector('input').focus();
          // console.log(el.querySelector('input'));
          // console.log("inserted")
          // console.log(vnode, "vnode");
        },
        unbind() {
          // console.log("unbind");
        }
      },

      focus2: {
        update(el) {
          // console.log(el.querySelectorAll('input'));
          // console.log(el);
        }
      }
    },

    data: function () {

      const captchaRule = (rule, value, callback) => {
        if (this.form.requireCaptcha) {
          if (!value) return callback(new Error('请输入验证码！'));
          else if (value.length !== 4) return callback(new Error("输入4位验证码"));
          else callback();
        }
        else callback();
      };

      return {
        loginDialogVisible_: this.$store.state.loginDialogVisible,
        captchaBit: this.getCaptcha(),
        // dialogFormVisibleChild: this.dialogFormVisibleParent,

        form: {
          username: "ddd",
          password: 123,
          captcha: "",
          requireCaptcha: false,
        },

        checked: true,
        loginIng: false,

        rules: {
          username: [
            {required: true, message: '输入用户名', trigger: 'change'},
            // { type: 'email', message:'输入正确的邮箱', trigger: 'change'}
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: '输入密码', trigger: 'change'},
            // {min: 3, max: 20, message: '长度在3-20个字符之间', trigger: 'change'},
          ],
          captcha: [
            {validator: captchaRule, trigger: 'change'},
          ]
        }

      }
    },

    computed: {
      ...mapGetters(['loginDialogVisible', 'authUrl']),
    },

    watch: {
      loginDialogVisible_: function (v) {
        if (!v) {
          this.mu_loginDialogVisible(v);
        }
      },
      loginDialogVisible: function (v) {
        if (v) {
          this.loginDialogVisible_ = v;
        }
      }
    },

    beforeCreate() {
    },

    created() {
    },

    mounted() {
      // console.log(this.$refs)
      // this.$emit('customEvent');

      // console.log(Vue.TestData);
      // console.log("hasPermissionQ", Vue.hasPermissionQ('captcha'));

    },

    methods: {

      ...mapMutations(['mu_loginDialogVisible', 'userStatus']),
      /**
       * 自定义指令myOn测试用函数
       */
      fn() {
        console.log(this);
      },
      /**
       * 阻止事件传播，同时阻止该元素上其他监听函数的执行
       * @param e
       */
      stopPropagation(e) {
        e.stopImmediatePropagation();
      },
      //对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      closeDialog() {
        this.$refs.form.resetFields();
      },

      /**
       * 将焦点聚焦到指定的input
       * @param refName
       */
      focusInput(refName) {
        this.$nextTick(() => {
          if (this.$refs[refName]) {
            // this.$refs[refName].$el.getElementsByTagName('input')[0].focus();
            // console.log(this.$refs[refName].$el.querySelectorAll('input')[0]);
            this.$refs[refName].$el.querySelector('input').focus();
          }
          else {
            this.handleSubmit();
          }
        })
      },

      /**
       * 验证表单，请求登录
       */
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loginIng = true;
            const url = `/api/user/login`;
            //shiro使用表单认证，因此这里使用qs将JSON数据转换格式（转成了form-xxx..?）
            const loginParams = this.$qs.stringify({
              username: this.form.username,
              password: this.form.password,
              captcha: this.form.captcha,
              requireCaptcha: this.form.requireCaptcha,
            });

            this.$axios.post(url, loginParams).then(res => {
              this.loginIng = false;
              if (res.status !== 200) {
                this.$message({
                  message: '未知错误',
                  type: 'error'
                });
              }
              else if (!res.data) {
                this.$axios.post("/api/user/currentUser").then(res => {
                  this.userStatus(res.data);
                  this.$message({
                    message: '登陆成功',
                    type: 'success'
                  });
                  this.$toast("test");
                  this.loginDialogVisible_ = false;
                  // console.log("认证成功，跳转到：", this.authUrl);
                  this.$router.push(this.authUrl)
                });
              }
              else {
                this.$message({
                  message: JSON.stringify(res.data),
                  type: 'error'
                });
                if (res.data === "您已经登录") {
                  this.loginDialogVisible_ = false;
                }
              }
            }).catch((error) => {
              console.log(error)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       * 获取验证码图片
       */
      getCaptcha() {
        // console.log("ref:methods " + this.$refs.captcha);
        this.$axios.get(`/api/user/getGifCode`, {responseType: 'arraybuffer'}
        ).then(res => {
          return 'data:image/jpg;base64,' + btoa(
            new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        }).then(data => {
          this.captchaBit = data;
        }).catch(ex => {
          console.error(ex);
        });
      },

      /**
       * 启用或停用验证码功能
       */
      turn_captcha() {
        this.form.requireCaptcha = !this.form.requireCaptcha;
      },
    },

  }
</script>

<style lang="scss">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 10px auto;
    /*width: 350px;*/
    /*padding: 35px 35px 35px 35px;*/
    /*background: #fff;*/
    /*border: 1px solid #eaeaea;*/
    /*box-shadow: 0 0 25px #cac6c6;*/

    .el-dialog__body {
      padding: 7px 20px;
    }

    .captcha {
      margin-bottom: 0;
    }

    #captcha {
      overflow: hidden;
      padding-top: 10px;
      img {
        float: left;
      }
      a {
        color: blue;
      }
    }

  }

  .login-container .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #505458;
  }


</style>
