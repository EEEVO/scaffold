import Vue from "vue"
import Router from "vue-router"
// import Draw_money from 'components/drawMoney/DrawMoneyTest'

Vue.use(Router)

// 路由懒加载

//1、登录页
const HelloWord = resolve => require(["components/HelloWord"], resolve) // 登录账号

// 设置路由
const routes = [
  {
    path: "/",
    redirect: "/HelloWord",
  },
  {
    path: "/HelloWord",
    component: HelloWord,
  },
]

export default new Router({
  mode: "history",
  routes,
})
