<template>
  <div id="app" :key="layoutKey">
    <!-- 适配iPhoneX底部指示条 -->
    <van-number-keyboard safe-area-inset-bottom/>
    <m2-router-view/>
    <van-tabbar :safe-area-inset-bottom="true">
      <van-tabbar-item icon="home-o">{{$t('app.tabs.home')}}</van-tabbar-item>
      <van-tabbar-item icon="orders-o">{{$t('app.tabs.profile')}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { refresh } from 'm2-vue'

  export default {
    name: 'app',
    mixins: [refresh]
  }
</script>

<style lang="less">
  @import "~assets/css/app.less";
</style>
