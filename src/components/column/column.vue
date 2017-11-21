<template>
  <div class="columns">
    <ul>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column1.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column2.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column3.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column4.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column5.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column6.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column5.png" alt="">
        </a>
      </li>
      <li class="fl">
        <a href="">
          <img src="../../common/images/column/column6.png" alt="">
        </a>
      </li>
    </ul>
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
  .columns
    width 100%
    height 175px
    ul
      width 100%
      height 100%
      &>li
        width 25%
        height 50%
        float left
        &>a
          display block
          img
            display block
            width 100%
            height 100%
</style>
