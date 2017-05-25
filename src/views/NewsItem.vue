<template>
  <div class="news-item-view">
    <x-header class="header" :left-options="{backText: ''}">新闻</x-header>
    <div class="content">
      <h2>{{ news.title }}</h2>
      <p class="datetime">{{ news.dateTime }}</p>
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
    h2 {
      font-size: 1.3em;
      text-align: center;
      padding-top: 10px;
    }
    .datetime {
      text-align: center;
      color: #9e9e9e;
      padding: 0px;
    }
    img {
      width: 100%;
      height: 200px;
    }
    p {
      font-size: .9em;
      padding: 10px;
      text-align: justify;
    }
  }
}
</style>
