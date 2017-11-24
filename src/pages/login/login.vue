<template>
  <div>
    <div class="login_bg">
      <div class="head_top">
        <a href="#/main" class="goback"></a>
        <div class="regist">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
      <div class="e_logo">
        <img src="./logo.png" alt="">
      </div>
      <ul class="selectTag">
        <li>
          <a href="javascript:;" @click="change(true)">普通登录</a>
          <i :class="{showi: isShow}"></i>
        </li>
        <li>
          <a href="javascript:;" @click="change(false)">手机动态密码登录</a>
          <i :class="{showi: !isShow}"></i>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="myformBox">
        <form method="get" id="login_form" action="" v-show="isShow">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" name="username" id="username" class="text" ref="username">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" name="password" id="password" class="text" ref="password">
            </li>
          </ul>
        </form>
        <form method="get" id="newlogin_form" action="" v-show="!isShow">
          <ul class="mform">
            <li>
              <span class="mNumIco"></span>
              <input type="text" placeholder="已注册的手机号" name="tel" id="bdphone" class="tel" ref="tel">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="请输入图片内容" name="varify" id="varify" class="dttext" ref="varify">
              <span class="passImg">
                <img src="./seccode.jpg" alt="">
              </span>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="动态密码" name="code" id="code" class="dttext" ref="code">
              <a href="javascript:void(0);" id="scodebtn" class="get_phonepass" @click="getCode">获取动态密码</a>
            </li>
          </ul>
        </form>
      </div>
      <div class="forgetPass">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <div class="login_btn" v-show="isShow" @click="login">
        <a href="javascript:;">登 录</a>
      </div>
      <div class="login_btn" v-show="!isShow" @click="islogin">
        <a href="javascript:;">登 录2</a>
      </div>
      <div class="app">APP专享:E宠团5折包邮,首单满99送99
        <a href="javascript:;" class="cblue">去下载</a>
      </div>
      <div class="login_height" style="height: 120px"></div>
      <div class="login_web">
        <b>合作网站登录</b>
      </div>
      <ul class="other_login">
        <li>
          <a href="####">
            <img src="./login_ico4.png" alt="">
          </a>
        </li>
        <li>
          <a href="####">
            <img src="./login_ico2.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui'
  export default {
    data (){
      return {
        isShow:true
      }
    },
    methods:{
      change(isShow){
        this.isShow=isShow
      },
      login(){
        // 获取当前用户输入的信息，手机号或者用户名
        const username = this.$refs.username.value.trim()
        const password = this.$refs.password.value.trim()
        console.log(username, password);
        const url = `/api/login?username=${username}&&password=${password}`
        axios.get(url).then(response => {
          const user = response.data
          Toast({
            message: user.msg,
            position: 'top',
            duration: 3000
          })
          setTimeout(()=>{
            location.href="#/main"
          },1500)
        })
      },
      islogin(){
        // 获取当前用户输入的手机号
        const tel = this.$refs.tel.value.trim()
        const code = this.$refs.code.value.trim()
        console.log(tel, code);
        const url = `/api/islogin?tel=${tel}&&code=${code}`
        axios.get(url).then(response => {
          const user = response.data
          console.log(user);
          Toast({
            message: user.msg,
            position: 'top',
            duration: 3000
          })

          if (user.msg === "恭喜您，登录成功~~~"){
            setTimeout(()=>{
              location.href="#/main"
            },2000)
          }
        })
      },
      getCode(){
        const tel = this.$refs.tel.value.trim()
        if(tel){
          axios.get('/api/getcode')
            .then(response =>{
              const result = response.data
            })
        }else {
          Toast({
            message: "请先输入手机号",
            position: 'top',
            duration: 3000
          })
        }
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_bg
    width 100%
    line-height 1.6
    background url("./login_bg.png") no-repeat
    background-size 100% 100%
    .head_top
      position relative
      height 50px
      line-height 50px
      padding 0 12px
      .goback
        position absolute
        width: 22px;
        height: 20px;
        margin-top 16px
        display block
        background url("./personal-bico3.png")  no-repeat
        background-size 12px 17px
      .regist
        float right
        a
          color #fff
    .e_logo
      width 100%
      padding 12px 0 24px 0
      img
        display block;
        margin auto;
        width 20%;
    .selectTag
      width 100%
      overflow hidden
      background-color rgba(255,255,255,0.3)
      li
        float left
        width 50%
        text-align center
        height 44px
        line-height 44px
        position relative
        a
          font-size 15px
          color #fff
          display block
        .showi
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
          position absolute
          bottom 0
          left 0
          right 0
          margin auto
  .content
    width 100%
    .myformBox
      background: #fff;
      margin 0 15px 12px 15px
      padding 0 6px
      border-radius 6px
      .mform
        width 100%
        margin-left 12px
        li
          position relative
          font-size 14px
          color #b8b8b8
          padding 12px 0 12px 30px
          border-bottom 1px solid #e2e2e2
          .mNameIco,.mNumIco
            width 17px
            height 21px
            display inline
            float left
            margin 1px 0 0 -25px
            background url("./ico3.png") no-repeat
            background-size contain
          input
            display: block;
            height: 21px;
            width: 100%;
            font-size: 15px;
            color: #666
          .mpasswordIco
            width 17px
            height 21px
            display inline
            float left
            margin 0 0 0 -25px
            background url("./ico4.png") no-repeat
            background-size contain
          .passImg
            display block
            position absolute
            top 5px
            right 0px
          .get_phonepass
            background #fff
            color #ff4259
            border 1px solid #eb4c33
            position absolute
            right 0
            top 6px
            border-radius 3px
            width 100px;
            text-align center
            padding 4px 0
            font-size 12px

    .forgetPass
      padding-right: 24px;
      padding-left: 24px;
      text-align: center;
      position: relative;
      overflow: hidden;
      &>a
        color: #898989;
        font-size: 14px;
        float: right;
        line-height: 20px;
    .login_btn
      padding-top: 6px;
      text-align: center;
      margin: 0 15px;
      &>a
        display: block;
        line-height: 20px;
        letter-spacing: 5px;
        border-radius: 5px;
        background: #2ec975;
        color: #fff;
        font-size: 15px;
        padding: 9px 0;
        text-align: center;
    .app
      color: #666;
      font-size: 12px;
      margin-top: 6px;
      text-align: center;
      line-height: 20px
      &>a
        color: #0ca4ed
    .login_web
      margin-top: 8px;
      color: #d7d7d7;
      font-size: 16px;
      text-align: center;
      line-height: 20px;
    .other_login
      padding: 18px 0;
      overflow: hidden;
      width: 100%;
      line-height: 20px
      li
        padding 0 15px
        list-style none
        float left
        a
          display block
          img
            width: 60%;
            display: block;
            margin: auto;
            max-width: 176px;
</style>
