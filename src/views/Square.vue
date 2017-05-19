<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">广场</x-header>
    <div class="content">
      <div v-for="item in articleList" class="article">
        <p class="article-head">
          <span>【{{ item[0].user }}】: </span>
          <span class="date-time">{{ item[0].dateTime }}</span>
        </p>
        <!-- <p>Ta给这款产品的评分为</p> -->
        <rater v-model="star" slot="value" disabled :font-size="15"></rater>
        <p class="content">{{ item[0].content }}</p>
        <panel :list="item" type="1"></panel>
      </div>
      <divider>我是有底线的</divider>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader, Panel, Divider, Rater } from 'vux';
import BottomBar from '../components/BottomBar';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
    Panel,
    Divider,
    BottomBar,
    Rater,
  },
  data() {
    return {
      articleList: [],
      star: 4,
    };
  },
  methods: {
    getArticleList() {
      httpGet('/square').then((response) => {
        this.articleList = response.data;
      });
    },
  },
  created() {
    this.getArticleList();
  },
};
</script>


<style lang="less">
.square-view {
  .content {
    .article{
      border: solid 1px #f1d4d4;
      margin: 20px 5px;
      padding: 5px 0px;
      .vux-rater, .content {
        padding: 0px 10px;
      }
      .article-head {
        .date-time {
          font-size: 10px;
          color: #999;
          float: right;;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
