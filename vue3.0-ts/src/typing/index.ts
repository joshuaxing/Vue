/*
 * @Author: your name
 * @Date: 2021-01-09 18:22:31
 * @LastEditTime: 2021-01-09 19:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\types\index.ts
 */


interface ITodo {
    id: number;
    content: string;
    status: STATE_TYPE
}

interface IState {
  todoData: ITodo[]
}

enum STATE_TYPE {
    WILLDO = 'willdo',
    FINISHED = 'finished'
}

export {
    ITodo,
    IState,
    STATE_TYPE
}
