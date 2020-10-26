<!--
 * @Author: your name
 * @Date: 2020-10-26 15:30:05
 * @LastEditTime: 2020-10-26 18:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\KForm.vue
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this // 传递Form实例给后代，比如FormItem用来校验
    };
  }
}
</script>

<style>

</style>