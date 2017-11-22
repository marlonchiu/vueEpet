<template>
  <div class="footer" v-if="isShow">
    <ul class="tab">
      <li class="tab-item1">
        <router-link to="/main">
          <div style="width: 100% ;height: 100%"></div>
        </router-link>
      </li>
      <li class="tab-item2">
        <router-link to="/category">
          <div style="width: 100% ;height: 100%"></div>
        </router-link>
      </li>
      <li class="tab-item3" @click="hideFooter">
        <router-link to="/cart">
          <div style="width: 100% ;height: 100%"></div>
        </router-link>
      </li>
      <li class="tab-item4" @click="hideFooter">
        <router-link to="/login">
          <div style="width: 100% ;height: 100%"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        isShow: true
      }
    },
    methods: {
      hideFooter(){
        this.isShow = false
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    bottom 0
    left 0
    border-top 1px solid #e7e7e7
    height 45px
    line-height 45px
    width 100%
    z-index 100
    background #fff
    .tab
      width 100%
      li
        float left
        width 25%
        height 55px
      .tab-item1
        background url('./main_1.png') no-repeat center 2px
        background-size 44px auto
      .tab-item2
        background url('./category_1.png') no-repeat center 2px
        background-size 44px auto
      .tab-item3
        background url('./cart_1.png') no-repeat center 2px
        background-size 44px auto
      .tab-item4
        background url('./user_1.png') no-repeat center 2px
        background-size 44px auto

</style>
