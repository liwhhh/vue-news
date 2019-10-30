import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login.vue';//登录页
import Register from '@/pages/Register.vue';//注册页
import Profile from '@/pages/profile.vue';//个人中心页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: Profile
    }
  ]
})
