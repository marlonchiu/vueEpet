<template>
  <div class="surprise">
    <div class="surpriseTop">
      <div class="everyday">
        <img class="img" src="./suprice.png">
      </div>
      <div class="over">距本场结束</div>
      <div class="timing">
        <span class="time1">{{h}}</span>
        <span class="time2">:</span>
        <span class="time1">{{m}}</span>
        <span class="time2">:</span>
        <span class="time1">{{s}}</span>
      </div>
      <div class="more">
        <a href="javascript:;">
          <img src="./more.png" alt="">
        </a>
      </div>
    </div>
    <div class="surpriseBottom" ref="surpriseList">
      <ul class="list">
        <li class="item">
          <a href="javascript:">
            <div class="surprise_img">
              <img src="./surprise1.jpg">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise2.jpg">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise3.jpg">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise4.jpg">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise5.jpg">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise6.png">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="surprise_img">
              <img src="./surprise6.png">
            </div>
            <div class="cred">
              <span class="ft12">¥</span>
              <span class="ft17">69.00</span>
            </div>
            <p class="save">省￥24.00</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        h: ' ',
        m: ' ',
        s: ' '
      }
    },
    mounted (){
      const ul = this.$refs.surpriseList.children[0]
      const li = 99;
      const marginCont = 23
      const liSize = ul.children.length
      console.log(liSize)
      ul.style.width = (li + marginCont) * liSize - marginCont + 'px'
      this.$nextTick(() => {
        new BScroll(this.$refs.surpriseList, {
          click: true,
          scrollX: true
        })
      })
      setInterval(()=>{  // 必须使用箭头函数，否则 this指向window
        const EndTime = new Date('2019/09/26 10:00:00'); //截止时间
        const NowTime = new Date();   // 获取当前时间
        const t = EndTime.getTime() - NowTime.getTime()   // 计算时间差
        /*this.d= Math.floor(t/1000/60/60/24);*/
        this.h=this.fix(Math.floor(t/1000/60/60%24),2)
        this.m= this.fix(Math.floor(t/1000/60%60),2)
        this.s= this.fix(Math.floor(t/1000%60),2)
      },1000)

    },
    methods: {
      fix(num, length) {
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
      }
    },
    computed:{}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width 100%
    .surpriseTop
      padding 10px
      position relative
      overflow hidden
      .everyday
        float left
        .img
          height 24px
          margin-left -20px
          vertical-align middle
      .over
        margin-top 3px
        font-size 13px
        margin-left 10px
        float left
        margin-right 5px
      .timing
        display inline-block
        font-size 12px
        text-align center
        .time1
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
        .time2
          margin 0 1px
          font-weight 700
          font-size 12px
          vertical-align baseline
      .more
        position: absolute;
        top: 2px;
        right: -8px;
        a
          display block
          text-align right
          img
            display block
            margin 0 0 0 auto
            width 50%
            vertical-align middle

    .surpriseBottom
      padding-left px
      margin-bottom 10px
      .list
        display flex
        .item
          margin-right 18px
          margin-left 5px
          width 99px
          text-align center
          a
            display block
            img
              width 85px
            .cred
              text-align center
              color red
              .ft12
                font-size 12px
              .ft17
                font-size 14px
            .save
              font-size 12px
              color #999
              text-align center






</style>
