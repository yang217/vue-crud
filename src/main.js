Vue.config.productionTip = false
import Vue from "vue";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
// import './style.less';
Vue.use(Vuex)
Vue.use(VueRouter)
var routes =[
  {
    path:'/',
    components:{
      default:resolve => require(['./components/default'], resolve)
    },
    children:[
    ]
  }
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const store = new Vuex.Store({
  state: {
    n: 3,
    m:3
  },
  mutations: {
    setN (state,n) {
      if(n>=2 && n<=10){
        state.n=n;
        state.m=n;
      }
    }
  }
})

new Vue({
  el:"#app",
  router,
  store,
  template: '<App/>',
  components: { App }
});
