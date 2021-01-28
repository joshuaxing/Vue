<!--
 * @Author: your name
 * @Date: 2021-01-09 17:31:26
 * @LastEditTime: 2021-01-09 18:16:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\components\TodoList\List\item.vue
-->

<template>
  <div>
    <input type="checkbox" :checked="item.status === FINISHED ? true : false"  @change="(e) => toggleTodo(item.id, e)"/>
    <span :class="[item.status === FINISHED ? 'line' : '']">{{item.content}}</span>
    <button @click="removeTodo(item.id)">删除</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted, toRefs, onUpdated, onUnmounted, PropType } from 'vue'
import { ITodo, STATE_TYPE } from '@/typing/index'

interface IStausType {
  WILLDO: STATE_TYPE,
  FINISHED: STATE_TYPE
}

export default defineComponent({
  name: 'ListTtem',
  props: {
    item: {
      type: Object as PropType<ITodo>,
      require: true,
      default: {}
    },
    
  },
  setup(props, {emit}) {

    const statusType:IStausType  = {
      WILLDO: STATE_TYPE.WILLDO,
      FINISHED: STATE_TYPE.FINISHED
    };

    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('onUpdated!')
    })
    onUnmounted(() => {
      console.log('onUnmounted!')
    })

    const toggleTodo = (id:number, e: { target: { checked: any; }; }): void => {
      // console.log(id)
      // console.log(e.target.checked)
      emit('toggleTodo', id)
    }

    const removeTodo = (id:number): void => {
       console.log(id)
       emit('removeTodo', id)
    }

    return {
      ...statusType,
      toggleTodo,
      removeTodo
    }

  }
})
</script>

<style>
.do {
  background: #ccc;
  outline: none;
  border: none;
}
.willdo {
  background: orange;
  color: #fff;
  outline: none;
  border: none;
}
.line {
  text-decoration: line-through;
}
</style>