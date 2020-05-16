# 通过 babel 体验 ES6 模块化

## 配置 babel 的步骤

### 第一步

```npm
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

### 第二步

```npm
npm install --save @babel/polyfill
```

### 第三步

项目根目录创建文件 `babel.config.js`

`babel.config.js`文件内容如下

```js
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    },
  ],
]
module.exports = { presets }
```

### 第四步

通过`npx babel-node- index.js` 执行代码

例如：

在根目录新建一个`index.js`，通过`npx babel-node- .\index.js`来测试代码

## 默认导出

1. 每个模块通过`export default`导出模块，通过`import '接收名称' from '模块标识符'`导入模块

2. 每个模块只允许调用一次 `export default`

3. 如果没有指定 `export default` 导出，则默认是导出空对象 {}

举例：

m1.js

```js
let a = 10
let c = 20
let d = 30

function show() {
  console.log('11111111');
}

export default {
  a,
  c,
  show
}
```

index.js

```js
import m1 from './m1.js'

console.log(m1);
```

通过`npx babel-node .\index.js`输出

```js
{ a: 10, c: 20, show: [Function: show] }
```

## 按需导出 与 按需导入

1. 按需导出语法 `export let s1 = 10`

2. 按需导入语法 `import { s1 } from '模块标识符'` 或者通过`import { s1 as ss1 } from '模块标识符'`修改变量名

注意：

1. 每个模块中，可以使用多次按需导出
2. 通过默认导出方式，读取导入数据的时候不包括哪些按需导出的数据

举例：

m1.js

```js
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('oooooo')
}
```

index.js

```js
import {s1, s2 as ss2, say} from './m1.js'

console.log(s1);
console.log(ss2);
console.log(say);
```

通过`npx babel-node .\index.js`输出

```js
aaa
ccc
[Function: say]
```

## 直接导入并执行模块代码

m2.js

```js
for (let i = 0; i < 3; i++) {
  console.log(i)
}
```

index.js

```js
import './m2.js'
```

通过`npx babel-node .\index.js`输出

```js
0
1
2
```
