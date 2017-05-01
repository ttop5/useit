<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <div class="button">
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
};
</script>


<style>
.square-view button.weui-btn, input.weui-btn {
  width: 50%;
}
</style>
