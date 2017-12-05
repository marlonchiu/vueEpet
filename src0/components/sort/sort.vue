<template>
  <div>
    <header class="sort_header">
      <div class="classify">
        <router-link to="/tab1">
          <span>分类</span>
        </router-link>
      </div>
      <div class="brand">
        <router-link to="/tab2">
          <span>品牌</span>
        </router-link>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
        <img class=" search" src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" >
      </a>
    </header>
    <router-view :classes="classes"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        classes:[]
      }
    },
    methods: {},
    mounted(){
      axios.get('/api/classes')
        .then(response =>{
          const result=response.data
          if(result.code===0){
            this.classes=result.data
          }
        })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort_header
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    position: fixed
    left: 0
    right: 0
    top: 0
    height: 40px
    z-index: 11
    background: white
    .classify,.brand
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
