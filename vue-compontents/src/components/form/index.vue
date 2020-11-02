<!--
 * @Author: your name
 * @Date: 2020-10-26 15:51:22
 * @LastEditTime: 2020-10-29 13:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\form\index.vue
-->
<template>
  <div>
    <KForm ref="form" :rules="rules" :model="form">
      <KFormItem label="姓名" prop="name">
        <KInput v-model="form.name" type="text" placeholder="请输入..." />
      </KFormItem>
      <KFormItem label="年龄" prop="age">
        <KInput v-model="form.age" type="text" placeholder="请输入..." />
      </KFormItem>
      <KFormItem label="是否显示" prop="isshow">
        <KCheckBox v-model="form.isshow"/>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KFormItem from "./KFormItem.vue";
import KInput from "./KInput.vue";
import KForm from "./KForm.vue";
import KCheckBox from "./KCheckBox.vue";
import Notice from "../notice/index.vue";
import create from "@/utils/create";
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        isshow: true
      },
      rules: {
        name: [{ type: "string", required: true, message: "姓名不能为空" }],
        age: [{ type: "string", required: true, message: "请输入年龄" }],
        isshow: [{ type: "string", required: true, message: "请输入年龄" }]
      }
    };
  },
  components: {
    KFormItem,
    KInput,
    KForm,
    KCheckBox
  },
  methods: {
    onLogin() {
       // 创建弹窗实例
      let notice;
      // console.log(this.form)
      this.$refs.form.validate(isValid => {
        notice = create(Notice, {
          title: "登录校验",
          message: isValid ? "登录！！！" : "有错！！！",
          duration: 10000
        });
        notice.show();
      });
    }
  }
};
</script>

<style></style>
