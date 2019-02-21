import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  error:'./static/error.jpg',
  loading:'./static/loading.gif'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
