var app = new Vue({
    el: '#app',
    data: {
        message: "Hello vue!"
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!_!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});


var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello"
    }
});


// 必须定义在Vue实例前面！
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }} </li>'
});


var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ]
    }
});

Vue.component('my-component', {
    template: '<p class="foo bar">Hi Vue!</p>'
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        isActive: true,
        hasError: true,
        classObject: {
            active: true,
            'text-danger': true
        },
        activeClass: 'active',
        errorClass: 'text-danger'
    },
    computed: {
        classObjectComputed: function () {
            return {
                active: this.isActive && this.hasError,
                'text-danger': this.hasError
            }
        }
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        activeColor: 'red',
        fontSize: 16,
        styleObject: {
            color: 'red',
            fontSize: '26px',
            // 注意这里px有引号
        },
        baseStyles: {
            background: '#000'
        },
        overridingStyles: {
            background: '#e02614',
            fontSize: '29px'
        }

    }
});


var app10 = new Vue({
    el: '#app-10',
    data: {
        ok: true,
        loginType: 'username'
    },
    methods: {
        change: function () {
            this.loginType = ((this.loginType === 'username') ? 'email' : 'username')
        }
    }
});


var app11 = new Vue({
    el: '#app-11',
    data: {
        itemsArray: [
            {name: 'apple'},
            {name: 'banana'},
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        numbers: [1, 2, 3, 4, 5],
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }

    }
});


var app12 = new Vue({
    el: '#app-12',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        },
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault();
            alert(message);
        }
    }
});


var app13 = new Vue({
    el: '#app-13',
    data: {
        message: '',
        checked: true,
        checkedName: [],
        picked: '',
        selected: '',
        selectedArray: [],
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ],
        pick: '',
        a: '123',
        age: '',
        msg: ''
    }
});

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({
    el: '#component-demo'
});