<template>
  <div class="epet_header">
    <div class="download" v-show="isDownload">
      <div class="overflow ">
        <span class="closebtn" @click="closeDownload">
          <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a href="https://wap.epet.com/download.html?do=market&amp;utm_source=baidu-wap-pz&amp;utm_type=source" style="display: block;">
            <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water                              ">
          </a>
        </div>
      </div>
    </div>
    <div class="epet-search ">
      <router-link to="/location">
        <div class="location">
          <a href="javascript:;">
            <span class="dogStation c89">狗狗站</span>
            <span class="c89">|</span>
            <span data-name="my-place" class="myposition">{{delocation}}</span>
            <i class="icon_down"></i>
          </a>
        </div>
      </router-link>
      <p class="search-text">
        <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="eico"></span>
        </a>
      </p>
      <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </a>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        isDownload:true,
        delocation:"北京1"
      }
    },
    mounted(){
      this.delocation = localStorage.getItem('del')
      PubSub.subscribe("provinceMsg",(msg,data)=>{
        this.delocation=data
        localStorage.setItem('del',this.delocation)
      })
    },
    methods: {
      closeDownload(){
        this.isDownload=false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .epet_header
    width 100%
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
      align-items center
      padding 13px 10px
      text-align center
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
            background url("./img_head/search.png") no-repeat
            background-size 11px auto
      .epet-category
        display block
        & > img
          width 25px
          margin-left 10px
          vertical-align middle
</style>
