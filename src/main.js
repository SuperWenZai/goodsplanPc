import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import vueResource  from 'vue-resource'     // ajax for vue-resource
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/goodsplan.less';

Vue.use(vueResource);
Vue.use(VueRouter);  // 模块化机制编程
Vue.use(ElementUI);

const router = new VueRouter({
   	mode:"history",
    routes
})



new Vue({
  el: '#App',
  router,
  template: '<App/>',
  components: { App },
})
