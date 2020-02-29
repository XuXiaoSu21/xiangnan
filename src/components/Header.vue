<template>
  <div class="bv-example-row">
    <div class="type">
      <input type="radio" class="cruise-car">巡游车
      <input type="radio" class="notwork-car">网约车
    </div>
    <div class="title">
      综合监管服务中心
    </div>
    <div class="tools">
      <span>告警</span>
      <span>刷新</span>
      <span>全屏</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-top'
  }
</script>

<style lang="stylus" scoped>
.bv-example-row
  position absolute
  top 0
  left 0
  z-index 99
  width 100%
  color #fff
  .type, .title, .tools
    float left
    width 33.33%
  .type
    text-align left 
    input 
      padding 0 .2rem
  .tools
    text-align right 
    span 
      padding .2rem
  .title
    color white
</style>