<!--
 * @Author: your name
 * @Date: 2021-01-09 16:00:35
 * @LastEditTime: 2021-01-09 17:22:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent ({
    name: 'helloWorld',
    props: {
      msg: {
        type: String,
        default: '222222'
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
