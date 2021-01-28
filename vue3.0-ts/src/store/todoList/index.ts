/*
 * @Author: your name
 * @Date: 2021-01-09 18:23:57
 * @LastEditTime: 2021-01-09 20:42:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\store\todoList\index.ts
 */

import state from './state'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state,
  mutations,
  actions
}