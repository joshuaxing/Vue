<!--
 * @Author: your name
 * @Date: 2020-10-23 17:15:41
 * @LastEditTime: 2020-11-06 16:52:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\views\About.vue
-->
<template>
  <div class="about">
    <!-- <h1>This is an about Vuex</h1>
     countstore数量:{{count}}
    <button @click="() => this.$store.dispatch('countstore/asyncAdd')">按钮</button>
     兄弟层数量:{{count2}}-{{getbrothercount}}
     顶层数量:{{count2}}-{{getparentcount}} -->
     <h1>This is an about KVuex</h1>
     countstore数量:{{count2}}
    <button @click="() => this.$store.dispatch('asyncAdd')">按钮</button>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      lovingVue: false
    };
  },
  computed: {
    ...mapState({
      count: state => state.countstore.count,
      amount: state => state.countstore.amount,
      count2: state => state.count,
    }),
    ...mapGetters({
      getbrothercount: 'countstore/getbrothercount'
    }),
    getparentcount() {
      return this.$store.getters['countstore/getparentcount']
    }
  },
  created () {
    console.log(this.$store)
  },
};
</script>>