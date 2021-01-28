export default {
    install: (app, options) => {
      console.log(options)
      app.config.globalProperties.$translate = (key) => {
        console.log(key)
        return key.split('.')
          .reduce((o, i) => { if (o) return o[i] }, i18n)
      }
      app.provide('i18n', options)
  
      app.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
          // some logic ...
        }

      })
  
      app.mixin({
        created() {
          // some logic ...
        }

      })
    }
  }