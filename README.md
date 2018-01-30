# 简介

>脚手架基础配置为`vue-cli3.0`
>
>增加了`zip-webpack-plugin`,`less`,`vux`的配置
>
>简单的在`axios`上封装了`ajax函数`,
>
>提供了少许的公共方法，取消了移动端点击延迟，添加了全局的焦点清楚方法，添加了UA头的判断方法
>
>添加了自定义的`beautify`格式化配置文件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目结构

``` bash

├─build
├─config
├─src
│  ├─api    公共Api设置
│  ├─base   业务组件
│  │  ├─scroll  滚动组件
│  ├─common     公共模块
│  │  ├─image
│  │  ├─js
│  │  └─less
│  ├─components     布局组件
│  ├─router     路由相关文件
│  └─store      vuex相关文件
├─static        静态资源目录
└─test          单元测试
    ├─e2e
    │  ├─custom-assertions
    │  └─specs
    └─unit
        └─specs

```