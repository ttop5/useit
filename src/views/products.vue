<template>
  <div class="home-view">
    <x-header class="header" :left-options="{backText: ''}">产品</x-header>
    <div class="content">
      <div class="img">
        <img src="../assets/imges/mix.png" />
      </div>
      <div>
        <h2>{{ product.productName }}</h2>
        <p>{{ product.desc }}</p>
        <p>公司：{{ product.company }}</p>
      <p>发布时间：{{ product.publicTime }}</p>
      </div>
      <div>
        <p>爱数码评分：<span>{{ product.grade }}</span></p>
        <span>(这里显示*****)</span>
        <p>{{ product.useCount }}人</p>
      </div>
      <div>{{ product.introduction }}</div>
    </div>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      httpGet(`/products?id=${this.$route.query.id}`).then((response) => {
        this.product = response.data[0];
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>


<style lang="less">
.home-view {
  .vux-header {
    background-color: #0c0d0e;
  }
  .content {
    .img {
      text-align: center;
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>
