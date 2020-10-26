<!--
 * @Author: your name
 * @Date: 2020-10-26 15:30:21
 * @LastEditTime: 2020-10-26 18:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\KFormItem.vue
-->
<template>
  <div>
    <div>{{ label }}:</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['form'],
  props: {
    label: {
      default: ''
    },
    prop: String
  }
};
</script>

<style>
</style>