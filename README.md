# vue

#### 介绍
学习vue过程中书写的一些关于vue基本知识基本操作的代码以及案例

####  vue
+ v-text
+ v-html
+ v-model
+ v-bind
+ v-on
+ v-for
+ + 注意key的使用：
+ + + key="name"表示是key值是一个字符串"name"
+ + + :key="name"表示key值是一个JS表达式name
+ v-if  v-else-if  v-else
+ v-show
+ v-once
+ data属性
+ + 如果是在vue实例中，是一个对象
+ + 如果实在组件中，是一个函数，并且返回一个对象
+ 父子组件传值  参考18
+ + 父组件向子组件传值，子组件通过props属性来接受
+ + 子组件向父组件传值，通过子组件向外触发事件，父组件监听
+ 非父子组件传值  参考21
+ + 通过Bus/总线/发布订阅模式/观察者模式来解决
+ vue常用修饰符
+ + .prevent  提交事件不再重载页面
+ + .stop     阻止单机事件冒泡
+ + .self     当事件发生在该元素本事而不是子元素的时候会触发
+ + .native   触发原生事件  参考20
+ computed和watch
+ + computed是计算属性，依赖于其他属性计算值，并且computed的值有缓存，只有当计算值变化才会返回内容
+ + watch监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作
