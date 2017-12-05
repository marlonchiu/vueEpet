<template>
  <div class="boxContainer">
    <div class="leftbox" ref="leftbox">
      <ul class="list">
        <li data-id="88888" class="ftc bgfff " :class="{on:isShow}" v-for="(classitem,index) in classes">{{classitem.name}}</li>
      </ul>
    </div>
    <div class="rightbox">
      <div class="sort_detail_list">
        <a href="javascript:;" class="title">
         <!--{{classitem.title[0]}}-->
        </a>
        <ul class="list">
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg@!300w-b">
              </div>
              <p class="ftc ft12 mt10 c333">肠胃调理</p>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg@!300w-b" >
              </div>
              <p class="ftc ft12 mt10 c333">进口狗粮</p>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg@!300w-b">
              </div>
              <p class="ftc ft12 mt10 c333">体内驱虫</p>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg@!300w-b">
              </div>
              <p class="ftc ft12 mt10 c333">强化免疫</p>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg@!300w-b">
              </div>
              <p class="ftc ft12 mt10 c333">国产狗粮</p>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="rela">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg@!300w-b" >
              </div>
              <p class="ftc ft12 mt10 c333">磨牙洁齿</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      classes:Array
    },
    created(){

      document.body.style.background="#f3f4f5"
    },
    data () {
      return {
        isShow:false,
        classitem:{}
      }
    },
    mounted(){
      if(this.classes){
        this.$nextTick(()=>{
          new BScroll(this.$refs.leftbox,{click:true})
        })
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .boxContainer
    width 100%
    overflow hidden
    position absolute
    height 100%
  .leftbox
    position fixed
    height 100%
    top 40px
    left 0
    bottom 45px
    padding-bottom 95px
    background white
    margin-bottom 95px
    .list
      width 100%
      padding-bottom 95px
      li
        padding 15px 0
        border-bottom 1px solid #f3f4f5
        width 70px
        height 50px
        font-size 13px
        text-align center
      .on
        background #f3f4f5
        color #ed4044
  .rightbox
    position absolute
    top 40px
    width 100%
    margin-left 70px
    background-color white
    .sort_detail_list
      background-color white
      border-top: 3px solid #f3f4f5;
      border-left: 3px solid #f3f4f5;
      padding: 15px 5px 20px;
      .title
        display block
        font-size 12px
        color #999
        padding-left 5px
        padding-top 10px
      .list
        width 80%
        text-align center
        overflow hidden
        .item
          float left
          width 33.3333%
          padding 0 5px
          margin-top 10px
          a
            display block
            .rela
              background url('./default-epet.png') no-repeat center center #f4f4f4
              background-size 120px auto
              position relative
              padding-top 100%
              img
                position absolute
                top 0
                left 0
                width 100%
                vertical-align middle
            p
              font-size 12px
              text-align center
              margin-top 10px

</style>
