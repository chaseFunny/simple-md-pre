const article = `
# 基于Ant Design Pro的简单在线md编写预览
![Snail Run](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1012/logo.svg)

> 使用ant design pro 创建的项目模版，删除不需要的文件和能力后，引入markdown解析库，和相应的UI展示库，实现了这个效果

## 需求
> 现在有一大段 Markdown 文本，希望使用 React + Ant Design Pro 框架来开发一个页面，来展示这段解析后的 Markdown 文本。并且能够根据这段文本自动生成目录，点击目录可以跳转到 Markdown 文本对应的位置。类似语雀的目录树。需要【源码 GitHub 链接】以及【线上可访问的地址】。
## 实现过程（步骤）

1. 安装好项目启动需要的环境，例如安装Node.js，VSCode（开发工具）
2. 根据官方文档下载模版项目
3. 项目瘦身
4. 安装markdown展示需要的第三方库
5. 按照官方文档实现功能
## 参考文档
-  [ant design](https://4x.ant.design/index-cn)
-  [ant design pro](https://pro.ant.design/zh-CN/docs/overview)
-  [ant design pro init报错解决](https://github.com/ant-design/ant-design-pro/issues/10505)
-  [markdown库及其使用方法](https://codesandbox.io/s/markdown-navbar-demo-online-e7e0n?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js:471-782)

## 测试（手写call, apply, bind）

## call apply bind
### call
#### call的用法
MDN: call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

个人理解： call就是用来修改this指向的，

### 实现call：
1. call从哪里来？ 每个JavaScript函数其实都是Function对象，（构造函数 - 有原型对象），call就是在原型对象属性上的
2. 我们需要在原型对象中添加属性，实现call，call很明显是一个方法（函数）
3. 确定this的指向，
4. 参数问题：第一个参数是this指向，后面的参数作为函数的参数，
5. 参数的位置不对称？ 需要把所有参数另外保持起来，并且不保存第一次参数，也就是this
6. 处理返回undefined的问题

### 实现apply：
1. 和call的区别在与，接受的参数变为两个，第一个是this指向，第二个是一个数组，作为函数的参数。
2. 我们只需要接受第二个参数数组，把它当做arguments处理，
3. 注意：call的for循环，起始值是1，apply是0
4. 同样需要处理return为undefined的情况

### 实现bind：
1. 和上两种不同是它会返回一个函数
2. 实现方式，提前保持this，返回函数中执行call，
3. bind是有柯里化特性的，如果我们给bind后的函数传入参数：bind(that)(4),就会发现有问题
4. 解决方案就是合并外层arguments,和内层arguments，注意arguments需要转变为数组，因为它是伪数组
5. bind方法 new的操作，相当于把bind的函数当成一个构造函数，
6. 使用new的this指向进行判断，使用一个新的函数作为桥板，避免直接修改原型对象
![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1012/webWithMe.png)

#### 知识点
1. this的隐式绑定，当函数引用有上下文对象时，就会把函数中的this绑定到这个上下文对象上，
2. arguments对象，用来获取后面的参数
3. **eval(string)** 把传入的字符串当做JavaScript代码执行
4. 数组和字符串相加的时候，数组会调用toString()方法，但是这个数组会直接显示参数
5. 如果使用new来调用函数，也就是发生了构造函数，那么实例（新对象）会绑定到函数调用的this，
可以通过此判断是否是new一个构造函数
![beauty](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1012/bg1.jpg)
`;

export default article;
