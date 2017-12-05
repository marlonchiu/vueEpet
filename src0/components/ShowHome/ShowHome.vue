<template>
  <div class="homeContainer">
    <epet_header class="epet_header"></epet_header>
    <div class="tab_container" ref="tabs">
      <ul class="tab" id="tab">
        <li class="tab-item">
          <router-link to='/home'>首页</router-link>
        </li>
        <li class="tab-item">
          <router-link to='/main'>主粮</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/health">医疗保健</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/food">零食玩具</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/uses">日用外出</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/beauty">美容香波</router-link>
        </li>
      </ul>
    </div>
    <div ref="homePage" class="homePage">
      <div class="other_container">
        <BannerItem></BannerItem>
        <div class="gif">
          <a href="javascript:;">
            <img src="./go.gif">
          </a>
        </div>
        <ColumnavItem></ColumnavItem>
        <split></split>
        <SurpriseItem></SurpriseItem>
        <split></split>
        <CurrencyadItem></CurrencyadItem>
        <split></split>
        <Customtitle></Customtitle>
        <FashionvideoItem></FashionvideoItem>
        <split></split>
        <Customtitle></Customtitle>
        <div class="tiyan">
          <a href="javascript:;">
            <img src="./tiyan.jpg">
          </a>
        </div>
        <div class="special">
          <img src="./sepcial.png">
        </div>
        <SingleadItem></SingleadItem>
        <SingleadItem></SingleadItem>
        <SingleadItem></SingleadItem>
        <split></split>
        <CharityItem></CharityItem>
        <split></split>
        <JudgeItem></JudgeItem>
        <epet_footer></epet_footer>
       <!-- <div style="height: 40px"></div>-->
      </div>
  </div>
    <godog></godog>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  import BScroll from 'better-scroll'
  import BannerItem from '../../components/BannerItem/BannerItem.vue'
  import ColumnavItem from '../../components/ColumnavItem/ColumnavItem.vue'
  import split from '../../components/split/split.vue'
  import CurrencyadItem from '../../components/CurrencyadItem/CurrencyadItem.vue'
  import Customtitle from '../../components/Customtitle/Customtitle.vue'
  import FashionvideoItem from '../../components/FashionvideoItem/FashionvideoItem.vue'
  import SingleadItem from '../../components/SingleadItem/SingleadItem.vue'
  import CharityItem from  '../../components/CharityItem/CharityItem.vue'
  import JudgeItem from '../../components/JudgeItem/JudgeItem.vue'
  import footer from '../../components/footer/footer.vue'
  import SurpriseItem from '../../components/SurpriseItem/SurpriseItem.vue'
  import godog from '../../components/godog/godog.vue'

  export default {
    data () {
      return {}
    },
    mounted(){
      const ul=this.$refs.tabs.children[0]
      const liWidth =75
      const liSize=document.getElementById('tab').children.length
      ul.style.width=liWidth*liSize +'px'

      this.$nextTick(()=>{

        new BScroll(this.$refs.tabs,{
          click:true,
          scrollX:true
        })
      })
      setTimeout(()=>{
        new BScroll(this.$refs.homePage,{click:true})
      },300)
    },
    methods: {},
    components:{
      BannerItem,
      ColumnavItem,
      split,
      CurrencyadItem,
      Customtitle,
      FashionvideoItem,
      SingleadItem,
      CharityItem,
      JudgeItem,
      SurpriseItem,
      "epet_footer":footer,
      godog,
      'epet_header':Header,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeContainer
    height 100%
    width 100%
    .epet_header
      position fixed
      top 0
      left 0
      z-index 10
      width 100%
      background-color white
    .tab_container
      position fixed
      z-index 10
      background-color white
      top 108px
      width 100%
      .tab
        white-space nowrap
        overflow hidden
        .tab-item
          float left
          width 75px
          height 36px
          line-height 36px
          font-size 14px
          text-align center
          a
            display block
    .homePage
      height 667px
      width 100%
      position relative
      .other_container
        padding-top 144px
        padding-bottom 55px
        .gif
          width 100%
          height 120px
          & > a > img
            width 100%
        .tiyan
          width 100%
          height 100%
          & > a > img
            width 100%
        .special
          width 100%
          position relative
          padding-top 10px
          text-align center
          border-bottom 1px solid #f3f4f5
          & > img
            width 50%
            display block
            max-width: 50%;
            max-height: 73px;
            margin: 0 auto;
            vertical-align middle
</style>
