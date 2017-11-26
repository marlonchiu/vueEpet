<template>
  <div class="tab1">
    <div class="leftbox" ref="leftbox">
      <ul class="liList">
        <!--<li class="active" v-for="(sort, index) in category.sort" :key="index">
          {{sort.name}}</li>-->
        <li v-for="(sort, index) in category.sort" :key="index">
          {{sort.name}}</li>
        <!--增加用于测试Better-Scroll-->
        <li>狗狗美容</li>
        <li>狗狗周边</li>
        <li>狗狗清洁</li>
        <li>狗狗保健</li>
        <li>狗狗医疗</li>
        <li>狗狗牵引</li>
      </ul>
    </div>
    <div class="rightbox">
      <a href="javascript:;" class="title">热门分类</a>
      <ul class="list">
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort1.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort2.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort3.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort4.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort5.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="rela">
              <img src="./sort6.jpg" class="w100 image">
            </div>
            <p class="ftc ft12 mt10 c333">肠胃调理</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      category: Object
    },
    mounted(){
      // 如果还没有数据, 不创建BScroll对象
      if(!this.category){
        return
      }
      // 只有当有数据创建创建scroll对象
      this._initScroll ()  // 从其它路由切换过来

    },
    watch: {
      // 监视数据变化，创建BScroll对象（在当前路由一上来是没有数据的）
      category (newCategory, oldCategory){  // category更新
        this._initScroll()  // 直接刷新当前路由
      }
    },
    methods: {
      _initScroll () {
        // 创建左侧列表的BScroll对象
        this.$nextTick(()=>{
          const ul = this.$refs.leftbox.children[0]
          const liHeight = 50
          const liCount = ul.children.length
          console.log(liCount);
          ul.style.height = liCount * liHeight + 'px'

          new BScroll(this.$refs.leftbox,{
            click:true,
            probeType: 2
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab1
    position absolute
    width 100%
    height 100%
    overflow hidden
    .leftbox
      position fixed
      top 40px
      left 0px
      bottom 45px
      height 100%
      padding-bottom 95px
      background white
      .liList
        width 100%
        &>li
          padding 15px 0
          border-bottom 1px solid #f3f4f5
          box-sizing border-box
          width 70px
          height 50px
          font-size 13px
          text-align center
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        .active
          background #f3f4f5
          color #ed4044

    .rightbox
      position: absolute;
      top: 40px;
      width: 100%;
      margin-left: 70px;
      background-color: #fff;
      box-sizing border-box
      border-top: 3px solid #f3f4f5;
      border-left: 3px solid #f3f4f5;
      padding: 15px 5px 20px
      .title
        display block
        font-size 12px
        color #999
        padding-left 5px
        padding-top 10px
      .list
        width: 80%;
        text-align: center;
        overflow: hidden;
        .item
          box-sizing border-box
          float: left;
          width: 33.3333%;
          padding: 0 5px;
          margin-top: 10px;
          a
            display block
            .rela
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
