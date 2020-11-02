<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-10-29 14:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\views\Home.vue
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App2" v-bind:title.sync="title"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data () {
    return {
      title: '我是初始化title'
    }
  },
  components: {
    HelloWorld
  }
};
</script>
