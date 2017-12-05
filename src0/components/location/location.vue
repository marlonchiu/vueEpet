<template>
  <scroller>
    <!-- content goes here -->
    <div class="locationContainer" ref="location">
      <div class="head_top">
        <router-link to="/home" class="go-back"></router-link>
        <span class="head_top_title">选择收获地址</span>
        <span class="pull_right"></span>
      </div>
      <div class="stations">
        <a href="javascript:;">
          <span class="cat_station">猫猫站</span>
        </a>
        <a href="javascript:;">
          <span class="dog_station">狗狗站</span>
        </a>
        <a href="javascript:;">
          <span class="water_station">水族站</span>
        </a>
      </div>
      <div class="default_address" id="defaultAddress">
        <span>
          当前默认地址:
          <span v-model="province">{{province}}</span>
          <span v-model="city">{{city}}</span>
          <span v-model="county">{{county}}</span>
        </span>
      </div>
      <ul class="address_list">
        <li class="address_item" v-if="showP" @click="showCity(province.id,index)" v-for="(province,index) in provinces">{{province.province}}</li>
        <li class="address_item" v-if="showC" @click="showContry(city.id,index)" v-for="(city,index) in cities">{{city.city}}</li>
        <li class="address_item" v-if="showCountry" @click="showArea(county.id,index)" v-for="(county,index) in counties">{{county.county}}</li>
      </ul>
    </div>
  </scroller>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  import PubSub from 'pubsub-js'
  Vue.use(VueScroller)
  export default {
    data () {
      return {
        provinces:[],
        cities:[],
        counties:[],
        showP:true,
        showC:false,
        showCountry:false,
        province:" ",
        city:"",
        county:" "
      }
    },
    mounted(){
      // 发送请求，获取全部省的信息
      axios.get('/api/province')
        .then(response =>{
          this.provinces=response.data
        })

      const defaultAddress=document.getElementById('defaultAddress')
      console.log(defaultAddress)
    },
    methods: {
      //  当点击对应省时，发送请求，获取相对应的市级信息
      showCity (id,index) {
        const value=id
        axios.get('/api/cities?provinceId='+value)
          .then(response =>{
            this.cities=response.data
          })
        const provinceArr=this.provinces  // 获取当前所有的省
        const provinceLi=provinceArr.find((item,index)=>{
          return item.id ===value
        })   //  根据角标查找对应的li 对应的省
        this.province = provinceLi.province  // 获取省的名字
        this.showP=false
        this.showC=true
      },
      // 当点击市级信息时，发送请求，获取当前的区级信息
      showContry(id,index){
        const value=id
        axios.get('/api/counties?cityId='+value)
          .then(response =>{
            this.counties=response.data
          })
        // 当点击区时，在页面显示相应区的内容
        const cityArr=this.cities  // 获取当前所有的市
        const cityLi= cityArr.find((item,index)=>{
          return item.id ===value
        })
        this.city =cityLi.city  //获取市的名字
        PubSub.publish("provinceMsg",this.province)
        this.showP=false
        this.showC=false
        this.showCountry=true
      },
      // 当点击区的时候，在页面显示相应区的内容
      showArea(id,index){
        const value=id
        const countryArr=this.counties
        const CountryLi=countryArr.find((item,index)=>{
          return item.id===value
        })
       this.county=CountryLi.county

        history.back()
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .locationContainer
      width 100%
      .head_top
        display flex
        width 100%
        height 50px
        line-height 50px
        border-bottom 1px solid #f3f3f3
        padding 0 14px
        position relative
        .go-back
          display block
          background-image url("./img_head/personal-bico1.png")
          background-repeat no-repeat
          background-size 9px 17px
          width 22px
          height 20px
          position absolute
          margin-top 17px
        .head_top_title
          text-align center
          width 90%
          display block
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          margin 0 auto
          font-size 18px
          color #333
          font-family '微软雅黑'
        .pull_right
          display block
          width 20px
          height 20px
          margin-top 14px
          margin-left 10px
          background-image url("./img_head/imgtk-new.png")
          background-repeat no-repeat
          background-size 20px 20px
          position absolute
          top 0
          right 40px
      .stations
        width 100%
        background-color #f3f4f5
        padding 10px
        overflow hidden
        & > a
          display block
          text-align center
          width 33.333%
          float left
          span
            display block
            background #b9b9b9
            margin-right 10px
            margin-left 10px
            color #666
            border-radius 5px
            font-size 15px
            padding-bottom 5px
            padding-top 5px
            text-align center
          .dog_station
            background-color red
            color white

      .default_address
        background-color #ffe6d9
        padding 10px
        font-size 14px
        border-bottom 1px solid #e7e7e7
      .address_list
        width 100%
        .address_item
          border-bottom 1px solid #e7e7e7
          padding 10px
          font-size 13px

</style>
