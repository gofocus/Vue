import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers} from "./data/user";

export default {

  init(){
    const mock = new MockAdapter(axios);

    mock.onPost('/user/loginTest').reply( config => {
      let {email, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.email === email && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '登陆成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });

    })
  }

}

