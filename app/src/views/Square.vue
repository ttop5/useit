<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">广场</x-header>
    <div class="content">
      <div style="margin: 10px;overflow: hidden;" v-for="item in articleList">
        <masker style="border-radius: 2px;">
          <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-content">
            {{item.content}}
            <br/>
            <span class="m-time">{{item.user}} 于 {{item.dateTime}}</span>
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
import { httpGet } from '../lib/api';

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
.square-view {
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
    .m-content {
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
      .m-time {
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
