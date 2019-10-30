// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';//1.引入路由2.路由守卫
//引入组件库
import Vant from 'vant';
import { Toast } from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';//组件里面使用

//配置axios
import axios from "axios";
Vue.prototype.$axios = axios;
//设置默认的api域名
axios.defaults.baseURL = "http://111.230.181.206:3000";


//1.路由导航守卫  去个人中心要登录了才能去
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  //去的页面在个人中心都要通过有token才能访问
  const pageNeedAuth = [
    '/profile',
    '/editprofile'
  ]
  // if (to.path == '/profile') {
  if (pageNeedAuth.indexOf(to.path) >= 0 ) { //有在这里的
    if (token) {
      return next();//有token
    } else {
      // return next('/login');
    return  router.push({ //强制到login页
        path:'/login'
      })
    }
  }
  next();//其他的可以下一步
})

// 2.axios拦截器,响应拦截器,统一处理错误
axios.interceptors.response.use(res => {
  //解构服务器的成功与否数据
  const { message, statusCode } = res.data;
  if (message && statusCode == 401) {
    Toast.fail(message);
  }
  //如果用户过期
  if (message == '用户信息验证失败') {
    router.push('/login');// 没有权限
    // router.push({
    //   name: 'loginPage'
    // })
  }
  return res;
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
