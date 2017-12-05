<template>
  <div>
    <div class="charity_img">
      <div class="charity_bg">
        <a href="javascript:;">
          <img src="./TaCharity.jpg">
        </a>
      </div>
      <div class="charity_know">
        <a href="javascript:;">
          <img src="./knowcharity.png">
        </a>
      </div>
    </div>
    <div class="charity">
      <div class="charity_bg">
        <img src="./charitybg.jpg" class="image">
      </div>
      <div class="charity_des">
        <p class="mt5">截止今日，TA公益已联合E宠商城和<b class="brand_count">15</b>家品牌</p>
        <p class="mt5">累积捐赠<b class="cred">857,272.44</b>元</p>
        <p class="mt5">已合作<b class="charity_organize">7</b>家公益组织，举办参与<b class="charity_active">2</b>场公益活动,助养<b class="charity_person">34</b>位领养人</p>
      </div>
    </div>
    <div class="charityBrand">
      <div class="brandLeft">
        <img src="https://img2.epetbar.com/nowater/2016-12/02/12/c31f5c121481db47aaf92f04d6be2d6e.png">
      </div>
      <div class="brandRight" ref="brandRight">
        <div class="brand_wrap">
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png">
              </div>
              <div class="help_money" >已捐助¥186675.85</div>
            </a>
          </div>
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" >
              </div>
              <div class="help_money" >已捐助¥168013.56</div>
            </a>
          </div>
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2017-07/14/10/86414673b92fb227bbd0d006949814ab.jpg">
              </div>
              <div class="help_money" >已捐助¥154974.51</div>
            </a>
          </div>
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg">
              </div>
              <div class="help_money" >已捐助¥154974.51</div>
            </a>
          </div>
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2017-07/14/10/86414673b92fb227bbd0d006949814ab.jpg">
              </div>
              <div class="help_money" >已捐助¥154974.51</div>
            </a>
          </div>
          <div class="brand_name">
            <a href="javascript:;">
              <div class="bran_name_img">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg">
              </div>
              <div class="help_money" >已捐助¥154974.51</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Customtitle from '../Customtitle/Customtitle.vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {}
    },
    mounted(){
      const ul =this.$refs.brandRight.children[0]
      const liWidth=100
      const marginSize=10
      const size=ul.children.length
      ul.style.width = (liWidth+marginSize)*size - 10 +'px'

      this.$nextTick(()=>{

        new BScroll(this.$refs.brandRight,{
          click:true,
          scrollX:true
        })

      })
    },
    methods: {},
    components:{
      Customtitle

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../src1/common/stylus/mixins.styl"
  .charity_img
    width 100%
    position relative
    .charity_bg
      width 100%
      text-align center
      img
        height 45px
        vertical-align middle
    .charity_know
      position: absolute;
      top: 7px;
      right: 0;
      z-index: 0;
      img
        width: 75px;
        height: auto;
        margin: 10px 5px 0 0

  .charity
    width 100%
    position relative
    background: url('./default-epet.png') no-repeat center center #f4f4f4;
    background-size: 120px auto;
    .charity_bg
      width 100%
      .image
        width 100%
    .charity_des
      position absolute
      width 100%
      top 20%
      left 0
      color #fff
      font-size 14px
      font-weight 700
      text-align center
      .mt5
        margin-top 5px
        .brand_count
          number_style()
        .cred
          color red
          font-weight 400
        .charity_organize
          margin-right 5px
          margin-left 5px
          font-weight 400
        .charity_active
          number_style()
        .charity_person
          number_style()
  .charityBrand
    background-color white
    width 100%
    overflow hidden
    .brandLeft
      box-sizing content-box
      width: 50px;
      padding-left  10px
      /*padding-top: 10px*/
      padding-right 10px
      float: left
      background-color white
      z-index 10
      height 76px
      position relative
      img
        width 100%
        display block
        margin-top 10px
        vertical-align middle
    .brandRight
      z-index -1
      margin-left: 70px;
      padding: 5px 0 0 5px;
      border-left: 1px solid #e7e7e7;
      .brand_wrap
        margin: 0 auto
        overflow hidden
        display flex
        box-sizing content-box
        .brand_name
          margin-right 10px
          border-right: 1px solid #e7e7e7;
          text-align: center;
          flex-shrink 0
          background-color white
          a
            width 100%
            display block
            .bran_name_img
              background: url('./default-epet2.jpg') no-repeat center center #fff;
              background-size: 120px auto;
              img
                height: 40px;
                margin: 0 auto;
                vertical-align middle
            .help_money
              border-top: 1px solid #e7e7e7;
              margin-top: 5px;
              width 99px
              padding: 3px 0;
              font-size 12px
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
</style>
