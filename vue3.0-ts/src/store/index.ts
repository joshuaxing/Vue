/*
 * @Author: your name
 * @Date: 2021-01-09 16:00:35
 * @LastEditTime: 2021-01-09 20:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\store\index.ts
 */
import { createStore, Store, Dispatch, createLogger } from 'vuex'
import todo from './todoList/index'
import {ADD_TODO} from './todoList/actionTypes'
import { IState, ITodo } from '@/typing/index'
interface ICtx {
  dispatch: Dispatch,
  state: IState
}
 const store: Store<any> = createStore({
  actions: {
    [ADD_TODO] ({ dispatch }: ICtx, payload: ITodo) {
      // 在带命名空间的模块注册全局 action
      dispatch('someAction', payload)
    }
  },
  modules: {
    todo
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
export default store
