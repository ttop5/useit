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
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { Search, Swiper, SwiperItem } from 'vux';
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
    BottomBar,
  },
  data() {
    return {
      demo_list: imgList,
    };
  },
  methods: {
  },
};
</script>


<style>
</style>
