

<template>
  <div>
    <input type="text" v-model="todoValue" @keyup="setTodoValue" />
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useTodo, IUseTodo } from '@/hooks/todo'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'TodoInput',
  setup () {
    const { setTodo }: IUseTodo = useTodo();
    const todoValue = ref<string>('');
    const setTodoValue = (e:KeyboardEvent) => {
      if (e.keyCode === 13 && todoValue.value.trim().length) {
        // 设置值
        setTodo(todoValue.value)
        todoValue.value = ''
      }
    }

    return {
      todoValue,
      setTodoValue
    }
  }
})
</script>

<style>

</style>