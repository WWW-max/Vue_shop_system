import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
Vue.use(VueRouter)

const routes = [

  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home, 
      // 路由重定向
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome},
      { path: '/users',component: Users},
      { path: '/rights',component:Rights}
    ]
  }
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫（全局前置守卫）
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //next()放行  next('/login') 强制跳转

  // 如果用户访问的是登录页，任何人都可以所以直接放行
  if (to.path === '/login') return next();
  //从sessionStorage中获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')//没有token则强制跳转到登录页
  next()  //放行
})
export default router
