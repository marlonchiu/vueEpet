<template>
  <div>
    <router-view></router-view>
    <shopcart></shopcart>
  </div>
</template>

<script>
  import shopcart from '../../components/shopcart/shopcart.vue'
  export default {
    components:{
      shopcart
    }
  }
</script>


