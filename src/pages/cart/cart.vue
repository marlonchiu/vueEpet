<template>
  <div>
    <topbar></topbar>
    <div class="CartBox">
      <div class="cartlist"></div>
      <div class="title">购物车是空的</div>
      <div class="carBtn">
        <a href="#">去逛逛</a>
        <a href="#">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  import topbar from '../../components/topbar/topbar.vue'
  export default {
    data (){
      return {}
    },
    components: {
      topbar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .CartBox
    width 100%
    height 298px
    background: #F5F5F5;
    .cartlist
      margin: 50px 137px 20px;
      box-sizing border-box
      display: inline-block;
      width: 100px
      height: 100px;
      background: url(./cart-ico.png) no-repeat 0 -160px;
      background-size: 105px auto;
      text-align center
    .title
      text-align center
      font-size 1.2em
      color #dbdbdb
    .carBtn
      margin-top 1.5em
      text-align center
      box-sizing border-box
      &>a
        display: inline-block;
        border-radius: 5px;
        border: 1px solid #999;
        color #999
        height: 40px;
        font-size 1.2em
        line-height: 40px;
        width: 100px
</style>
