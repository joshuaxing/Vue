/*
 * @Author: your name
 * @Date: 2021-01-09 16:00:35
 * @LastEditTime: 2021-01-09 17:37:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'

function dynamicPropsFn (route:any) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // props: (route) => ({ query: route.query.q })
  },
  {
    path: '/test/:id',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue'),
    // props: (route) => ({ query: route.query.q })
  },
  {
    path: '/detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  { path: '/hello', name: "Hello", component: Hello, props: true }, // No props, no nothing
  { path: '/helloquery', name: "HelloQUery", component: Hello, props: (route) => ({ query: route.query.plan }) }, // No props, no nothing
  { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  { path: '/static', component: Hello, props: { name: 'world' }}, // static values
  { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  { path: '/attrs', component: Hello, props: { name: 'attrs' }},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
