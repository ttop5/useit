<template>
  <div class="statistics-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      统计图
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
.statistics-view {
  .vux-header {
    background-color: #fbf9fe;
    .vux-header-title, .vux-header h1 {
      color: #999;
    }
  }
}
</style>
