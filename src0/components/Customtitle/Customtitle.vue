<template>
  <div class="custom_title">
    <div class="hot_video">
      <a href="">
        <img src="./hot_video.png" alt="">
      </a>
    </div>
    <div class="custom_more">
      <a href="">
        <img src="./more.png" alt="">
      </a>
    </div>
  </div>
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
  .custom_title
    width 100%
    padding-top 10px
    position relative
    .hot_video
      width 100%
      text-align center
      img
        display block
        max-width: 50%;
        max-height: 73px;
        margin: 0 auto;
        vertical-align middle
    .custom_more
      position absolute
      text-align right
      top 10px
      right 0
      img
        width 50%
</style>
