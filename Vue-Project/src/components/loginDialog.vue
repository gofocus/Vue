<template>
  <el-dialog :visible.sync="dialogFormVisibleChild" class="login-container" width="30%" :modal="true">
    <el-form :model="form" :rules="rules" ref="form">
      <h3 class="title">Sign In</h3>
      <el-form-item prop="username">
        <el-input type="email" v-model="form.username" auto-complete="off" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <el-input type="text" v-model="form.captcha" placeholder="验证码"></el-input>
        <div id="captcha">
          <img :src="captchaUrl" alt="" ref="captcha" @click="getNewCaptcha"><a href="javascript:"
                                                                                @click="getNewCaptcha">看不清?</a></div>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">Stay signed in</el-checkbox>
      <el-form-item style="width: 100%;">
        <el-button type="primary" style="width: 100%;" @click.native.prevent="handleSubmit" :loading="logining">Submit
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<script>
  export default {
    props: ['dialogFormVisibleParent'],
    data: function () {
      return {
        captchaUrl: "http://127.0.0.1:8080/user/getGifCode?rrr=",
        dialogFormVisibleChild: this.dialogFormVisibleParent,
        form: {
          username: "ddd",
          password: 123,
          captcha: "",
        },
        checked: true,
        logining: false,
        rules: {
          email: [
            {required: true, message: '输入用户名', trigger: 'change'},
            // { type: 'email', message:'输入正确的邮箱', trigger: 'change'}
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: '输入密码', trigger: 'change'},
            {min: 3, max: 20, message: '长度在3-20个字符之间', trigger: 'change'},
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
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.logining = true;
            const url = `/api/user/login`;
            //shiro使用表单认证，因此这里将JSON数据转换格式（form?）
            const loginParams = this.$qs.stringify({
              username: this.form.username,
              password: this.form.password,
              captcha: this.form.captcha,
            });

            this.$axios.post(url, loginParams).then(res => {
              this.logining = false;
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
      getNewCaptcha() {
        this.captchaUrl += "1";
      }
    },

  }
</script>

<style scoped lang="scss">
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
  }

  .login-container .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #505458;
  }

  .login-container .remember {
    margin: 0 0 25px 0;
  }

  #captcha {
    overflow: hidden;
    padding-top: 10px;
    img {
      float: left;
    }
  }

</style>
