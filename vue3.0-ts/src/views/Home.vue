<!--
 * @Author: your name
 * @Date: 2021-01-09 16:00:35
 * @LastEditTime: 2021-01-09 17:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\views\Home.vue
-->
<template>
  <div class="home">
    首页
    <HelloWorld/>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  created() {
   
  }
  mounted() {
    console.log(this.$route)
  }
}
</script>
