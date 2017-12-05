<template>
  <div >
    <div class="login_bg">
      <div class="head_top">
        <router-link class="goback" to="/home"></router-link>
        <div class="regist">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
      <div class="e_logo">
        <img src="./login_image/logo.png" alt="">
      </div>
      <ul class="selectTag">
        <li>
          <a href="javascript:;" @click="change(true)">普通登录</a>
          <i :class="{showi:isShow}" ></i>
        </li>
        <li>
          <a href="javascript:;" @click="change(false)">手机动态密码登录</a>
          <i :class="{showi:!isShow}" ></i>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="myformBox">
        <form method="get" id="login_form" action="" v-show="isShow">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" class="text" name="password" id="password">
            </li>
          </ul>
        </form>
        <form id="newlogin_form" method="post" action="" v-show="!isShow">
          <ul class="mform">
            <li>
              <span class="mNumIco"></span>
              <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
              <span class="passImg">
                <img src="./login_image/seccode.jpg" alt="">
              </span>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" class="dttext" placeholder="动态密码" name="code" id="code">
              <!--<a class="get_phonepass " >(<d id="stime">60</d>)短信已发送</a>-->
              <a href="javascript:void(0);" class="get_phonepass" @click="getCode" id="scodebtn">获取动态密码</a>
            </li>
          </ul>
        </form>
      </div>
      <div class="forgetPass">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <div class="login_btn" @click="login" v-show="isShow">
        <a href="javascript:;">登 录</a>
      </div>
      <div class="login_btn" @click="isLogin" v-show="!isShow">
        <a href="javascript:;">登 录</a>
      </div>
      <div class="App">APP专享:E宠团5折包邮,首单满99送99
        <a href="javascript:;" class="cblue">去下载</a>
      </div>
      <div class="login_height"></div>
      <div class="login_web">
        <b>合作网站登录</b>
      </div>
      <ul class="other_login">
        <li>
          <a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https://wap.epet.com/orders/user.html">
            <img src="./login_image/login_ico4.png" alt="">
          </a>
        </li>
        <li>
          <a href="//static.epetbar.com/mpet/images/login/login_ico2.png">
            <img src="./login_image/login_ico2.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        isShow:true
      }
    },
    mounted(){

    },
    methods: {
      change(isShow){
        this.isShow=isShow
      },
      login(){
        // 获取当前用户输入的用户名，可能是tel，也可能是昵称
        const username=document.getElementById('username').value.trim()
        const password=document.getElementById('password').value.trim()
        axios.get(`/api/login?username=${username}&&password=${password}`)
          .then(response =>{
            const user=response.data
            Toast({
              message: user.msg,
              position: 'top',
              duration: 3000
            })
            setTimeout(()=>{
              location.href="#/home"
            },1500)
          })
      },
      isLogin(){
        const tel=document.getElementById('bdphone').value.trim()
        const code =document.getElementById('code').value.trim()
        axios.get(`/api/islogin?tel=${tel}&&code=${code}`)
          .then(response =>{
            const user=response.data
            Toast({
              message: user.msg,
              position: 'top',
              duration: 2000
            })
            if (user.msg==="恭喜您，登录成功~~~~"){
              setTimeout(()=>{
                location.href="#/home"
              },2000)
            }
          })
      },
      getCode(){
        const tel=document.getElementById('bdphone').value.trim()
        if(tel){
          axios.get('/api/getcode')
            .then(response =>{
              const result =response.data
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
    created () {
      /*document.body.style.background="#f3f4f5"*/
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_bg
    background url("./login_image/login_bg.png") no-repeat
    background-size 100% 100%
    width 100%
    .head_top
      height 50px
      line-height 50px
      position relative
      padding 0 12px
      .goback
        position absolute
        width: 22px;
        height: 20px;
        margin-top 16px
        display block
        background url("./login_image/personal-bico3.png")  no-repeat
        background-size 12px 17px
      .regist
        float right
        a
          color white



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
      background #fff
      border-radius 6px
      margin 0 15px 12px 15px
      padding: 0 6px
      .mform
        width 100%
        li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0 12px 30px
          position relative
          .mNameIco, .mNumIco
            float left
            display inline
            width 17px
            height 21px
            background url('./login_image/ico3.png') no-repeat
            background-size contain
            margin: 1px 0 0 -25px
          input
            display block
            height 21px
            width 100%
            font-size 15px
            color #666
          .mpasswordIco
            float left
            display inline
            width 17px
            height 20px
            margin 0 0 0 -25px
            background url('./login_image/ico4.png') no-repeat
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
      padding-right 24px
      padding-left 24px
      text-align center
      position relative
      overflow hidden
      & > a
        color #898989
        font-size 14px
        float right
        line-height 20px
    .login_btn
      padding-top 6px
      text-align center
      margin 0 15px
      & > a
        display block
        line-height 20px
        letter-spacing 5px
        border-radius 5px
        background #2ec975
        color white
        font-size 15px
        padding 9px 0
        text-align center
    .App
      color #666
      font-size 12px
      margin-top 6px
      text-align center
      line-height 20px
      .cblue
        color #0ca4ed
    .login_height
      width 100%
      height 120px
    .login_web
      margin-top 8px
      color #d7d7d7
      font-size 16px
      text-align center
      line-height 20px
    .other_login
      padding 18px 0
      overflow hidden
      width 100%
      line-height 20px
      li
        padding 0 15px
        float left
        a
          display block
          img
            width: 60%
            display block
            margin auto
            max-width 176px





</style>
