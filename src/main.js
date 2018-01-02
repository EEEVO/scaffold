import Vue from "vue"

import FastClick from "fastclick"
import App from "./App"
import router from "./router" // 引入路由
import store from "./store" // 引入vuex
import "./common/less/reset.less" // 引入样式重置

import infoMore from "src/common/js/infoMore" // 引入环境判断方法
import clearFocus from "src/common/js/clearFocus" // 引入清空input焦点函数
import ajax from "src/api/config" // 引入封装的ajax

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
})

Vue.config.productionTip = false

// 取消点击延迟
FastClick.attach(document.body)

// // 停止loading的动画
// Vue.prototype.hideLoading = ({
//   time = 200
// } = {}) => {
//   setTimeout(() => {
//     const isloadingNum = store.state.isloadingNum;
//     store.state.isloadingNum = isloadingNum + 1;
//     store.state.isloading = false
//   }, time)
// }

Vue.prototype.ajaxs = ajax
// // 清楚doucument下的输入标签的焦点
Vue.prototype.clearFocus = clearFocus()
// 添加UA头判断方法
Vue.prototype.infoMore = infoMore()