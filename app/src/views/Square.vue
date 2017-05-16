<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">广场</x-header>
    <div class="content">
      <p>Square</p>
      <div v-for="article in articleList">
        <p>{{ article.user }}：</p>
        <p>{{ article.content }}</p>
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
      articleList: [],
    };
  },
  methods: {
    getCircleList() {
      httpGet('/square').then((response) => {
        this.articleList = response.data;
      });
    },
  },
  created() {
    this.getCircleList();
  },
};
</script>


<style lang="less">
</style>
