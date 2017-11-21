<template>
  <div class="titList">
      <div class="title">
        <div class="titImg">
          <img src="../../common/images/title/title1.png">
        </div>
      </div>
      <div class="more">
        <a href="##">
          <img src="../../common/images/title/titlemore.png">
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
  .titList
    width 100%
    height 62px
    box-sizing border-box
    padding-top 10px
    display flex
    .title
      width 50%
      padding-left 25%
      .titImg
        height 100%
        &>img
          width 100%
          height 100%
    .more
      width 25%
      height 100%
      &>a
        width 60px
        height 100%
        display block
        float right
        img
          display block
          width 100%
          height 100%

</style>
