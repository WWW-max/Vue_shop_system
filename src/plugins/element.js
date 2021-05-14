import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col
} from 'element-ui'
// 导入弹框提示组件
import{Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)//面包屑导航
Vue.use(BreadcrumbItem)//面包屑导航
Vue.use(Card)//卡片视图
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message//全局挂载  将弹框组件挂载到了Vue的原型上
