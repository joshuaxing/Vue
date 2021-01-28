<template>
  <input v-focus />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: String,
  },
  computed: {},
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus();
      },
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>