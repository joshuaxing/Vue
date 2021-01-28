/*
 * @Author: your name
 * @Date: 2021-01-09 17:41:54
 * @LastEditTime: 2021-01-09 20:37:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\store\action.ts
 */

import { ADD_TODO, INIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes'
import { IState, ITodo } from '@/typing/index'
import { Commit } from 'vuex';
interface ICtx {
    commit: Commit,
    state: IState
}
export default {
    [ADD_TODO]({ commit }: ICtx, payload: ITodo): void {
        // console.log(payload)
        commit(ADD_TODO, payload)
    },
    [TOGGLE_TODO]({ commit }: ICtx, payload: number): void {
        // console.log(payload)
        commit(TOGGLE_TODO, payload)
    },
    [REMOVE_TODO]({ commit }: ICtx, payload: number): void {
        // console.log(payload)
        commit(REMOVE_TODO, payload)
    },
    [INIT_TODO]({ commit }: ICtx, payload: ITodo[]): void {
        // console.log(payload)
        commit(INIT_TODO, payload)
    },
    someAction: {
        root: true,
        handler({ commit }: ICtx, payload:ITodo): void {
            commit(ADD_TODO, payload)
        }
    }

}