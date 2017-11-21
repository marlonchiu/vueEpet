<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="../../common/images/slide/slide1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide3.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide4.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide5.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide6.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide7.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../common/images/slide/slide8.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        /*autoplay: 2500,*/
        autoplayDisableOnInteraction: false,
/*        grabCursor: true,
        autoHeight: true,
        loop: true*/
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  swiper
    width 375px
    height 160px
  &>img
    display flex
    width 100%
    height 100%

</style>
