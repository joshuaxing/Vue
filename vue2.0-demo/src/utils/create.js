/*
 * @Author: your name
 * @Date: 2020-10-29 10:53:08
 * @LastEditTime: 2020-10-29 15:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\utils\create.js
 */
import Vue from "vue";

export default function create(Compontent, props) {
  // 1. 创建vue实例
  const vm = new Vue({
    render(h) {
      return h(Compontent, { props });
    },
  }).$mount();
    
  // 2. 通过$children获取该组件实例
  const comp = vm.$children[0];
  // 3. 追加至body
  document.body.appendChild(vm.$el);
  // 4. 清理函数
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  // 5. 返回组件实例
  return comp;
}
