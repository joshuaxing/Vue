/*
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-11-06 16:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import countstore from './count';
import amoutstore from './amout';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    amount: 666
  },
  mutations: {},
  actions: {},
  modules: {
    countstore: countstore,
    amoutstore: amoutstore
  }
});
