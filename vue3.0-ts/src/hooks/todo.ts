/*
 * @Author: your name
 * @Date: 2021-01-09 19:16:16
 * @LastEditTime: 2021-01-09 20:38:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\hooks\todo.ts
 */

import { ITodo, STATE_TYPE } from "@/typing"
import { Store, useStore } from "vuex"
import { ADD_TODO } from '@/store/todoList/actionTypes'
import { watch } from "vue";

export interface IUseTodo {
    setTodo: (value: string) => void;
    intTodoList: () => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

export function useTodo(): IUseTodo {

    const store: Store<any> = useStore();

    const {setStorageTodo, getStorageTodo} = localStorageTodo();

    watch(() => {
        return store.state.todo.todoData
    }, (todoList: ITodo[]) => {
       setStorageTodo(todoList)
    })

    function setTodo(value: string): void {
        const payload: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: STATE_TYPE.WILLDO
        }
        store.dispatch('todo/addTodo', payload)
        // 在带命名空间的模块注册全局 action
        // store.dispatch(ADD_TODO, payload)
    }

    function intTodoList() {
      const todoList: ITodo[] = getStorageTodo();
      store.dispatch('todo/initTodo', todoList)
    }

    function removeTodo(id: number): void {
      store.dispatch('todo/removeTodo', id)
    }

    function toggleTodo (id: number): void {
      store.dispatch('todo/toggleTodo', id)
    }

    return {
        setTodo,
        intTodoList,
        removeTodo,
        toggleTodo
    }
}

export interface ILocalStorageTodo {
    setStorageTodo: (todoList: ITodo[]) => void,
    getStorageTodo: () => ITodo[]
}


export function localStorageTodo(): ILocalStorageTodo {

    function setStorageTodo (todoList: ITodo[]): void {
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    function getStorageTodo (): ITodo[] {
      return  JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    return {
        setStorageTodo,
        getStorageTodo
    }

}