<template>
  <div v-if="localUsername" class="evaluate-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h2>使用过</h2>
      <p class="tip">点击星星进行评分哟~</p>
      <rater v-model="raterData" slot="value" :font-size="raterSize" :margin="raterMargin"></rater>
      <group>
        <x-textarea v-model="commont" :show-counter="true" :rows="4"
          :placeholder="placeholder"></x-textarea>
      </group>
      <x-button plain type="primary" @click.native="commitEvaluate">确定</x-button>
    </div>
    <toast v-model="toastShow" :toastType="toastType" :time="1000">{{ toastContent }}</toast>
  </div>
</template>

<script>
import { XHeader, Rater, Group, XTextarea, XButton, Toast } from 'vux';
import moment from 'moment';
import { httpPost } from '../utils/api';

export default {
  components: {
    XHeader,
    Rater,
    Group,
    XTextarea,
    XButton,
    Toast,
  },
  data() {
    return {
      localUsername: '',
      raterSize: 35,
      raterMargin: 10,
      raterData: 0,
      commont: '',
      placeholder: '说说你用过之后的感受吧...',
      toastShow: false,
      toastType: '',
      toastContent: '',
    };
  },
  methods: {
    commitEvaluate() {
      if (this.commont !== '') {
        const nowDateTime = moment().format('YYYY-MM-DD hh:mm');
        const squareInfo = [{
          user: `${sessionStorage.getItem('username')}`,
          star: this.raterData,
          content: this.commont,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: `小米MIX手机 —— ${this.$route.query.id}`,
          desc: `${this.raterData * 2}分/北京小米科技有限公司/2016-05-01`,
          dateTime: nowDateTime,
        }];
        setTimeout(() => this.$router.push({ path: '/square' }), 1000);
        httpPost('/square', squareInfo).then((response) => {
          if (response.status === 201) {
            this.toastShow = true;
            this.toastType = '';
            this.toastContent = '评分成功！';
            setTimeout(() => this.$router.push({ path: '/square' }), 1000);
          } else {
            this.toastShow = true;
            this.toastType = 'cancel';
            this.toastContent = '评分失败！';
          }
        });
      } else {
        this.placeholder = '你不写可不行哦～';
      }
    },
  },
  created() {
    this.localUsername = sessionStorage.getItem('username');
  },
};
</script>


<style lang="less">
.evaluate-view {
  .vux-header {
    background-color: #fbf9fe;
    .vux-header-title, .vux-header h1 {
      color: #999;
    }
  }
  .content {
    text-align: center;
    h2 {
      color: #999999;
      border-bottom: solid #e5e5e5 1px;
      letter-spacing: 5px;
    }
    .tip {
      font-size: 10px;
      color: #d7d6dc;
      margin: 20px 0px 10px 0px;
    }
  }
}
</style>
