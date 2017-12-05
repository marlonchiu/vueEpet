<template>
<div >
  <div v-show="isShow">
    <div class="putPhone">
      <span class="phoneIcon"></span>
      <input type="text" placeholder="请输入手机号" v-model="tel" class="text" name="username" id="telNum">
    </div>
    <div @click="next" class="next">
      <a href="javascript:;" class="nextBtn">下一步</a>
    </div>
  </div>
  <div v-show="showNext">
    <ul class="mform" >
      <li>
        <span class="mNumIco"></span>
        <input type="text" placeholder="请输入手机号码" v-model="tel" name="bdphone" id="bdphone" class="regtext" readonly="readonly">
      </li>
      <li>
        <span class="seccodeIco"></span>
        <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode" class="regtext">
        <img src="./seccode.jpg"  class="img1" id="imgCode" name="DQGY">
      </li>
      <li>
        <span class="mEmailIco"></span>
        <input type="text" placeholder="验证码" name="code" id="code" class="regtext">
        <!--<a class="get_phonepass afff ft14 w9 nocode">验证码已发送</a>-->
        <a href="javascript:void(0);"  class="get_phonepass afff ft14 w9" id="scodebtn" @click="getcode">获取短信验证码</a>
      </li>
      <li>
        <span class="mNameIco"></span>
        <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext">
      </li>
      <li>
        <span class="mpasswordIco"></span>
        <input type="password" placeholder="请设置密码" name="password"  id="password" class="regtext"></li>
      <li>
        <span class="mpasswordIco"></span>
        <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext"></li>
    </ul>
    <div class="next">
      <a href="javascript:;" class="nextBtn" @click="register">下一步</a>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui';
  export default {
    data () {
      return {
        isShow:true,
        showNext:false,
        tel:"",
      }
    },
    methods: {
      next(){
        // 获取用户输入的值，
        const inputNum=document.getElementById('telNum')
        const numValue=inputNum.value.trim()
        const reg=/^[0-9]{11}$/
        if (reg.test(numValue)){
          this.showNext=true;
          this.isShow=false
          this.tel=numValue
        }else {
          Toast({
            message: '请输入格式正确的手机号',
            position: 'top',
            duration: 3000
          });
        }
      },
      getcode(){
        const tel=this.tel
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

      },
      register(){
        // 获取用户创建的昵称
        const username=document.getElementById('username').value.trim()
        // 获取用户输入的密码
        const password=document.getElementById('password').value.trim()
        // 获取用户输入的确认密码
        const passwordag=document.getElementById('passwordag').value.trim()
        //获取用户输入的验证码，
        const code=document.getElementById('code').value.trim()
        // 创建一个正则表达式，用于验证用户名是否为4-20位的字母或数字或下划线的组合
        const tel=this.tel
        axios.get(`/api/register?password=${password}&&passwordag=${passwordag}&&username=${username}&&tel=${tel}&&code=${code}`)
         .then(response =>{
           const user=response.data;
           console.log("11111111")
             Toast({
               message: user.errMsg,
               position: 'top',
               duration: 2000
             })
              console.log(user.errMsg)
           if(user.errMsg==='注册成功'){
             setTimeout(()=>{
               location.href="#/login"
             },2000)
           }
         })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .putPhone
    margin-left 12px
    border-bottom #e2e2e2 solid 1px
    padding: 14px 0 14px 30px
    .phoneIcon
      float left
      display inline
      width 17px
      height 17px
      background url('./ico1.png') no-repeat
      background-size contain
      margin 2px 0 0 -25px
    .text
      display block
      height 21px
      width 100%
      font-size 13px
      border none
      padding 0
      color #b8b8b8
      border-radius 3px
      outline none
  .next
    margin-top 24px
    padding-top 18px
    text-align center
    .nextBtn
      background-color #d7d7d7
      color white
      display block
      margin 0 10%
      border-radius 30px
      font-size 15px
      line-height 20px
      padding 5px 0
      text-align center


  .mform
    margin-left 12px
    li
      border-bottom #e2e2e2 solid 1px
      padding 14px 0 14px 30px
      position relative
      font-size 14px
      color #b8b8b8
      .mNumIco
        float left
        display inline
        width 17px
        height 17px
        background url(./ico1.png) no-repeat
        background-size contain
        margin 2px 0 0 -25px
      .seccodeIco
        float left
        display inline
        width 17px
        height 17px
        background url(./ico5.png) no-repeat bottom
        background-size contain
        margin 2px 0 0 -25px
      .img1
        right 20px
        position absolute
        vertical-align middle
      .mEmailIco
        float left
        display inline
        width 17px
        height 21px
        background url(./ico2.png) no-repeat
        background-size contain
        margin 7px 0 0 -25px
      .get_phonepass
        background #fed171
        position absolute
        right 10px
        top 12px
        font-size 12px
        color white
        border-radius 30px
        width 120px
        text-align: center
        padding 4px 0

      .mNameIco
        float left
        display: inline
        width 17px
        height 21px
        background url(./ico3.png) no-repeat
        background-size contain
        margin 1px 0 0 -25px
      .mpasswordIco
        float left
        display inline
        width 17px
        height 20px
        margin 0 0 0 -25px;
        background url(./ico4.png) no-repeat;
        background-size contain;




</style>
