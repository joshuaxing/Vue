<template>
  <div class="about">
    <div>about页面</div>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoList from '../components/TodoList/index.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'About',
  components: {
    TodoList
  },
  setup () {
    const route = useRoute();
    console.log(route.params)
  }
})

</script>