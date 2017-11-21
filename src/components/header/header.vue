<template>
  <div class="header">
    <div class="main">
      <router-link to="/place">站点</router-link>
      <router-view></router-view>
      <!--<div class="top">
        <div class="location">
          <span>狗狗站</span>
          <span>|</span>
          <span>上海</span>
        </div>
        <p class="search">
          <a href="">
            <input type="search" placeholder="搜索商品和品牌" />
          </a>
        </p>
        <a class="message" href="">
          <img src="./message-icon.png" alt="">
        </a>
      </div>-->
      <div class="find_nav">
        <div class="find_nav_list">
          <ul>
            <li>
              <a href="">
                <span>

                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data (){
      return {}
    },
    methods: {
/*      _initScroll () {
        // 异步创建商家BScroll对象
        this.$nextTick(() => {
          new BScroll(this.$refs.seller, {
            click: true,
            probeType: 2
          })
        })
      }*/
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color rgb(255, 255, 255)
    width 100%
    height 86px
    padding 8px 0
    box-sizing border-box
    .main
      width 100%
      height 100%
      .top
        width 100%
        padding: 5px 10px
        height: 43px
/*    find_nav
      width 100%
      min-width 320px
      height 35px*/
</style>
