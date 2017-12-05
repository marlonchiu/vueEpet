<template>
  <div class="fashion">
    <a href="">
      <div class="fashionVideo">
        <img src="https://img1.epetbar.com/2017-07/28/13/2506a15cf4e969125891d29f869b8572.jpg@!500w0h">
        <span class="playIcon"></span>
      </div>
      <div class="videoDescription">
        <div class="textover">神奇饮水除口臭</div>
        <div class="videoCount">
          <span class="ViewIco"></span>
          <i>25801</i>
          <span class="split">|</span>
          01:13
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fashion
    width 100%
    a
     display block
     width 100%
    .fashionVideo
      width 100%
      position relative
      img
        width 100%
      .playIcon
        background: url('play.png') 0 0 no-repeat;
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -10px;
        margin-top: -10px;
    .videoDescription
      padding 10px
      color #999
      text-align center
      .textover
        color #333
        font-size 12px
    .videoCount
      width 100%
      font-size 12px
      .ViewIco
        display: inline-block;
        width: 10px;
        height: 9px;
        background: url('view-black.png') 0 0 no-repeat;
        background-size: contain;
      .split
        margin-right 10px
        margin-left 10px


</style>
