import Vue from "vue";
import VueRouter from 'vue-router';


import home from "./components/home.vue";
import user from "./components/user.vue";
import cart from "./components/cart.vue";
import search from "./components/search.vue"


Vue.use(VueRouter)
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home", component:home},
    {path:"/user", component:user},
    {path:"/cart", component:cart},
    {path:"/search", component:search},
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router