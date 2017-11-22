<template>
  <div>
    <main-header></main-header>
    <div class="content" ref="content">
      <div class="bg" style="height: 142px"></div>
      <carousel></carousel>
      <split></split>
      <column></column>
      <split></split>
      <surprise></surprise>
      <com-title></com-title>
      <singlediv></singlediv>
      <singlediv></singlediv>
      <ratings></ratings>
      <judgeitem></judgeitem>
      <copyright></copyright>
      <godog></godog>
    </div>


  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import column from '../../components/column/column.vue'
  import title from '../../components/title/title.vue'
  import split from '../../components/split/split.vue'
  import singlediv from '../../components/singlediv/singlediv.vue'
  import surprise from '../../components/surprise/surprise.vue'
  import ratings from '../../components/ratings/ratings.vue'
  import judgeitem from '../../components/judgeitem/judgeitem.vue'
  import copyright from '../../components/copyright/copyright.vue'
  import godog from '../../components/godog/godog.vue'
  export default {
    data (){
      return {}
    },
    components: {
      'main-header': header,
      /*'main-footer': footer,*/
      split,
      carousel,
      column,
      "com-title": title,
      singlediv,
      surprise,
      copyright,
      ratings,
      judgeitem,
      godog
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.footer
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e7e7e7;
    height: 45px;
    line-height: 45px;
    width: 100%;
    z-index: 100;
    background: #fff;
    .tab
      list-style none
      height: 55px;
      .tab-item
        float: left;
        width: 25%;
        height 100%
        list-style: none
        display list-item
        background skyblue*/
</style>
