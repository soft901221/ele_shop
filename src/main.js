import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
Vue.config.productionTip = false
// 全局引入字体图标
import  './assets/icon/iconfont.css'

// 使用axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 引入 mock js
require('./mock.js')
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
