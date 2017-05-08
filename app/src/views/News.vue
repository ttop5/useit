<template>
  <div class="news-view">
    <x-header :left-options="{showBack: false}">新闻</x-header>
    <div class="content">
      <p>News</p>
      <div v-for="news in newsList">
        <h2>{{ news.title }}</h2>
        <p>{{ news.content }}</p>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import BottomBar from '../components/BottomBar';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
    BottomBar,
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


<style>
</style>
