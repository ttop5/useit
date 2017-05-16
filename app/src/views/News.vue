<template>
  <div class="news-view">
    <x-header :left-options="{showBack: false}">新闻</x-header>
    <div class="content">
      <panel header="今日热点" :list="newsList" type="1"></panel>
      <divider>我是有底线的</divider>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader, Panel, Divider } from 'vux';
import BottomBar from '../components/BottomBar';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
    Panel,
    BottomBar,
    Divider,
  },
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    getNewsList() {
      httpGet('/news').then((response) => {
        this.newsList = response.data;
      });
    },
  },
  created() {
    this.getNewsList();
  },
};
</script>


<style lang="less">
</style>
