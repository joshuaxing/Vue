
<template>
  <div>
    <TodoInput />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInput from './TodoInput/index.vue'
import List from './List/index.vue'
export default defineComponent({
  name: 'TodoList',
  components: {
    List,
    TodoInput
  },
  setup() {
    
  }
})
</script>

<style>

</style>