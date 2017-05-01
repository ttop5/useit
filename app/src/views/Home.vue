<template>
  <div class="home-view">
    <search
      placeholder="手机 电脑 平板 手环等">
    </search>
    <swiper
      auto loop
      :aspect-ratio="300/800">
      <swiper-item
        class="swiper-img"
        v-for="(item, index) in demo_list"
        :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    <scroller
      lock-x scrollbar-y use-pullup
      :pullup-config="pullupConfig2"
      height="200px"
      ref="demo2"
      @on-pullup-loading="load2">
      <div class="box2">
        <p v-for="i in n2">占位 {{i}}</p>
      </div>
    </scroller>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { Search, Swiper, Scroller, SwiperItem } from 'vux';
import BottomBar from '../components/BottomBar';

const imgList = [
  'https://static.vux.li/demo/1.jpg',
  'https://static.vux.li/demo/2.jpg',
  'https://static.vux.li/demo/3.jpg',
];

export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
    Scroller,
    BottomBar,
  },
  data() {
    return {
      demo_list: imgList,
      n2: 10,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
      },
    };
  },
  methods: {
    load2() {
      setTimeout(() => {
        this.n2 += 10;
        setTimeout(() => {
          this.$refs.demo2.donePullup();
        }, 100);
        if (this.n2 === 30) {
          setTimeout(() => {
            this.$refs.demo2.disablePullup();
          }, 100);
        }
      }, 2000);
    },
  },
};
</script>


<style>
</style>
