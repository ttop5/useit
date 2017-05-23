<template>
  <div class="news-view">
    <x-header :left-options="{showBack: false}">新闻</x-header>
    <div class="content">
      <div style="margin: 10px;overflow: hidden;" v-for="item in articleList">
        <masker style="border-radius: 2px;" @click.native="showDetails(item.id)">
          <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-title">
            {{ item.title }}
            <br/>
            <span class="m-desc">{{ item.desc }}</span>
          </div>
        </masker>
      </div>
      <divider>我是有底线的</divider>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader, Masker, Divider } from 'vux';
import BottomBar from '../components/BottomBar';
import { httpGet } from '../utils/api';

export default {
  components: {
    XHeader,
    Masker,
    Divider,
    BottomBar,
  },
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    getCircleList() {
      httpGet('/news').then((response) => {
        this.articleList = response.data;
      });
    },
    showDetails(id) {
      this.$router.push({ path: `/news_item?id=${id}` });
    },
  },
  created() {
    this.getCircleList();
  },
};
</script>


<style lang="less">
.news-view {
  .content {
    .m-img {
      padding-bottom: 33%;
      display: block;
      position: relative;
      max-width: 100%;
      background-size: cover;
      background-position: center center;
      cursor: pointer;
      border-radius: 2px;
    }
    .m-title {
      color: #fff;
      text-align: center;
      text-shadow: 0 0 2px rgba(0, 0, 0, .5);
      font-weight: 500;
      font-size: 16px;
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
      .m-desc {
        font-size: 8px;
        color: #afa6a6;
        padding-top: 4px;
        border-top: 1px solid #f0f0f0;
        display: inline-block;
        margin-top: 5px;
      }
    }
  }
}
</style>
