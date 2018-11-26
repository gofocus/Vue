<template xmlns:shiro="http://www.w3.org/1999/xhtml">
  <el-dialog :visible.sync="dialogFormVisibleChild" class="login-container" width="30%" :modal="true">
    <el-form :model="form" :rules="rules" ref="form">
      <h3 class="title">Sign In</h3>
      <el-form-item prop="username">
        <el-input type="email" v-model="form.username" auto-complete="off" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item prop="captcha" v-if="form.requireCaptcha" class="captcha">
        <el-input type="text" v-model="form.captcha" placeholder="验证码"></el-input>
        <div id="captcha">
          <img :src="captchaBit" alt="" @click="getCaptcha">
          <!--<img  src="" alt="" ref="captcha" @click="getCaptcha">-->
          <a href="javascript:" @click="getCaptcha">看不清?</a>
        </div>
      </el-form-item>
      <el-form-item>
        <a v-if="hasPermission('captcha')" href="javascript:" @click="turn_captcha">{{form.requireCaptcha?"关闭":"开启"}}验证码 </a>
        <el-checkbox v-model="checked" checked class="remember">Stay signed in</el-checkbox>
      </el-form-item>

      <el-form-item style="width: 100%;">
        <el-button type="primary" style="width: 100%;" @click.native.prevent="handleSubmit" :loading="loginIng">Submit
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<script>

  export default {
    props: ['dialogFormVisibleParent'],
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
        captchaBit: this.getCaptcha(),
        dialogFormVisibleChild: this.dialogFormVisibleParent,
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
    computed: {},
    watch: {
      dialogFormVisibleParent: function (v) {
        if (v) this.dialogFormVisibleChild = v
      },
      dialogFormVisibleChild: function (v) {
        if (!v) this.$emit('update:dialogFormVisibleParent', v);
      },
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loginIng = true;
            const url = `/api/user/login`;
            //shiro使用表单认证，因此这里将JSON数据转换格式（转成了form-xxx..?）
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
              else if (res.data === "") {
                this.$axios.post("/api/user/currentUser").then(res => {
                  this.$store.commit('userStatus', res.data);
                  this.$message({
                    message: '登陆成功',
                    type: 'success'
                  });
                  this.dialogFormVisibleChild = false;
                });
              }
              else {
                this.$message({
                  message: JSON.stringify(res.data),
                  type: 'error'
                });
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
      getCaptcha() {
        // console.log("ref:methods " + this.$refs.captcha);
        this.$axios.get(`/api/user/getGifCode`, {
          responseType: 'arraybuffer'
        }).then(res => {
          return 'data:image/jpg;base64,' + btoa(
            new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        }).then(data => {
          console.log(data);
          this.captchaBit = data;
          // this.$refs.captcha.src = data;
        }).catch(ex => {
          console.error(ex);
        });
      },
      turn_captcha() {
        this.form.requireCaptcha = !this.form.requireCaptcha;
      },
      hasPermission(permission) {
        if (this.$store.state.currentUser) {
          const index = this.$store.state.currentUser.permissionList.indexOf(permission);
          return !(index === -1);
        }
        else
          return false;
      }
    },
    mounted() {
    }

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
    }

  }

  .login-container .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #505458;
  }


</style>
