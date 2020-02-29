<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
let width = document.documentElement.clientWidth;
/** 当宽度大于1920时，引用one.css文件 **/
if (width >= 960) {
    require('@/assets/styles/document.css')
 /** 当宽度大于1600小于等于1920时，引用two.css文件 **/
 } else if (width < 960) {
    require('@/assets/styles/phone.css')
}
import Home from './views/Home'
export default {
  data() {
    return {
      // showMap: true
    }
  },
  components: {
    Home
  }
}

</script>
<style lang="stylus">
</style>
