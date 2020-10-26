<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-10-26 17:15:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\views\Home.vue
-->
<template>
  <div class="home">
    <Form></Form>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" aaa="1111" v-slot="slotProps">
      <div>
        <span>{{ slotProps.message }}</span>
      </div>
      <!-- <template v-slot:header>
        <span>我是头部</span>
      </template> -->
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Form from "@/components/form/index.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Form
  }
};
</script>
