<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-10-29 14:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="$emit('update:title', '我是title的值')">updata按钮</button>
    <h2>title{{title}}</h2>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 避免顶层容器继承属性
  name: "HelloWorld",
  data() {
    return {
      message: "5555555555555"
    };
  },
  created() {},
  props: {
    msg: String,
    title: String
  }
};
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
