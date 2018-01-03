# v2.1.0

>脚手架基础配置为`vue-cli3.0`
>
>自定义添加了`less`  ,  `vux`
>
>简单的在axios上封装了ajax函数,
>
>提供了少许的公共方法，取消了移动端点击延迟，添加了全局的焦点清楚方法，添加了UA头的判断方法

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