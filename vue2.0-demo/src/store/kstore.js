/*
 * @Author: your name
 * @Date: 2020-11-04 09:03:16
 * @LastEditTime: 2020-11-06 16:49:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\store\kstore.js
 */
import Vue from "vue";
import KVuex from "./kvuex";

Vue.use(KVuex);

const store = new KVuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add(state, num = 1) {
      state.count += num;
    },
  },
  getters: {
    score(state) {
      return "score:" + state.count;
    },
  },
  actions: {
    // 复杂业务逻辑，类似于controller
    // 比如ajax请求
    asyncAdd({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("add");
          resolve({ ok: 1 });
        }, 1000);
      });
    },
  },
});

export default store;
