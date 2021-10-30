import Vue from 'vue'
// 按需导入
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
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,
    Tag,
    Tree,
    Select,
    Option,
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
Vue.use(Table) //表格
Vue.use(TableColumn)//表格
Vue.use(Switch)//开关
Vue.use(Tooltip)//按钮文字提示
Vue.use(Pagination)//分页组件
Vue.use(Dialog)//对话框
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select) //下拉框
Vue.use(Option)
Vue.prototype.$message = Message//全局挂载  将弹框组件挂载到了Vue的原型上
Vue.prototype.$confirm = MessageBox.confirm //全局挂载  将挂载到了Vue的原型上