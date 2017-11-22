<template>
  <div class="place">
    <topbar></topbar>
    <div class="location" ref="location">
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
        <li class="address_item" v-for="(province, index) in provinces" v-if="showP">
          {{province.province}}
        </li>
        <li class="address_item" v-if="showC" @click="showContry(city.id,index)" v-for="(city,index) in cities">
          {{city.city}}</li>
        <li class="address_item" v-if="showCountry" @click="showArea(county.id,index)" v-for="(county,index) in counties">
          {{county.county}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import topbar from '../../components/topbar/topbar.vue'
  export default {
    data (){
      return {
        provinces: [
          {
            "id": "2",
            "province": "北京市",
            "parent": "1"
          }
        ],
        cities: [],
        counties: [],
        showP: true,
        showC: false,
        showCountry: false,
        province: "北京市",
        city: "昌平区",
        county: "北七家"
      }
    },
    mounted(){
      // 请求省份信息的信息
      axios.get('/api/province')
        .then(response =>{
          console.log(response.data)
          this.provinces = response.data
        })
    },
    methods:{
      // 请求省份信息
    },
    watch:{
      // 监视数据变化
      provinces(newData,oldData){
        console.log("222222222");
        console.log(newData);
        this.provinces = newData
      }
    },
    components: {topbar}
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
