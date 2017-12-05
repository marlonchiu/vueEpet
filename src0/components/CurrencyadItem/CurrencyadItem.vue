<template>
  <div class="current">
    <div class="hot_column">
      <a href="">
        <img src="https://img2.epetbar.com/nowater/2017-03/09/18/ca98c516add7611e3d0d810d58c087bf.jpg">
      </a>
    </div>
    <div class="hot_new">
      <div class="hot_new_col1">
        <a href="">
          <img name="319x379" src="https://img2.epetbar.com/nowater/2017-09/21/09/03f51eb78add57a87f2619517758cbf4.jpg@!water">
        </a>
      </div>
      <div class="hot_new_col2">
        <div class="hot_new_col21">
          <a href="">
            <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/09/042df360a733282ab3544ce261e0a75d.jpg@!water">
          </a>
        </div>
        <div class="hot_new_col21">
          <a href="">
            <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/10/fcb76da8467e018d480207720f0bd74a.jpg@!water">
          </a>
        </div>
      </div>
    </div>
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
  .current
    width 100%
    margin-top 10px
    .hot_column
      width 100%
      img
        width 100%
        vertical-align middle
    .hot_new
      display flex
      width 100%
      .hot_new_col1
        img
          width 100%
          vertical-align middle
          border-right: 1px solid #e7e7e7;
      .hot_new_col2
        .hot_new_col21
          width 100%
          height 50%
          img
            width 100%
            vertical-align middle
        .hot_new_col22
          width 100%
          height 50%
          img
            width 100%
            vertical-align middle





</style>
