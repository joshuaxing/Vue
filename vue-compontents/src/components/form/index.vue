<!--
 * @Author: your name
 * @Date: 2020-10-26 15:51:22
 * @LastEditTime: 2020-10-26 18:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\index.vue
-->
<template>
  <div>
    <KForm ref="form" :rules="rules">
      <KFormItem label="姓名" prop="name">
        <KInput v-model="form.name" type="number" placeholder="请输入..."/>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KFormItem from "./KFormItem.vue";
import KInput from "./KInput.vue";
import KForm from "./KForm.vue";

export default {
  data() {
    return {
      form: {
        name
      },
      rules: [{}]
    };
  },
  components: {
    KFormItem,
    KInput,
    KForm
  }
};
</script>

<style>
</style>