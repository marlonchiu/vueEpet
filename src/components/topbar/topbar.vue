<template>
  <div class="wap-top-bar" style="display: block;">
    <header class="head-top">
      <div class="">

        <a href="javascript:void(0)" class="aback" @click="$router.push('/main')"></a>
        <span class="topbar-title">{{topbarTitle}}</span>
        <span class="jbur" @click="toggleShow"></span>
      </div>
    </header>
    <div class="header-quick" v-show="isShow">
      <a href="https://wap.epet.com/main.html?pet_type=dog">
        <span class="icon1"></span>
        <p>首页</p>
      </a>
      <a href="https://wap.epet.com/category.html">
        <span class="icon2"></span>
        <p>商品分类</p>
      </a>
      <a href="https://wap.epet.com/cart/">
        <span class="icon4" id="getCartNum">
          <em>0</em>
        </span>
        <p>购物车</p>
      </a>
      <a href="https://wap.epet.com/user/UserCenter.html">
        <span class="icon5"></span>
        <p>我的e宠</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      topbarTitle: String
    },
    data (){
      return {
        /*topbarTitle: '服饰城',*/
        isShow: false
      }
    },
    methods: {
      toggleShow (){
        this.isShow = !this.isShow
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wap-top-bar
    width 100%
    display block
    .head-top
      position relative
      padding 0 10px
      border-bottom 1px solid #f3f3f3
      background: #fff
      color #333
      text-align center
      box-sizing border-box
      height 50px
      line-height 50px
      .aback
        position absolute
        left 10px
        height 18px
        width 11px
        background url(../../common/images/background/img.png) no-repeat
        background-size 234px 159px
        background-position: -201px -10px
        margin-top 15px
        box-sizing border-box
        color #333
      .topbar-title
        width 90%
        display block
        margin 0 auto
        box-sizing border-box
        font-size 18px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
      .jbur
        position: absolute;
        top: 0;
        right: 10px;
        background: url(../../common/images/background/img.png) no-repeat;
        background-size: 234px 163px;
        height: 18px;
        width: 17px;
        background-position: -217px -10px;
        outline: 0;
        margin-top 14px
        margin-left 10px
        box-sizing border-box
        z-index: 100;
        float right
        cursor: pointer;
    .header-quick
      width: 100%;
      background: #fff;
      display block
      border-bottom: 1px solid #d7d7d7;
      overflow: hidden;
      box-sizing border-box
      padding: 10px 0;
      font-size 14px
      &>a
        display: inline-block;
        width: 25%;
        color #333
        text-align: center;
        float: left;
        .icon1
          width: 25px;
          height: 25px;
          display block
          background: url(../../common/images/background/img.png) no-repeat;
          background-size: 234px 163px;
          background-position: -172px -7px;
          margin: 0 auto;
        .icon2
          width: 25px;
          height: 25px;
          display block
          background: url(../../common/images/background/img.png) no-repeat;
          background-size: 234px 163px;
          background-position: -172px -49px;
          margin: 0 auto;
        .icon4
          width: 25px;
          height: 25px;
          display block
          background: url(../../common/images/background/img.png) no-repeat;
          background-size: 234px 163px;
          background-position: -172px -90px;
          margin: 0 auto;
          &>em
            position: relative;
            top: -.5em;
            left: 1em;
            display: inline-block;
            height: 22px;
            width: 22px;
            color: #fff;
            text-align: center;
            line-height: 18px;
            font-size: 12px;
            background: red;
            border-radius: 1em;
            font-style: normal
            border: #fff solid 2px;
        .icon5
          width: 25px;
          height: 25px;
          display block
          background: url(../../common/images/background/img.png) no-repeat;
          background-size: 234px 163px;
          background-position: -172px -133px;
          margin: 0 auto;
        p
          color: #666;
          line-height 1.6
          font-size: 14px;
          text-align: center
</style>
