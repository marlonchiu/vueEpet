<template>
  <div class="header">
    <div class="download" v-show="isDownload">
      <div class="overflow ">
        <span class="closebtn" @click="closeDownload">
          <img id="close_down_bar" src="./closebtn.png">
        </span>
        <div class="appdowimg">
          <a href="#" style="display: block;">
            <img src="./download.jpg">
          </a>
        </div>
      </div>
    </div>
    <div class="epet-search ">
      <div class="location">
        <a href="javascript:;">
          <span class="dogStation c89">狗狗站</span>
          <span class="c89">|</span>
          <span data-name="my-place" class="myposition">{{location}}</span>
          <i class="icon_down"></i>
        </a>
      </div>
      <p class="search-text">
        <a href="##">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="eico"></span>
        </a>
      </p>
      <a href="#" class="epet-category">
        <img src="./mydope.png">
      </a>
    </div>
    <div class="find_nav" ref="findNav">
        <ul class="tab">
          <li class="tab-item">
            <router-link to="/clothmall">首页</router-link>
            <!--<a href="#">首页</a>-->
          </li>
          <li class="tab-item">
            <a href="#">服饰城</a>
          </li>
          <li class="tab-item">
            <a href="#">狗狗主粮</a>
          </li>
          <li class="tab-item">
            <a href="#">医疗保健</a>
          </li>
          <li class="tab-item">
            <a href="#">零食玩具</a>
          </li>
          <li class="tab-item">
            <a href="#">日用外出</a>
          </li>
          <li class="tab-item">
            <a href="#home">美容香波</a>
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
        isDownload:true,
        location: '重庆'
      }
    },
    mounted(){
      const ul = this.$refs.findNav.children[0]
      const liWidth = 75
      const liCount = ul.children.length
      ul.style.width = liWidth * liCount + 'px'
      this.$nextTick(()=>{
        new BScroll(this.$refs.findNav,{
          click:true,

        })
      })
    },
    methods: {
      closeDownload(){
        this.isDownload=false
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    position fixed
    z-index 10
    .download
      width 100%
      height 55px
      .overflow
        width 100%
        .closebtn
          display inline-block
          width 19px
          height 22px
          position absolute
          top 14px
          left 7px
          & > img
            width 100%
        .appdowimg
          width 100%
          height 100%
          & > a >img
            width 100%
            vertical-align middle
    .epet-search
      display -webkit-box
      padding 13px 10px
      align-items center
      text-align center
      background #fff
      .location
        position relative
        margin-right 20px
          .c89
            clolor #898989
          .myposition
            font-size 13px
          .icon_down
            position: absolute;
            top: 6px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
      .search-text
        -webkit-box-flex 1
        display block
        position relative
        &>a
          color: #333
          margin-left 8px
          &>input
            width: 100%;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
          & .eico
            width: 11px;
            height: 11px;
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-position: 0 0;
            background url("./search.png") no-repeat
            background-size 11px auto
      .epet-category
        display block
        & > img
          width 25px
          margin-left 10px
          vertical-align middle
    .find_nav
      position: fixed;
      z-index: 10;
      background-color: #fff;
      top: 105px;
      width: 100%;
      .tab
        white-space: nowrap;
        overflow: hidden;
        .tab-item
          float: left;
          width: 75px;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
          text-align: center;
          &>a
            display block
</style>
