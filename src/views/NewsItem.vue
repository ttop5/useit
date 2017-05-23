<template>
  <div class="news-item-view">
    <x-header class="header" :left-options="{backText: ''}">新闻</x-header>
    <div class="content">
      <h2>{{ news.title }}</h2>
      <span>{{ news.dateTime }}</span>
      <img :src="news.img" />
      <p>{{ news.content }}</p>
    </div>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import { httpGet } from '../utils/api';

export default {
  components: {
    XHeader,
  },
  data() {
    return {
      news: {},
    };
  },
  methods: {
    getNews() {
      httpGet(`/news?id=${this.$route.query.id}`).then((response) => {
        this.news = response.data[0];
      });
    },
  },
  created() {
    this.getNews();
  },
};
</script>


<style lang="less">
.news-item-view {
  .content {
    img {
      width: 100%;
      height: 200px;
    }
    p {
      text-indent: 2em;
      padding: 5px;
    }
  }
}
</style>
