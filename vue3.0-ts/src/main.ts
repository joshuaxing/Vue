/*
 * @Author: your name
 * @Date: 2021-01-09 16:00:35
 * @LastEditTime: 2021-01-09 20:00:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-ts\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')
