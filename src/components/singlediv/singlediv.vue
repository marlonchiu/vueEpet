<template>
  <div class="singlediv">
    <!--标题-->
    <div class="pad">
      <span class="pad_big">临期不改好货本质</span>
      <span class="pad_small">进口好货，低至1折！</span>
    </div>
    <!--图片-->
    <div class="linkImg">
      <a href="##"  class="image">
        <img src="./single.jpg" alt="">
      </a>
    </div>
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
  .singlediv
    width 100%
    height 200px
    .pad
      height 40px
      width 100%
      padding 10px
      box-sizing border-box
      .pad_big
        font-size 15px
      .pad_small
        font-size 12px
        color #999
        margin-left 5px
    .linkImg
      width 100%
      height 100%
      &>a
        display block
        img
          display block
          width 100%
          height 100%
</style>
