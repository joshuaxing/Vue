import { createApp } from 'vue'
import App from './App.vue'
import {ElInput} from './components/Input/index'
import {Message} from './components/Message/index'
import { Toast } from './components/Toast/index'
import { routerList } from './config/nav'
import { formatRouterTree } from './utils/libs/lib'
import './index.css'
import i18nPlugin from './plugins/i18n'
const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  }
}

const data = formatRouterTree(routerList)
console.log(data)

const app = createApp(App)
app.config.globalProperties.$message = Message
app.config.globalProperties.$toast = Toast
app.use(i18nPlugin, i18nStrings)
app.use(ElInput)
app.mount('#app')