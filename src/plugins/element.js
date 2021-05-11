import Vue from 'vue'
import { Button, Form, FormItem ,Input} from 'element-ui'
// 导入弹框提示组件
import{Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message//全局挂载  将弹框组件挂载到了Vue的原型上
