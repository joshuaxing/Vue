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

// 向上传递
Vue.prototype.$dispatch = function(eventName, data) {
  let parent = this.$parent;
  // 查找父元素
  while (parent) {
      // 父元素用$emit触发
      parent.$emit(eventName, data);
      // 递归查找父元素
      parent = parent.$parent;
  }
};

// 向下广播

Vue.prototype.$boardcast = function(eventName, data) {
  boardcast.call(this, eventName, data);
};

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data);
    if (child.$children.length) {
      // 递归调用，通过call修改this指向 child
      boardcast.call(child, eventName, data);
    }
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
