<template>
  <div>
    <topbar topbarTitle = "服饰城"></topbar>
    <div id="detail">
      <div id="wrapper">
        <!--展示图-->
        <div class="carousel">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="##">
                <img src="./cloth_show.jpg" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--八个分类-->
        <div class="columns">
          <ul>
            <li class="fl">
              <a href="">
                <img src="./cloth_01.jpg" alt="">
              </a>
              <p class="ft">外套</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_02.jpg" alt="">
              </a>
              <p class="ft">卫衣</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_03.jpg" alt="">
              </a>
              <p class="ft">四脚装</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_04.jpg" alt="">
              </a>
              <p class="ft">马甲</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_01.jpg" alt="">
              </a>
              <p class="ft">外套</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_02.jpg" alt="">
              </a>
              <p class="ft">外套</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_03.jpg" alt="">
              </a>
              <p class="ft">外套</p>
            </li>
            <li class="fl">
              <a href="">
                <img src="./cloth_08.jpg" alt="">
              </a>
              <p class="ft">更多</p>
            </li>
          </ul>
        </div>
        <div class="post">
          <div class="post-item">
            <a href="##">
              <img src="./cloth_11.jpg" alt="">
            </a>
          </div>
          <div class="post-item">
            <a href="##">
              <img src="./cloth_12.jpg" alt="">
            </a>
          </div>
        </div>
        <!--fashion-->
        <div class="fashion">
          <div class="title">时尚大牌</div>
          <div class="cab">尖货品质 深度折扣</div>
        </div>
        <!--流行风格-->
        <div class="popular">
          <div class="title">流行风格</div>
          <div class="cab">好货不贵 做有腔调的汪</div>
          <div class="popular_top">
            <img src="./cloth_21.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import topbar from '../../components/topbar/topbar.vue'
  export default {
    components: {
      topbar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width 375px
    height 160px
  &>img
    display flex
    width 100%
    height 100%
  .columns
    width 100%
    ul
      width 100%
      background #ffffff
      box-sizing border-box
      padding 15px 0 5px
      &>li
        width 25%
        height 50%
        box-sizing border-box
        padding 0 15px
        margin-bottom 10px
        float left
        &>a
          margin-top: 6px;
          display: block;
          text-align: center;
          color: #666;
          overflow: hidden;
          border-radius: 50%;
          img
            display block
            width 100%
            height 100%
        &>p
          margin-top: 6px;
          display: block;
          text-align: center;
          color: #666;
          font-size 12px
          line-height 1.6
          border-radius: 50%;
          -webkit-border-radius: 50%
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
  .post
    width: 100%;
    padding: 0 2%;
    overflow: hidden
    .post-item
      float left
      padding: 0;
      box-sizing: border-box
      width: 48%;
      margin: 0 1%;
  .fashion, .popular
    width 100%
    .title
      padding 10px 0
      width 100%
      height 24px
      line-height 24px
      display: inline-block;
      font-size: 15px
      text-align center
    .cab
      text-align center
      width 100%
      height 20px
      color: #ababab;
      font-size: 13px
    .popular_top
      width: 100%;
      box-sizing border-box
      padding: 0 3%
</style>
