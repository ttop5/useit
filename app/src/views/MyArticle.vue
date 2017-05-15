<template>
  <div class="my-article-view">
    <x-header class="header" :left-options="{backText: ''}">关于软件</x-header>
    <div class="content">
      <p>我的动态</p>
    </div>
  </div>
</template>


<script>
import { XHeader } from 'vux';

export default {
  components: {
    XHeader,
  },
};
</script>


<style lang="less">
</style>
