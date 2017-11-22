/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../pages/main/main.vue'
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
import place from '../pages/place/place.vue'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import clothmall from '../pages/clothmall/clothmall.vue'
import sort from '../components/sort/sort.vue'
import brand from '../components/brand/brand.vue'

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
      component: category,
      children: [
        {
          path: '/category',
          redirect: '/category/tab1'
        },
        {
          path: 'tab1',
          component: sort
        },
        {
          path: '/category/tab2',
          component: brand
        },
      ]
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/place',
      component: place
    },
    {
      path: '/clothmall',
      component: clothmall
    },
    {
      path: '/register',
      component: register
    }
  ]
})
