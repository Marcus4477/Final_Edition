import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// 添加路由调试
router.afterEach((to, from) => {
  console.log('Route changed:', {
    from: from.path,
    to: to.path
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')