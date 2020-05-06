## 创建列表隔行变色项目

1. 新建项目空白目录，并运行 `npm init -y` 命令，初始化包管理配置文件 `package.json`
2. 新建 `src` 源代码目录
3. 新建 src -> `index.html` 首页
4. 初始化首页基本的结构
5. 运行 `npm install jquery -S` 命令，安装 jQuery
6. 通过模块化的形式，实现列表隔行变色效果

完成上述步骤发现并不能运行成功，这是因为 `index.js` 中 `import $ from 'jquery'` 是 ES6 的模块化语法，浏览器暂时不支持，所以需要基于 webpack 将有兼容性的 js 代码转换为没有兼容性的代码

继续后续步骤

7. 运行 `npm install webpack webpack-cli -D` 命令，安装 webpack 相关的包
8. 在项目根目录中，创建名为 `webpack.config.js` 的 webpack 配置文件
9. 在 webpack 的配置文件中，初始化如下基本配置：

```js
module.exports = {
  mode: 'development', // mode 用来指定构建模式
}
```

> mode 有两种值：development 和 production
>
> 前者表示开发模式，转换出来的代码不会进行压缩与混淆，转换速度快
>
> 后者表示生产模式，转换出来的代码会进行压缩与混淆，转换时间长（一般用于项目上线的时候）

10. 在·`package.json` 配置文件中的 `scripts` 节点下， 新增·`dev` 脚本如下：

```js
"scripts": {
  "dev" :"webpack" // script 节点下的脚本， 可以通过 npm run dev 执行
}
```

11. 在终端中运行 `npm run dev` 命令， 启动 webpack 进行项目打包。
