import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home/Home.vue'
import main from '../components/Main/Main.vue'
import health from '../components/Health/Health.vue'
import food from '../components/Food/Food.vue'
import uses from '../components/Uses/Uses.vue'
import beauty from '../components/Beauty/Beauty.vue'
import sort from '../components/sort/sort.vue'
import shop from '../components/shop/shop.vue'
import login from '../components/Login/Login.vue'
import showHome from '../components/ShowHome/ShowHome.vue'
import sortab1 from '../components/sortab1/sortab1.vue'
import sortab2 from '../components/sortab2/sortab2.vue'
import location from '../components/location/location.vue'
import register from '../components/register/register.vue'
import recommend from '../components/recmmend/recmmend.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/showHome',
          component: showHome
        },

        {
          path: '/',
          redirect:'/showHome'
        },

        {
          path:'/sort',
          component:sort,
          children:[
            {
              path:'/tab1',
              component:sortab1,
              /*children:[
                {
                  path:'/recommend',
                  component  : recommend
                },
                {
                  path:'/',
                  redirect:'/recommend'
                }
              ],*/
            },
            {
              path:'/tab2',
              component:sortab2
            },
            {
              path:'/',
              redirect:'/tab1'
            },
          ]

        }
      ]
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/health',
      component: health
    },
    {
      path: '/food',
      component: food
    },
    {
      path: '/uses',
      component: uses
    },
    {
      path: '/beauty',
      component: beauty
    },
    {
      path: '/',
      redirect :'/home'
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/shop',
      component:shop
    },
    {
      path:'/login',
      component:login

    },
    {
      path:'/location',
      component:location
    }
  ]
})
