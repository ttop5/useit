<template>
  <div class="home-view">
    <search
      placeholder="手机 电脑 平板 手环等"
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      auto-scroll-to-top
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      auto-scroll-to-top
      ref="search">
    </search>
    <div class="content">
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
      <group title="搜索热榜">
        <cell-box v-for="item in hotSearchList" class="hot-item" key=item.id
          @click.native="showDetails(item.id)">
          <span>{{ item.id }}</span>
          <span>{{ item.product }}</span>
          <span>{{ item.productType }}</span>
        </cell-box>
      </group>
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Search, Group, Cell, XButton, Swiper, SwiperItem, CellBox } from 'vux'
import BottomBar from '../components/BottomBar';
import { httpGet } from '../lib/api';

const imgList = [
  'https://static.vux.li/demo/1.jpg',
  'https://static.vux.li/demo/2.jpg',
  'https://static.vux.li/demo/3.jpg',
];

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton,
    Swiper,
    SwiperItem,
    BottomBar,
    CellBox,
  },
  data () {
    return {
      results: [],
      value: '',
      demo_list: imgList,
      hotSearchList: [],
    }
  },
  methods: {
    getHotSearchList() {
      httpGet('/hotSearch').then((response) => {
        this.hotSearchList = response.data;
      });
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item));
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit () {
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit',
      });
    },
    onFocus () {
      console.log('on focus');
    },
    onCancel () {
      console.log('on cancel');
    },
    showDetails(id) {
      this.$router.push({ path: `/products?id=${id}` });
    },
  },
  created() {
    this.getHotSearchList();
  },
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>


<style lang="less">
.home-view {
  .vux-search-box {
    position: fixed !important;
    z-index: 100;
    .weui-search-bar {
      position: fixed;
      width: 100%;
      z-index: 100;
    }
  }
  .weui-cells.vux-search_show {
    padding-top: 45px;
  }
  .content {
    .hot-item span:nth-child(1) {
      font-size: 15px;
      color: #ccc;
    }
    .hot-item span:nth-child(2) {
      padding-left: 25px;
      font-size: 15px;
      color: #525151
    }
    .hot-item span:nth-child(3) {
      font-size: 12px;
      color: #ccc;
      padding-left: 10px;
    }
  }
}
</style>
