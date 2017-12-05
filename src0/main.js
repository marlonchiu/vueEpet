/**
 * Created by xhy on 2017/9/13.
 */
import Vue from 'vue'
import app from './app.vue'

import router from './router'

import '../static/banner_circle.css'
new Vue({
  el:"#app",
  render : h =>h(app),
  router
})
