/*
 * @Author: your name
 * @Date: 2020-11-04 11:34:05
 * @LastEditTime: 2020-11-06 16:32:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\store\count.js
 */
export default {
  namespaced: true,
  state: {
    count: 0
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
    getparentcount (state, getters, rootState) {
      return rootState.amount
    },
    getbrothercount (state, getters, rootState) {
      return rootState.amoutstore.count
    }
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
};
