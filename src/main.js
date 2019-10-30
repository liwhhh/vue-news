// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
//引入组件库
import Vant from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';//组件里面使用

//配置axios
import axios from "axios";
Vue.prototype.$axios = axios;
//设置默认的api域名
axios.defaults.baseURL = "http://111.230.181.206:3000";

import { Toast } from 'vant';
axios.interceptors.response.use(res => {
  //解构服务器的成功与否数据
  const { message, statusCode } = res.data;
  if (message && statusCode == 401) {
    Toast.fail(message);
  }
  return (res);
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
