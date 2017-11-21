<template>
  <div class="carousel">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide1.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide2.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide3.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide4.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide5.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="##">
          <img src="../../common/images/slide/slide6.jpg" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  .carousel
    width 375px
    height 160px
  &>img
    display flex
    width 100%
    height 100%

</style>
