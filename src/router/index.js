/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../pages/main/main.vue'
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
import place from '../pages/place/place.vue'
import user from '../pages/user/user.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
      /*component: main*/
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/place',
      component: place
    }
  ]
})
