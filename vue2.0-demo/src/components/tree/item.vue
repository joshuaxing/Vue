<!--
 * @Author: your name
 * @Date: 2020-10-29 15:30:23
 * @LastEditTime: 2020-10-29 16:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\tree\item.vue
-->
<template>
<div>
    <h3>{{data.name}}</h3>
    <Item v-for="(item, index) in data.children" :key="index" :data="item"></Item>
</div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
        
    };
  },
  props: {
    data: Object
  },
  created () {}
};
</script>

<style>
</style>