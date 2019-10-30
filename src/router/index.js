import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home.vue';//主页
import Login from '@/pages/login.vue';//登录页
import Register from '@/pages/Register.vue';//注册页
import Profile from '@/pages/profile.vue';//个人中心页
import Editprofile from '@/pages/editprofile.vue';//编辑页
import Myfollows from '@/pages/myfollows.vue';//我的关注页
import Mycomments from '@/pages/mycomments.vue';//我的跟帖页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//首页
      name: 'homePage',
      component: Home
    },
    {
      path: '/login',//登录
      name: 'loginPage',
      component: Login
    },
    {
      path: '/register',//注册
      name: 'registerPage',
      component: Register
    },
    {
      path: '/profile',//个人中心
      name: 'profilePage',
      component: Profile
    },
    {
      path: '/editprofile',//编辑
      name: 'editprofilePage',
      component: Editprofile
    },
    {
      path: '/myfollows',//我的关注页
      name: 'myfollowsPage',
      component: Myfollows
    },
    {
      path: '/mycomments',//我的关注页
      name: 'myCommentsPage',
      component: Mycomments
    },
  ]
})
