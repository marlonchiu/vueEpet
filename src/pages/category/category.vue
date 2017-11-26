<template>
  <div>
    <header class="sort_header">
      <div class="sort">
        <router-link to="/category/tab1">
          <span>分类</span>
        </router-link>
      </div>
      <div class="brand">
        <router-link to="/category/tab2">
          <span>品牌</span>
        </router-link>
      </div>
      <a href="#">
        <img class="search" src="./search-ico.png" >
      </a>
    </header>
      <router-view :category="category"></router-view>

  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data (){
      return {
      }
    },
    mounted(){
      // 通过dispath()来触发action调用获取后台category数据
      this.$nextTick(()=>{
        this.$store.dispatch('getCategory')  // 传参actionName
      })

    },
    // computed: mapState['category']
    computed:{
      /*category(){
        return this.$store.state.category
      }*/
      ...mapState(['category'])

    },
    methods: {

    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort_header
    position: fixed
    left: 0
    right: 0
    top: 0
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    height: 40px
    z-index: 5
    background: white
    .sort,.brand
      box-sizing border-box
      text-align right
      padding-right 17px
      width 50%
      line-height 40px
      font-weight 700
      font-size 13px
      float left
      & > a >span
        display inline-block
        color #ed4044
        border-bottom 2px solid #ed4044
        padding 0 4px
        cursor pointer
        font-weight 700
    .brand
      text-align left
      & > a >span
        color #333
        border-bottom none
    .search
      position absolute
      top 13px
      right 15px
      width 14px
      height 14px
</style>
