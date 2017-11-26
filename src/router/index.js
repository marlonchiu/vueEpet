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
// 路由懒加载
// const main = () => import('../pages/main/main.vue')
// const cart = () => import('../pages/cart/cart.vue')
// const category = () => import('../pages/category/category.vue')
// const place = () => import('../pages/place/place.vue)
// const login = () => import('../pages/login/login.vue')
// const register = () => import('../pages/register/register.vue')

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
