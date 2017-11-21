<template>
  <div class="footer">
    <ul class="tab">
      <li class="tab-item main-a">
        <router-link to="/main"></router-link>
      </li>
      <li class="tab-item category-a">
        <router-link to="/category"></router-link>
      </li>
      <li class="tab-item cart-a">
        <router-link to="/cart"></router-link>
      </li>
      <li class="tab-item user-a">
        <router-link to="/user"></router-link>
      </li>
    </ul>
    <router-view></router-view>
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
  .footer
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e7e7e7;
    height: 45px;
    line-height: 45px;
    width: 100%;
    z-index: 100;
    background: #fff;
    .tab
      list-style none
      height: 55px;
      .tab-item
        float: left;
        width: 25%;
        height 100%
        list-style: none
        display list-item
      .main-a
        background: url(../../common/images/background/img.png) no-repeat;
        background-size: 234px 163px
        background-position: 0 0;
      .category-a
        background: url(../../common/images/background/img.png) no-repeat;
        background-size: 234px 163px
        background-position: -85px -41px;
      .cart-a
        background: url(../../common/images/background/img.png) no-repeat;
        background-size: 234px 163px
        background-position: -85px -81px;
      .user-a
        background: url(../../common/images/background/img.png) no-repeat;
        background-size: 234px 163px
        background-position: -85px -122px;
        a
        height: 40px;
        width: 42px;
        margin-top: 2px;
        margin: 0 auto;
</style>
