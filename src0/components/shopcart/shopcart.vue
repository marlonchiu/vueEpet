<template>
  <div>
    <div class="header-quick">
      <ul class="list">
        <li >
          <router-link to="/home">
            <div style="width: 100% ;height: 100%"></div>
          </router-link>
        </li>
        <li class="list2">
          <router-link to="/sort">
            <div style="width: 100% ;height: 100%"></div>
          </router-link>
        </li>
        <li class="list3">
          <router-link to="/shop">
            <div style="width: 100% ;height: 100%"></div>
          </router-link>
        </li>
        <li class="list4">
          <router-link to="/login">
            <div style="width: 100% ;height: 100%"></div>
          </router-link>
        </li>
      </ul>
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
  @import "../../common/stylus/mixins.styl"
  .header-quick
    border-top: 1px solid #e7e7e7;
    height 45px
    line-height 45px
    position fixed
    background-color white
    bottom 0
    left 0
    width 100%
    z-index 103
    .list
      width 100%
      li
        float: left;
        width 25%
        height 55px
        background: url('./img_head/head_icon1.png') no-repeat center 2px
        background-size: auto 40px
      .list2
        background: url('./img_head/head_icon2.png') no-repeat center 2px
        background-size: auto 40px
      .list3
        background url('./img_head/head_icon4.png') no-repeat center 2px
        background-size auto 40px
      .list4
        background url('./img_head/head_icon5.png') no-repeat center 2px
        background-size auto 40px

</style>
