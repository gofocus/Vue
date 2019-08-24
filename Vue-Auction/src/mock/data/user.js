import Mock from 'mockjs';

const LoginUsers = [
  {
    id: 1,
    email: 'admin',
    password: '111111',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  },
  {
    id: 2,
    email: 'go_focus@live.cn',
    password: 'a64793393'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export {LoginUsers, Users};
