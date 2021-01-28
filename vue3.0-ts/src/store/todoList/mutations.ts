/*
 * @Author: your name
 * @Date: 2021-01-09 17:42:23
 * @LastEditTime: 2021-01-09 19:44:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\store\mutations.ts
 */
import { ADD_TODO, INIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes'
import { IState, ITodo, STATE_TYPE } from '@/typing/index'

export default {
    [INIT_TODO](state: IState, payload: ITodo[]) {
        state.todoData = payload
    },
    [ADD_TODO](state: IState, payload: ITodo) {
      state.todoData = [...state.todoData, payload];
    },
    [TOGGLE_TODO](state: IState, payload: number) {
        const data = state.todoData.map((todo) => {
           return todo.id === payload ? {
               ...todo,
               status: todo.status === STATE_TYPE.FINISHED ? STATE_TYPE.WILLDO :  STATE_TYPE.FINISHED
           } : {
               ...todo
           }
       })
       state.todoData = data;
    },
    [REMOVE_TODO](state: IState, payload: number) {
        const data = state.todoData.filter((todo) => {
            return todo.id !== payload
        })
        state.todoData = data;
    }
}