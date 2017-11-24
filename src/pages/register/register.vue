<template>
  <div>
    <div style="display: none">
      <div class="putPhone">
        <span class="phoneIcon"></span>
        <input type="text" placeholder="请输入手机号" name="username" id="telNum" class="text">
      </div>
      <div class="next">
        <a href="javascript:;" class="nextBtn">下一步</a>
      </div>
    </div>
    <div>
      <ul class="mform">
        <li>
          <span class="mNumIco"></span>
          <input type="text" placeholder="请输入手机号码" name="bdphone" id="bdphone" readonly="readonly" class="regtext">
        </li>
        <li>
          <span class="seccodeIco"></span>
          <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode" class="regtext">
          <img src="./seccode.jpg" alt="" class="img1">
        </li>
        <li>
          <span class="mEmailIco"></span>
          <input type="text" placeholder="验证码" name="code" id="code" class="regtext">
          <a href="javascript:void(0);" id="scodebtn" class="get_phonepass afff ft14 w9">获取短信验证码</a>
        </li>
        <li>
          <span class="mNameIco"></span>
          <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="password" placeholder="请设置密码" name="password" id="password" class="regtext">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext">
        </li>
      </ul>
      <div class="next">
        <a href="javascript:;" class="nextBtn">下一步</a>
      </div>
    </div>
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
  .putPhone
    border-bottom 1px solid#e2e2e2
    padding 14px 0 14px 30px
    margin-left 12px
    .phoneIcon
      display inline
      width 17px
      height 17px
      float left
      background url("./ico1.png") no-repeat
      background-size contain
      margin 2px 0 0 -25px
    .text
      display block
      width 100%
      height 21px
      font-size 13px
      padding 0px
      color #b8b8b8
      border-radius 3px
      border none
  .next
    margin-top 24px
    padding-top 18px
    text-align center
    &>a
      display block
      background-color #d7d7d7;
      color #ffffff
      margin 0 10%
      padding 5px 0
      border-radius 30px
      font-size 15px
      line-height 20px
      text-align center
  .mform
    margin-left 12px
    line-height 1.6
    li
      position relative
      border-bottom 1px solid #e2e2e2
      padding 14px 0 14px 30px
      font-size 14px
      color #b8b8b8
      input
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline
      .mNumIco
        display inline
        width 17px
        height 17px
        float left
        background url("./ico1.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .seccodeIco
        display inline
        width 17px
        height 17px
        float left
        background url("./ico5.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .img1
        position absolute
        right 20px
        vertical-align middle
      .mEmailIco
        display inline
        width 17px
        height 17px
        float left
        background url("./ico2.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .mNameIco
        display inline
        width 17px
        height 17px
        float left
        background url("./ico3.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .mpasswordIco
        display inline
        width 17px
        height 17px
        float left
        background url("./ico4.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .get_phonepass
        position absolute
        right 10px
        top 12px
        width 120px
        background #fed171
        font-size: 12px
        color #fff
        border-radius 30px
        padding 4px 0
        text-align center

</style>
