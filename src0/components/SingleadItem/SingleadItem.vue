<template>
  <div class="singlePic">
    <div class="singleText">
      <span class="ft15">伯纳天纯</span>
    </div>
    <div class="pic">
      <a href="">
        <img src="./singlePic2.jpg" alt="">
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
  .singlePic
    width 100%
    .singleText
      padding 10px
      .ft15
        font-size 15px
    .pic
      width 100%
      background url("default-epet.png") no-repeat center center #f4f4f4
      background-size 120px auto
      & > a > img
        top 0
        left 0
        width 100%
        vertical-align middle
</style>
