<template>
  <div>
    <h2>## 指令directives</h2>
    <directives-demo title="directives" />
    <h2>## Teleport</h2>
    <teleport-component/>
    <h2>## Input</h2>
    <el-input v-model="value" placeholder="请输入内容"></el-input>
    <h2>## 插件</h2>
    <button @click="clickMessage">Message按钮</button>
    <br/>
    <button @click="clickToast">Message按钮2</button>
  </div>
</template>

<script>
import DirectivesDemo from './components/Other/DirectivesDemo.vue'
import TeleportComponent from './components/Other/TeleportComponent.vue'
import { defineComponent, ref, getCurrentInstance }  from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    DirectivesDemo,
    TeleportComponent
  },
  setup (props, ctx) {
    const value = ref('88888');
    // console.log(ctx)
    const app = getCurrentInstance()
    // console.log(app)
    const clickToast = () => {
      // Message('消息框')
      // app.ctx.$message('消息框2')
      app.ctx.$toast('消息框')
    }
    return {
      value,
      clickToast
    }
  },
  methods: {
    clickMessage () {
      // this.$message('消息框')
      this.$toast('消息框')
    }
  }
})
</script>
