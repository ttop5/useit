<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <div v-if="username !== null">
      <p>欢迎您，亲爱的{{ username }}！</p>
      <button @click="logout">注销</button>
    </div>
    <div v-if="username === null" class="button">
      <router-link to="/login">
        <x-button>登录/注册</x-button>
      </router-link>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader, XButton } from 'vux';
import BottomBar from '../components/BottomBar';

export default {
  components: {
    XHeader,
    XButton,
    BottomBar,
  },
  data() {
    return {
      username: '',
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem('username');
      this.username = sessionStorage.getItem('username');
    },
  },
  mounted() {
    this.username = sessionStorage.getItem('username');
  },
};
</script>


<style>
.square-view button.weui-btn, input.weui-btn {
  width: 50%;
}
</style>
