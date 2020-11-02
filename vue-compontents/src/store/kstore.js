/*
 * @Author: your name
 * @Date: 2020-10-30 15:40:11
 * @LastEditTime: 2020-11-02 18:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\store\kstore.js
 */

// 1.维护状态state
// 2.修改状态commit
// 3.业务逻辑控制dispatch
// 4.状态派发getter
// 5.实现state响应式
// 6.插件
// 7.混入

let Vue;

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

class Store {

  constructor(options = {}) {
    // 利用vue数据响应式
    this.state = new Vue({
      data: options.state
    });
    // 初始化
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
    options.getters && this.handleGetters(options.getters);
  }

  // 触发mutaions，需要实现commit
  commit = (type, arg) => {
    const fn = this.mutations[type]; // 获取变更函数
    fn(this.state, arg);
  }

  // dispatch
  dispatch (type, arg) {
    const fn = this.actions[type];
    fn({ commit: this.commit, state: this.state }, arg);
  }

  handleGetters (getters) {
    
    this.getters = {}; // store实例上的getters

    // 定义只读的属性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
          get: () => {
            return getters[key](this.state);
          }
      })
    })
    
  }

}

export default { Store, install }
