import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MQ from 'vue-mq'

Vue.config.productionTip = false

Vue.use(MQ, {
  breakpoints: {
    1: 576, //sm...
    2: 768,
    3: 992,
    4: 1024,
    5: 1200
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
