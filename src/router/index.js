import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home.vue';//主页
import Login from '@/pages/auth/login.vue';//登录页
import Register from '@/pages/auth/Register.vue';//注册页
import Profile from '@/pages/profile.vue';//个人中心页
import Editprofile from '@/pages/editprofile.vue';//编辑页
import Myfollows from '@/pages/myfollows.vue';//我的关注页
import Mycomments from '@/pages/mycomments.vue';//我的跟帖页
import Mycollections from '@/pages/mycollections.vue';//我的收藏页
import Postdetail from '@/pages/postdetail.vue';//新闻详情/文章详情页
import MoreComments from '@/pages/morecomments.vue';//新闻详情/文章详情页
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
      path: '/mycomments',//我的跟帖页
      name: 'mycommentsPage',
      component: Mycomments
    },
    {
      path: '/mycollections',//我的收藏页
      name: 'mycollectionsPage',
      component: Mycollections
    },
    {
      path: '/postdetail/:id',//新闻详情页/ajax的文章详情
      name: 'postdetailPage',
      component: Postdetail
    },
    {
      path: '/morecomments/:id',//文章详情的点击跳转到<更多跟帖页>
      name: 'moreCommentsPage',
      component: MoreComments
    },
  ]
})
