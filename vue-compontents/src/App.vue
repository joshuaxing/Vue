<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-11-04 10:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    ----------------------------------------------------------------
    <!-- 表单组件 -->
    <FormTest></FormTest>
    ----------------------------------------------------------------
    <!-- 插槽 -->
    <SlotsTest></SlotsTest>

    ----------------------------------------------------------------

    <TreeTest></TreeTest>
    
  </div>
</template>
<script>
import FormTest from "@/components/form/index.vue";
import SlotsTest from "@/components/slots/index.vue";
import TreeTest from "@/components/tree/index.vue";

export default {
  components: {
    FormTest,
    SlotsTest,
    TreeTest
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
