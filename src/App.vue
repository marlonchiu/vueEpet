<template>
  <div>
    <main-footer></main-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import footer from './components/footer/footer.vue'
  export default {
    data (){
      return {}
    },
    components: {
      'main-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
