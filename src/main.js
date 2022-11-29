import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/AboutPage'
import dataCalculator from './components/dataCalculator'
Vue.use(VueRouter);
const routes=[
  {path: '/', component:About},
  {path: '/dataCalculator', component:dataCalculator}
]
const router= new VueRouter({
  routes
})
Vue.config.productionTip = false
new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
