<template>
  <div class="home-view">
    <x-header class="header" :left-options="{backText: ''}">产品</x-header>
    <div class="content">
      <div class="img">
        <img src="../assets/imges/mix.png" />
      </div>
      <p class="desc">{{ product.desc }}</p>
      <div class="word">
        <div class="info">
          <h2>{{ product.productName }}</h2>
          <p>公司：{{ product.company }}</p>
          <p>发布时间：{{ product.publicTime }}</p>
        </div>
        <div class="grade">
          <p>爱数码评分<br /><span>{{ product.grade }}</span></p>
          <rater v-model="star" slot="value" disabled :font-size="12"></rater>
          <p>{{ product.useCount }}人</p>
        </div>
        <x-button type="primary">我使用过</x-button>
        <div class="intro">{{ product.introduction }}</div>
      </div>
      <divider>评论区</divider>
      <div v-for="item in product.commonts" class="commont">
        <span>【{{ item.user }}】 </span>
        <rater v-model="star" slot="value" disabled :font-size="12"></rater>
        <p>{{ item.commont }}</p>
        <p>{{ item.dateTime }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { XHeader, Rater, XButton, Divider } from 'vux';
import { httpGet } from '../utils/api';

export default {
  components: {
    XHeader,
    Rater,
    XButton,
    Divider,
  },
  data() {
    return {
      star: 4,
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
    .desc {
      font-size: 0.76em;
      text-align: center;
    }
    .word {
      padding: 0px 10px;
      .info {
        margin-top: 15px;
        h2 {
          font-size: 1.3em;
        }
        p {
          font-size: .7em;
          color: #5f5a5a;
        }
      }
      .grade {
        background-color: #fff;
        float: right;
        text-align: center;
        font-size: .5em;
        color: #ababab;
        margin: -6em 1.2em 0em 0em;
        padding: 0px 5px;
        box-shadow: 5px 5px 5px #888;
        p > span {
          color: #000;
          font-size: 20px;
          line-height: 20px;
          font-weight: bold;
        }
      }
      button.weui-btn, input.weui-btn {
        margin: 25px 0px;
      }
      .intro {
        margin-top: -10px;
        font-size: .9em;
        text-align: justify;
      }
    }
  }
  .commont {
    p {
      padding-left: 10px;
    }
    p:nth-child(3) {
      font-size: .9em;
    }
    p:nth-child(4) {
      font-size: .5em;
      color: #ababab;
    }
  }
}
</style>
