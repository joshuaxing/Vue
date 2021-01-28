
<template>
  <div>
    <ListTtem v-for="(item) in list" :key="item.id" :item="item" @toggleTodo="doToggleTodo" @removeTodo="doRemoveTodo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import ListTtem from './item.vue'
import {Store, useStore} from 'vuex'
import { IState, ITodo }  from '@/typing/index'
import { useTodo }  from '@/hooks/todo'

export default defineComponent({
  name: 'List',
  components: {
    ListTtem
  },
  setup () {

    const store:Store<any> = useStore();
    const todoData = computed(() => store.state.todo.todoData)
   
    const { toggleTodo, removeTodo, intTodoList } = useTodo();

    const doToggleTodo = (id: number):void => {
      toggleTodo(id)
    }
    const doRemoveTodo = (id: number):void => {
      removeTodo(id)
    }

    onMounted(() => {
      // 初始化数据
      intTodoList()
    })

     return {
      list: todoData,
      doToggleTodo,
      doRemoveTodo
    }
  }
})
</script>

<style>

</style>
