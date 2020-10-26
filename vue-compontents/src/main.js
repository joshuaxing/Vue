/*
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-10-26 18:09:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
