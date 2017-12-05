<template>
  <div>
    <div class="judgeItem">
      <div class="judegtitle">
        <a href="javascript:;">
          <img src="./judge.png" alt="">
        </a>
      </div>
      <div class="judegPer">
        <a href="javascript:;">
          好评率99。64%
        </a>
        <a href="javascript:;">

        </a>
      </div>
    </div>
    <div class="brands-judge">
      <ul class="brand_list">
        <li class="brand_item">
          <a href="javascript:;">
            <div class="img">
              <img src="./cat.jpg" alt="">
              <div class="join_time">加入E宠2年2月</div>
            </div>
            <div class="pet_des">
              <span class="fl">红*****ω</span>
              <span class=" pet-name">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro">
              包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
            </div>
          </a>
        </li>
        <li class="brand_item">
          <a href="javascript:;">
            <div class="img">
              <img src="./cat.jpg" alt="">
              <div class="join_time">加入E宠2年2月</div>
            </div>
            <div class="pet_des">
              <span class="fl">红*****ω</span>
              <span class=" pet-name">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro">
              包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
            </div>
          </a>
        </li>
        <li class="brand_item">
          <a href="javascript:;">
            <div class="img">
              <img src="./cat.jpg" alt="">
              <div class="join_time">加入E宠2年2月</div>
            </div>
            <div class="pet_des">
              <span class="fl">红*****ω</span>
              <span class=" pet-name">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro">
              包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
            </div>
          </a>
        </li>
        <li class="brand_item">
          <a href="javascript:;">
            <div class="img">
              <img src="./cat.jpg" alt="">
              <div class="join_time">加入E宠2年2月</div>
            </div>
            <div class="pet_des">
              <span class="fl">红*****ω</span>
              <span class=" pet-name">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro">
              包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Customtitle from '../Customtitle/Customtitle.vue'
  export default {
    data () {
      return {}
    },
    methods: {},
    components:{
      Customtitle
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .judgeItem
    width 100%
    position relative
    .judegtitle
      width 100%
      text-align center
      img
        height 45px
        vertical-align middle
    .judegPer
      position: absolute;
      top: 14px;
      right: -4px;
      font-size 12px
      background: url('./icon_sanjiao.png') no-repeat right;
      background-size: 8px 9px;
      padding-right: 10px;
      transform: scale(0.84);
  .brands-judge
    width 100%
    .brand_list
      width 100%
      .brand_item
        width 50%
        float left
        display list-item
        a
          display block
          background-color #f5f5f5
          .img
            margin-left 10px
            margin-top 10px
            margin-right 5px
            position relative
            img
              width 100%
            .join_time
              position absolute
              bottom 5px
              left 0
              text-align center
              width 100%
              background rgba(0,0,0,.4)
              font-size 12px
              color white
          .pet_des
            font-size 12px
            padding-right 5px
            padding-left 15px
            text-align center
            .fl
              float left
            .pet-name
              background #ddd;
              border-radius 5px
              padding 0 5px
          .font-intro
            height 60px
            overflow hidden
            font-size 13px
            color #999
            padding-left 15px
            padding-right 5px
            margin-top 5px


</style>
