/*
 * @Author: your name
 * @Date: 2020-10-29 17:19:06
 * @LastEditTime: 2020-10-30 11:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\router\kvue-router.js
 */

let Vue;

class VueRouter {
  constructor(options) {

    this.$options = options;

    // 创建一个路由path和route映射
    this.routerMap = {};

    // 当前路由需要响应式
    this.app = new Vue ({
       data: {
         current: '/'
       }
    })
  }

  init () {

    // 绑定浏览器事件
    this.bindEvent()

    // 解析路由
    this.createRouteMap(this.$options)

    // 注册router-link和router-view组件
    this.initComponent()

  }

  bindEvent () {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }

  onHashChange () {
    // http://localhost/#/home
    this.app.current = window.location.hash.slice(1) || "/";
  }



  createRouteMap (options) {
    // ['/home']: {path:'/home',component:Home}
    options.routes.map(item => {
      this.routerMap[item.path] = item
    })
  }

  initComponent () {

    // 声明两个全局组件
    // <a :href="to">xxx</a>
    Vue.component({
      props: {
        to: String
      },
      render (h) {
        return h('a', {attrs: {href: '#' + this.to}}, this.$slots.default)
      }
    })

    Vue.component({
      render (h) {
        const Comp = this.routeMap[this.app.current].component;
        return h(Comp);
      }
    })

  }

}

VueRouter.install = function (_Vue) {
  Vue = _Vue; // 这里保存，上面使用
  // 混入任务
  Vue.mixin({
    // 混入：就是扩展Vue
    beforeCreate() {
      // 这里的代码将来会在外面初始化的时候被调用
      // 这样我们就实现了Vue扩展
      // this是谁？ Vue组件实例
      // 但是这里只希望根组件执行一次
      if (this.$options.router) {
        // Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }

    },
  });
}

export default VueRouter

