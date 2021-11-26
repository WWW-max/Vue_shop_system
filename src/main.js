import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import TreeTable from 'vue-table-with-tree-grid'

//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// 导入axios
import axios from 'axios'

//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// axios请求拦截器（相当于对请求作预处理）通过axios请求拦截器添加token,保证拥有获取数据的权限
axios.interceptors.request.use(config =>{
  //为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  console.log(config)
  // 最后必须return config ,固定写法
  return config
} )

// 将axios挂载到Vue的原型对象上，这样每个Vue的组件都可以通过this访问$http从而发起ajax请求
Vue.prototype.$http = axios

// 关闭Vue生产提示
Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
//将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)

//全局定义一个时间格式过滤器
Vue.filter('dateFormat',function(originVal){
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')

  const hh = (dt.getHours()+'').padStart(2,'0')
  const mm = (dt.getMinutes()+'').padStart(2,'0')
  const ss = (dt.getSeconds()+'').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
