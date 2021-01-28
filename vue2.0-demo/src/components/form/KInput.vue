<!--
 * @Author: your name
 * @Date: 2020-10-26 15:30:30
 * @LastEditTime: 2020-10-26 17:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\KInput.vue
-->
<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" type="text" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 避免顶层容器继承属性
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  mounted() {
    // console.log(this.$attrs.type)
  },
  methods: {
    onInput(e) {
      // 通知父组件数值变化
      this.$emit("input", e.target.value);
      // 通知FormItem校验
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style></style>
