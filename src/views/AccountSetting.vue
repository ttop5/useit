<template>
  <div class="account-setting-view">
    <x-header class="header" :left-options="{backText: ''}">账号设置</x-header>
    <div class="content">
      <group title="">
        <x-input title="昵称" v-model="user.username" type="text"></x-input>
        <selector name="sex" title="性别" :options="['男', '女', '保密']" v-model="user.sex"></selector>
        <datetime title="生日&nbsp;&nbsp;&nbsp;&nbsp;" v-model="user.birthday" value-text-align="left"></datetime>
        <x-input title="邮箱" v-model="user.email" is-type="email"></x-input>
        <x-textarea title="简介" v-model="user.describe" :show-counter="false" :rows="2"></x-textarea>
      </group>
      <x-button type="primary" @click.native="changeUserInfo">确定</x-button>
    </div>
    <toast v-model="toastShow" type="toastType" :time="1000">{{ toastContent }}</toast>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XTextarea, Selector, Datetime, XButton, Toast } from 'vux';
import { httpGet, httpPut } from '../utils/api';

export default {
  components: {
    XHeader,
    Group,
    XInput,
    XTextarea,
    Selector,
    Datetime,
    XButton,
    Toast,
  },
  data() {
    return {
      user: {},
      toastShow: false,
      toastType: '',
      toastContent: '',
    };
  },
  methods: {
    getUser() {
      httpGet(`/users?username=${this.localUsername}`).then((response) => {
        this.user = response.data[0];
      });
    },
    changeUserInfo() {
      httpPut(`/users/${this.user.id}`, this.user).then((response) => {
        if (response.status === 200) {
          this.toastType = '';
          this.toastShow = true;
          this.toastContent = '修改成功！';
          setTimeout(() => this.$router.push({ path: '/me' }), 1000);
        } else {
          this.toastType = 'cancel';
          this.toastShow = true;
          this.toastContent = '修改失败！';
        }
      });
    },
  },
  created() {
    this.localUsername = sessionStorage.getItem('username');
    this.getUser();
  },
};
</script>


<style lang="less">
.account-setting-view {
  .content {
    padding-top: 55px;
    .weui-label, .weui-cell p {
      color: #828282;
    }
    .weui-cell_access .weui-cell__ft {
      color: #333;
    }
    button.weui-btn, input.weui-btn {
      width: 95%;
      margin-top: 20px;
    }
  }
}
</style>
