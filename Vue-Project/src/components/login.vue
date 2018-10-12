<template>
  <el-form :model="form" class="login-container" :rules="rules" ref="form">
    <h3 class="title">Sign In</h3>
    <el-form-item prop="email">
      <el-input type="email" v-model="form.email" auto-complete="off" placeholder="Email"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Stay signed in</el-checkbox>
    <el-form-item style="width: 100%;">
      <el-button type="primary" style="width: 100%;" @click.native.prevent="handleSubmit" :loading="logining">Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {requestLogin} from "../axios/api";
  export default {
    // name: "login",
    data: function () {
      return {
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
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = {username: this.form.email, password: this.form.password};
            loginParams = JSON.stringify(loginParams);

            requestLogin(loginParams).then(res => {
              this.logining = false;
              if (res.status !== 200) {
                this.$message({
                  message: '邮箱/密码错误',
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(res.data.user));
                this.$message({
                  message: '登陆成功',
                  type: 'success'
                });
                this.$router.push({path: '/'});
              }
            }).catch((error) => {
              console.log(error)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },

  }
</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 110px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-container .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
  }

  .login-container .remember {
    margin: 0 0 25px 0;
  }

</style>
