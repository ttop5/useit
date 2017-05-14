<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app',
};
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.vux-header, .weui-tabbar {
  position: fixed !important;
  width: 100%;
}
.content {
  padding-top: 45px;
  padding-bottom: 55px;
}
.errorMessage {
  color: #f73100;
}
</style>
