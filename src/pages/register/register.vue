<template>
  <div>
    <div v-if="!isShow">
      <div class="putPhone">
        <span class="phoneIcon"></span>
        <input type="text" placeholder="请输入手机号" name="username" id="telNum" class="text" v-model="telNum" ref="newTel" @keydown="nextStep">
      </div>
      <div class="next">
        <a href="javascript:;" class="nextBtn" @click="showNextStep" :class="{active: active}">下一步</a>
      </div>
    </div>
    <div v-if="isShow">
      <ul class="mform">
        <li >
          <span class="mNumIco"></span>
          <input type="text" placeholder="请输入手机号码" name="bdphone" id="bdphone" readonly="readonly" class="regtext" v-model="telNum" ref="tel">
        </li>
        <li>
          <span class="seccodeIco"></span>
          <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode" class="regtext">
          <img src="./seccode.jpg" alt="" class="img1">
        </li>
        <li>
          <span class="mEmailIco"></span>
          <input type="text" placeholder="验证码" name="code" id="code" class="regtext" ref="code">
          <a href="javascript:void(0);" id="scodebtn" class="get_phonepass afff ft14 w9" @click="getCode">获取短信验证码</a>
        </li>
        <li>
          <span class="mNameIco"></span>
          <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext" ref="username">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="password" placeholder="请设置密码" name="password" id="password" class="regtext" ref="password">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext" ref="passwordag">
        </li>
      </ul>
      <div class="next">
        <a href="javascript:;" class="nextBtn" @click="register">注 册</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui'
  export default {
    data (){
      return {
        isShow: false,
        telNum: '',
        active: false
      }
    },
    methods:{
      nextStep(){   // 定义键盘事件
        // 获取用户输入的手机号码
        const newTel = this.$refs.newTel.value.trim()
        if(newTel.length === 10){
          this.active = true
        }else{
          this.active = false
        }
      },
      showNextStep(){
        // 获取用户输入的手机号码
        const newTel = this.$refs.newTel.value.trim()
        // 进行输入信息验证
        const reg = /^1[3-9][0-9]{9}$/
        if(reg.test(newTel)){
          this.isShow = true
          this.tel = newTel
        }else{
          Toast({
            message: "请输入正确格式的手机号码",
            position: 'top',
            duration: 3000
          })
        }
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
      },

      register(){
        // 获取用户输入的信息
        const tel = this.$refs.tel.value.trim()
        const code = this.$refs.code.value.trim()
        const username = this.$refs.username.value.trim()
        const password = this.$refs.password.value.trim()
        const passwordag = this.$refs.passwordag.value.trim()
        /*
          创建一个正则表达式，用于验证用户名是否为4-20位的字母或数字或下划线的组合(优化)
        */

        const url = `/api/register?tel=${tel}&&code=${code}&&username=${username}&&password=${password}&&passwordag=${passwordag}`
        axios.get(url).then(response => {
          const user = response.data;
          Toast({
            message: user.errMsg,
            position: 'top',
            duration: 2000
          })
          console.log(user.errMsg)
          if(user.errMsg === '注册成功'){
            setTimeout(()=>{
              location.href="#/login"
            },2000)
          }
        })

      }
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
    .active
      background-color red
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
