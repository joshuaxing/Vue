<template>
   <div>
      Detail
   </div>
</template>
<script lang='ts'>
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
   name: '',
   data() {
       return {}
   },
  components: {},
  computed: {},
  setup() {
      const route = useRoute();
      console.log(route.query)
   },
})
</script>
<style scoped lang='scss'>
</style>
