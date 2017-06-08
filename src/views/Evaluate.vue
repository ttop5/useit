<template>
  <div v-if="localUsername" class="evaluate-view">
    <x-header class="header" :left-options="{backText: ''}">评分</x-header>
    <div class="content">
      评分
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux';

export default {
  components: {
    XHeader,
  },
  data() {
    return {
      localUsername: '',
    };
  },
  created() {
    this.localUsername = sessionStorage.getItem('username');
  },
};
</script>


<style lang="less">
.evaluate-view {
  .vux-header {
    background-color: #fbf9fe;
    .vux-header-title, .vux-header h1 {
      color: #999;
    }
  }
}
</style>
