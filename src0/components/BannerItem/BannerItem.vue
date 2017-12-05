<template>
  <div class="swipe_wrape">
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <a href=""><img src="./img/1.jpg" alt=""></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href=""><img src="./img/2.jpg" alt=""></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href=""><img src="./img/3.jpg" alt=""></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href=""><img src="./img/4.jpg" alt=""></a>
      </mt-swipe-item>
      <mt-swipe-item >
        <a href=""><img src="./img/5.jpg" alt=""></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href=""><img src="./img/6.jpg" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem} from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swipe_wrape
    position relative
    width 100%
    height 160px
    & img
      width 100%

</style>
