<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-10-26 17:18:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <slot :message="message"></slot>
    <h1>{{ msg }}</h1>
    <!-- <slot name="header"></slot> -->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,  // 避免顶层容器继承属性
  name: "HelloWorld",
  data () {
    return {
      message: ''
    }
  },
  created () {},
  props: {
    msg: String
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
