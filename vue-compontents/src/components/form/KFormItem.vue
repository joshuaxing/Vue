<!--
 * @Author: your name
 * @Date: 2020-10-26 15:30:21
 * @LastEditTime: 2020-10-29 09:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\KFormItem.vue
-->
<template>
  <div>
    <div v-if="label">{{ label }}:</div>
    <slot></slot>
    {{ errorMessage }}
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  data() {
    return {
      errorMessage: ""
    };
  },
  inject: ["form"],
  props: {
    label: {
      default: ""
    },
    prop: String
  },
  mounted() {
    // console.log(this.form)
    // 监听校验事件、并执行监听
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 获取校验规则
      const rules = this.form.rules[this.prop];
      // 获取数据
      const value = this.form.model[this.prop];

      // 执行校验
      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, (errors, fields) => {
        // console.log(fields)
        if (errors) {
          // 有错
          this.errorMessage = errors[0].message;
        } else {
          // 没错，清除错误信息
          this.errorMessage = "";
        }
        // console.log(this.errorMessage);
      });
    }
  }
};
</script>

<style></style>
