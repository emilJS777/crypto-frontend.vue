import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// crypto fonts
import './assets/cryptofont-1.2.0/cryptofont.css'



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


