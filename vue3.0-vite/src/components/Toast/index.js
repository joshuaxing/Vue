import { h, render } from 'vue'
import ToastComponent from './toast.vue'

export function Toast(opts) {
  return createToast(mergeOptions(opts))
}

// 注册Toast
function createToast (opts) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const vnode = h(ToastComponent, opts)
    // vnode[COMPONENT_CONTAINER_SYMBOL] = container
    console.log(vnode)
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    const container = document.createElement('div')
    render(vnode, container)
   
    // 生成一个该子类的实例
    const instance =  vnode.component
    document.body.appendChild(instance.vnode.el)
    
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    // app.config.globalProperties.$toast = (msg, duration = 2000) => {
    //     instance.message = msg;
    //     instance.show = true;

    //     setTimeout(() => {
    //         instance.show = false;
    //     }, duration);
    // }
}


function mergeOptions(opts, type = 'info') {
    const defaultOptions = {
      duration: 4500
    }
  
    const userOnClose = opts?.onClose
    // opts.onClose Cannot be merged into the default options
    delete opts?.onClose
    delete opts?.offset
    defaultOptions.onClose = (instance) => {
      closeMessage(instance)
      if (userOnClose) userOnClose(instance.proxy)
    }
  
    if (typeof opts === 'string' || isVNode(opts)) {
      defaultOptions.message = opts
      return defaultOptions
    }
  
    return Object.assign({}, defaultOptions, opts)
  }