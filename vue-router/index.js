// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};
const User = {
    template: `<div>User {{ $route.params.id }} -
                <router-view></router-view>
                <router-view name="helper"></router-view>
               </div>`,
    watch: {
        '$route'(to, from) {
            // 对路由变化做出响应...
        }
    }
};
const UserProfile = {template: '<span>Profile</span>'};
const UserProfile2 = {template: '<span>Profile2</span>'};
const UserPosts = {template: `<span>Posts</span>`};
const UserHome = {template: `<span>Home</span>`};
const User_Post = {template: '<div>Username:{{ $route.params.username }} Post:{{ $route.params.post_id }}</div>'};
const User2 = {
    props: ['id'],
    template: `<div>User: {{ id }}
               </div>`
};


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    // 命名视图
    {
        path: '/', components: {
            default: UserHome,
            a: UserProfile,
            b: UserPosts
        },
        name: 'index'
    },
    // 动态路径参数，以冒号开头
    {
        path: '/user/:id', component: User,
        // 命名路由
        name: 'user',
        // 嵌套路由
        children: [
            // 空的子路由
            {path: '', component: UserHome},
            {path: 'posts', component: UserPosts},
            // 嵌套命名视图
            {
                path: 'profile', components: {
                    default: UserProfile,
                    helper: UserProfile2
                }
            }
        ]
    },
    // 多段动态路径参数
    {path: '/user/:username/post/:post_id', component: User_Post},
    // 重定向
    {path: '/a', redirect: '/user'},
    // 重定向到命名路由
    {path: '/c', redirect: 'index'},
    // 甚至是一个方法，动态返回重定向目标：
    {
        path: '/a', redirect: to => {
            // 方法接收 目标路由 作为参数
            // return 重定向的 字符串路径/路径对象
        }
    },
    // 路由组件传参
    // {path: '/user2/:id', component: User2, props: true},
    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
        path: '/user2/:id', components: {
            default: User2,
            sidebar: UserPosts
        },
        props: {
            default: true,
            // sidebar: false
        }, name: 'user2'
    }
];


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app');

// 现在，应用已经启动了！
