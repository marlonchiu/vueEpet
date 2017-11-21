<template>
  <div class="ratings">
      <div class="title">
        <div class="titImg">
          <img src="./ratings.png">
        </div>
        <div class="percent">
          <a href="javascript:;">
            好评率99.64%
          </a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {}
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    position relative
    width 100%
    height 62px
    box-sizing border-box
    padding-top 10px
    display flex
    .title
      width 50%
      padding-left 25%
      .titImg
        height 100%
        &>img
          width 100%
          height 100%
      .percent
        position: absolute;
        top: 30px;
        right: -4px;
        background: url(./icon_sanjiao.png) no-repeat right;
        background-size: 8px 9px;
        padding-right: 10px;
        transform: scale(0.84)
        color #999
        font-size 12px
</style>
