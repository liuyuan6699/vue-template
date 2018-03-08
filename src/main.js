// 入口文件
console.log('OK')
import Vue from "vue";
import { Header } from 'mint-ui';
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css";
import VueResource from "vue-resource"

import app from "./App.vue"
import router from "./router"

Vue.component(Header.name, Header);

var vm = new Vue({
    el:"#app",
    render: c=> c(app),
    router
})