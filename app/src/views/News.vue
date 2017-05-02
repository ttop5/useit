<template>
  <div class="news-view">
    <x-header :left-options="{showBack: false}">新闻</x-header>
    <p>News</p>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import BottomBar from '../components/BottomBar';

export default {
  components: {
    XHeader,
    BottomBar,
  },
};
</script>


<style>
</style>
