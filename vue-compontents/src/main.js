/*
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-11-06 16:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/krouter";
// import store from "./store/index";
import store from "./store/kstore";
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
