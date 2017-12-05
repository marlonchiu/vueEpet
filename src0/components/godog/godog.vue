<template>
  <div class="go-dog"></div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .go-dog
    background: url('./godog.png');
    width 41px
    height 46px
    background-size 80px auto
    position fixed
    bottom 15%
    right -1px
    z-index 2
    animation-name abc
    animation-duration 2.5s
    animation-direction initial
    animation-iteration-count infinite
    animation-timing-function steps(2)
    @keyframes abc
      from
        background-position: 0,0;
      to
        background-position: 79px,0;
</style>
