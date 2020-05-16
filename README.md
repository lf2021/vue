# Vue

## 介绍

学习 vue 过程中书写的一些关于 vue 基本知识基本操作的代码以及案例

## vue

- `v-text`
- `v-html`
- `v-model` 数据的双向绑定
- `v-bind`
  - 缩写为`:`
- `v-on`
  - 缩写为`@`
- `v-for`
  - 注意 key 的使用：
  - `key="name"`表示是 key 值是一个字符串"name"
  - `:key="name"`表示 key 值是一个 JS 表达式 name
- `v-if` `v-else-if` `v-else`
  - 直接从 DOM 上删除创建元素
- `v-show`
  - 利用的是`display: none`的样式
- `v-once`
- 几种样式绑定方法
  - `:class="{isActivated: activated}"` `参考09`
  - `:class="[activated]"` `参考10`
  - `:style="[styleObj, {fontSize: '18px'}]"` `参考11`
- `data`属性
  - 如果是在 vue 实例中，是一个对象
  - 如果实在组件中，是一个函数，并且返回一个对象
- 父子组件传值 `参考18`
  - 父组件向子组件传值，子组件通过 props 属性来接受
  - 子组件向父组件传值，通过子组件向外触发事件，父组件监听
- 非父子组件传值 `参考21`
  - 通过 Bus/总线/发布订阅模式/观察者模式来解决
- vue 常用修饰符
  - `.prevent` 提交事件不再重载页面
  - `.stop` 阻止单机事件冒泡
  - `.self` 当事件发生在该元素本事而不是子元素的时候会触发
  - `.native` 触发原生事件 `参考20`
- `computed` 和 `watch` 的区别
  - computed 是计算属性，依赖于其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容
  - watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作
