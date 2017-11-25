import Vue from 'vue'
import {
  Search,
  Swipe,
  SwipeItem,
  Toast
} from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import '../static/css/reset.css'
import './mock/mockServer'
import store from './store'

Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast.name, Toast);
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
