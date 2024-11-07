import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalHome from '../components/PersonalHome.vue'
import UserSettings from '../components/Settings.vue'
import HelpCenter from '../components/Help.vue'
import LoginPage from '../components/LoginPage.vue'  // 添加这行

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/personal-home',
    name: 'PersonalHome',
    component: PersonalHome
  },
  {
    path: '/settings',
    name: 'UserSettings',
    component: UserSettings
  },
  {
    path: '/help',
    name: 'HelpCenter',
    component: HelpCenter
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 处理路由错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') {
      throw err
    }
  })
}
/* // 添加导航守卫
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        next('/login')
      } else {
        next()
      }
    } else {
      next()
    }
  }) */

export default router