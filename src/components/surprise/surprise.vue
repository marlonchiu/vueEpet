<template>
  <div class="surprise">
    <div class="surpriseTop">
      <div class="everyday">
        <img class="img" src="./suprice.png" alt="">
      </div>
      <div class="over">距本场结束</div>
      <div class="timing">
        <span class="time1">{{h}}</span>
        <span class="time2">:</span>
        <span class="time1">{{m}}</span>
        <span class="time2">:</span>
        <span class="time1">{{s}}</span>
      </div>
      <div class="more">
        <a href="##">
          <img src="./more.png">
        </a>
      </div>
    </div>
    <div class="surprise-list" ref="surpriseList">
      <ul class="pic-list" ref="picList">
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise1.png">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise2.jpg">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise3.jpg">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise4.jpg">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise5.jpg">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
        <li class="pic-item">
          <a href="##">
            <div class="image">
              <img src="./surprise6.png">
            </div>
            <div class="price">
              <span class="price-1">¥</span>
              <span class="price-1">1.50</span>
            </div>
            <p class="save">省￥13.50</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data (){
      return {
        h: '08',
        m: '03',
        s: '19'
      }
    },
    mounted(){
      // 动态指定ul的高度
      const ul = this.$refs.picList
      const li = 100;
      const space = 23
      const liCount = ul.children.length
      ul.style.width = (li + space) * liCount - space + 'px'
      this.$nextTick(() => {
        new BScroll(this.$refs.surpriseList, {
          click: true,
          scrollX: true,
          probeType: 2
        })
      })
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width 100%
    .surpriseTop
      padding 10px
      position relative
      overflow hidden
      .everyday
        float left
        .img
          height 24px
          margin-left -20px
          vertical-align middle
      .over
        margin-top 3px
        font-size 13px
        margin-left 10px
        float left
        margin-right 5px
      .timing
        display inline-block
        font-size 12px
        text-align center
        .time1
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
        .time2
          margin 0 1px
          font-weight 700
          font-size 12px
          vertical-align baseline
      .more
        position: absolute;
        top: 2px;
        right: -8px;
        a
          display block
          text-align right
          img
            display block
            margin 0 0 0 auto
            width 50%
            vertical-align middle

    .surprise-list
      padding-left px
      margin-bottom 10px
      .pic-list
        display flex
        .pic-item
          width 100px
          margin-right 18px
          margin-left 5px
          text-align center
          a
            display block
            img
              width 85px
            .price
              text-align center
              color red
              .price-1
                font-size 12px
              .price-2
                font-size 14px
            .save
              font-size 12px
              color #999
              text-align center

</style>
