# todo list
- ~~引入编辑器~~
- 登录与刷新token机制
- 新增博客与修改博客
- 博客评论新增与删除
- 博客点赞
- 博客阅读量
- 博客加标签
- ~~单元测试组件~~
- ~~单元测试service~~
- e2e测试博客新增与删除，点赞，阅读量，标签，侧边导航等
- ~~引入echart 控制面板在线人数，博客量~~
- 上传图片组件
- 注册邮件验证
# node-blog-admin
基于nice-swa
# nice-swa
## 项目说明
- nice-swa，读着：laishua，中文名：来耍。
- 这是一个中后台管理系统脚手架模板，
使用 react 技术栈，redux 数据流管理，UI 框架为 materail-design，可以写 css，也可以写 scss，打包工具为webpack4。
集成了 jest 单元测试，cypress-e2e 测试。
- [项目地址](https://github.com/QCCS/nice-swa)
- [在线文档](https://qccs.github.io/nice-swa/docs/#/)

## nice-swa后端-koa2+mysql
[nice-swa后端项目地址](https://github.com/QCCS/nice-swa-s)

## 环境依赖
node v9.0.0

## 主要依赖包
> dependencies & devDependencies
- react16+ 开发依赖
- material-design UI框架
- scss-loader scss解释
- babel es6编译
- webpack4+ 打包工具
- redux 数据流
- axios 异步请求
- eslint 代码检测
- jest 单元测试
- puppeteer e2e测试
- cypress e2e测试

## 如何开始
```
//下载代码
git clone -b master https://github.com/QCCS/nice-swa.git
//安装依赖
npm i --no-package-lock
//运行开发环境
npm run dev
//打包
npm run build
```

## 项目目录
> nice-swa 
- dist 打包之后的目录
- docs 文档目录
- coverage 单元测试报表
- cypress cypress e2e测试
- src 核心源码目录
    - assets 资源目录
    - components 组件
    - config 开发配置
    - context-data context数据仓库
    - layout 布局文件
    - pages 容器组件
    - redux redux相关
    - routes 路由目录
    - service api
    - styles 样式css,scss
    - utils 工具函数
    - app.js 顶层组件
    - index.js 入口文件
- test 单元测试目录
- package.json 依赖、包说明
- webpack.config.js 打包配置

## 功能介绍
+ [x] react | redux | react-route 集成
+ [x] material-design安装与使用实例
+ [x] webpack配置
+ [x] 单元测试样例
+ [ ] E2E集成测试样例
+ [ ] 脚手架工具
+ [ ] 开发命令行工具
+ [ ] 多环境配置

## 项目截图
![](https://github.com/QCCS/nice-swa/blob/master/docs/imgs/nice-swa.png)
## 建议安装工具

- git：
v2.5

- nvm： 
node 版本管理

- nrm：
npm 源管理

## 参考网站
- [material-ui](https://material-ui.com/)

## 勘误及提问
如果有疑问或者发现错误，可以在相应的 issues 进行提问或勘误。
如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。
