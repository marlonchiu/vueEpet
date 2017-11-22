<template>
  <div class="switchtype">
    <div class="godog"></div>
  </div>

</template>

<script>
  export default {
    data (){
      return {}
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .godog
      position fixed
      right 1px
      bottom 15%
      width 41px
      height 46px
      z-index 10
      background: url('./godog.png')
      background-size 80px auto
      animation-name: nnh;
      animation-duration: 2.5s;
      animation-timing-function: steps(2, end);
      animation-delay: initial;
      animation-direction initial
      animation-iteration-count: infinite;
      @keyframes nnh
        from
          background-position 0 0
        to
          background-position 79px 0
</style>
