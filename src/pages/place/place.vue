<template>
  <div class="place">
    <topbar topbarTitle = "选择收货地区"></topbar>
    <div class="location" ref="location">
      <div class="stations">
        <a href="javascript:;" @click="changeSite(0)">
          <span class="cat_station" :class="{active: this.site === 0}">猫猫站</span>
        </a>
        <a href="javascript:;" @click="changeSite(1)">
          <span class="dog_station" :class="{active: this.site === 1}">狗狗站</span>
        </a>
        <a href="javascript:;" @click="changeSite(2)">
          <span class="water_station" :class="{active: this.site === 2}">水族站</span>
        </a>
      </div>
      <div class="default_address" id="defaultAddress">
        <span>
          {{locationMsg}}:
          <span v-model="province">{{province}}</span>
          <span v-model="city">{{city}}</span>
          <span v-model="county">{{county}}</span>
        </span>
      </div>
      <ul class="address_list">
        <li class="address_item" @click="showCity(province.id, province.province, index)" v-for="(province, index) in provinces" v-if="showP">
          {{province.province}}
        </li>
        <li class="address_item" v-if="showC" @click="showContry(city.id, city.city, index)" v-for="(city,index) in cities">
          {{city.city}}</li>
        <li class="address_item" v-if="showCounty" @click="showArea(county.id, county.county, index)" v-for="(county,index) in counties">
          {{county.county}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'
  import topbar from '../../components/topbar/topbar.vue'
  export default {
    data (){
      return {
        provinces: [],
        cities: [],
        counties: [],
        showP: true,
        showC: false,
        showCounty: false,
        province: "北京市",
        city: "昌平区",
        county: "北七家",
        site: 1,
        locationMsg:'当前默认地址'
      }
    },
    mounted(){
      // 请求省份信息的信息
      axios.get('/api/province')
        .then(response =>{
          console.log(response.data)
          this.provinces = response.data.data
        })
    },
    methods:{
      // 切换狗狗站、猫猫站或水族站
      changeSite(index){
        this.site = index
      },
      // 点击某一个省份跳转到该省份的下边的市
      showCity(provinceId, provinceName, index){
        axios.get('/api/cities')
          .then((response)=>{
            const allCities = response.data.data
            console.log(allCities);   // 伪数组
            // 遍历城市
            const cities=[];
            Array.prototype.slice.call(allCities).forEach((city)=>{
              if(city.parent=== provinceId || city.id === provinceId){
                cities.push(city)
              }
            })
            console.log(cities);
            this.cities = cities
            this.showP = false
            this.showC = true

            // 更新地址信息
            this.locationMsg = '选择新地址'
            this.province = provinceName
            this.city = ""
            this.county = ""

            // 发布消息
            PubSub.publish('location', this.province)

          })

      },

      // 点击市跳转到该市下边的区县
      showContry(cityId, cityName, index){
        axios.get('/api/counties')
          .then((response)=>{
            const allCounties = response.data.data
            console.log(allCounties);   // 伪数组
            // 遍历城市
            const counties=[];
            Array.prototype.slice.call(allCounties).forEach((country)=>{
              if(country.parent=== cityId || country.id === cityId){
                counties.push(country)
              }
            })
            console.log(counties);
            this.counties = counties
            this.showP = false
            this.showC = false
            this.showCounty = true

            // 更新地址信息
            this.city = cityName
          })

      },

      // 点击选择区县完成地址更新
      showArea(countyId, countyName, index){
        axios.get('/api/counties')
          .then((response)=>{
            const allArea = response.data.data
            console.log(allArea);
            // 遍历地区
            const areas =[]
            allArea.forEach((area)=>{
              if(area.parent === countyId || area.id === countyId){
                areas.push(area)
              }
            })

            console.log(areas);
            this.counties = areas
            this.showP = false
            this.showC = false
            this.showCounty = false
            // 更新地址信息
            this.county = countyName

            // 跳转到主页
            setTimeout(()=>{
              this.$router.push({ path: '/main' })
            },200)

            /*history.back()*/

          })
      }

    },
    watch:{
      // 监视数据变化
/*      provinces(newData,oldData){

      }*/
    },
    components: {
      topbar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .location
    width 100%
    line-height 1.6
    .stations
      width 100%
      background-color #f3f4f5
      box-sizing border-box
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
        .active
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
