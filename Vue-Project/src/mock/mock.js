import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers} from "./data/user";
import Mock from 'mockjs'

export default {

  init() {
    const mock = new MockAdapter(axios);    //JavaScript对大小写敏感，所以下面可以用Mock指代 mock js

    mock.onGet('/carouselList').reply(200, Mock.mock({
        "Array|7-4": ['https://picsum.photos/1632/420/?image=@integer(1,999)']
        // "Array|3-5":[mocks.Random.image('728x90')]
      })
    );

    mock.onPost('/user/loginTest').reply(config => {
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
            resolve([200, {code: 200, msg: '登陆成功', user}]);
          } else {
            resolve([200, {code: 500, msg: '账号或密码错误'}]);
          }
        }, 1000);
      });

    })
  }

}

