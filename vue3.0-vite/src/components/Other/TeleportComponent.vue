<template>
   <div>
        <button @click="modalOpen = true">
            弹出一个全屏模态窗口</button>
        <teleport to="body">
            <div v-if="modalOpen" class="modal">
            <div>
                这是一个模态窗口!
                我的父元素是"body"！
                <button @click="modalOpen = false">Close</button>
            </div>
            </div>
        </teleport>
   </div>
</template>
<script lang='ts'>
import {defineComponent} from 'vue';
export default defineComponent({
   name: 'TeleportComponent',
   data() {
    return {
      modalOpen: false
    }
  },
  components: {},
  computed: {},
  setup() {

   },
})
</script>
<style lang="scss" scoped>
.title2 {
  color: orange;
  display: flex;
}
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>