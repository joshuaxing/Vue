<!--
 * @Author: your name
 * @Date: 2020-10-28 17:16:01
 * @LastEditTime: 2020-10-29 10:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\KCheckBox.vue
-->
<template>
  <input type="checkbox" :checked="checked" @change="onChange" />
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    onChange(e) {
       this.$emit('change', e.target.checked)
    }
  }
};
</script>

<style>
</style>