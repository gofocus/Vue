// 定义一个名为 button-counter 的全局的新组件
// 全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
Vue.component('button-counter', {
    // 组件的data必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
    // 如果 Vue 没有这条规则，点击一个按钮会影响到其它所有实例
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
    props: ['diy', 'id'], //通过prop向子组件传递数据
    template: '<h3>标题{{ id }}：{{ diy }}</h3>'
});

Vue.component('blog-post2', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h4>{{ post.title }}</h4>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('blog-post3', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h4>{{ post.title }} <button @click="$emit('enlarge')">Enlarge</button></h4>
            <div v-html="post.content"></div>
        </div>
    `
});
Vue.component('blog-post4', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h4>{{ post.title }}<button @click="$emit('enlarge', 0.5)">Enlarge</button></h4>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})


Vue.component('tab-home', {
    template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
})
Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
})

// 必须要有一个Vue实例，才能使用组件
new Vue({
    el: '#component-demo',
    data: {
        posts: [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'Why Vue is so fun'}
        ],
        postFontSize: 1,
        currentTab: 'Home',
        tabs: ['Home', 'Archive', 'Posts'],
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
});