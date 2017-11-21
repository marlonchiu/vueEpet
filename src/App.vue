<template>
  <div>
    <main-header></main-header>
    <split></split>
    <carousel></carousel>
    <split></split>
    <column></column>
    <split></split>
    <com-title></com-title>
    <main-footer></main-footer>

  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import carousel from './components/carousel/carousel.vue'
  import column from './components/column/column.vue'
  import title from './components/title/title.vue'
  import split from './components/split/split.vue'
  export default {
    data (){
      return {}
    },
    components: {
      'main-header': header,
      'main-footer': footer,
      split,
      carousel,
      column,
      "com-title": title
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
