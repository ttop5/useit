<template>
  <div class="my-article-view">
    <x-header class="header" :left-options="{backText: ''}">我的动态</x-header>
    <div class="content">
      <div class="head-img">
        <blur :blur-amount=40 :url="imgUrl">
          <p class="center"><img :src="imgUrl"></p>
        </blur>
      </div>
      <p class="username">{{ localUsername }}</p>
      <div v-for="item in articleList" class="article">
        <p class="article-head">
          <span class="used">使用过产品：</span>
          <span class="date-time">{{ item[0].dateTime }}</span>
        </p>
        <rater v-model="star" slot="value" disabled :font-size="15"></rater>
        <p class="content">{{ item[0].content }}</p>
        <panel :list="item" type="1"></panel>
      </div>
      <divider>我是有底线的</divider>
    </div>
  </div>
</template>


<script>
import { XHeader, Blur, Panel, Divider, Rater } from 'vux';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
    Blur,
    Panel,
    Divider,
    Rater,
  },
  data() {
    return {
      localUsername: '',
      imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
      articleList: [],
      star: 4,
    };
  },
  methods: {
    getArticleList() {
      httpGet('/square').then((response) => {
        (response.data).forEach((item) => {
          if (item[0].user === this.localUsername) {
            this.articleList.push(item);
          }
        });
      });
    },
  },
  created() {
    this.localUsername = sessionStorage.getItem('username');
    this.getArticleList();
  },
};
</script>


<style lang="less">
.my-article-view {
  .content {
    .head-img div {
      height: 155px !important;
      .center {
        text-align: center;
        padding-top: 15px;
        color: #fff;
        font-size: 18px;
      }
      .center img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 4px solid #ececec;
      }
    }
    .username {
      text-align: center;
      margin-top: -40px;
      margin-bottom: 20px;
    }
    .article{
      border: solid 1px #f1d4d4;
      margin: 20px 5px;
      padding: 5px 0px;
      .vux-rater, .used, .content {
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
