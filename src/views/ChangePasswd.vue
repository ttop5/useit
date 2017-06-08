<template>
  <div v-if="localUsername" class="change-passwd-view">
    <x-header class="header" :left-options="{backText: ''}">密码修改</x-header>
    <div class="content">
      <group>
        <x-input v-model="oldPassword" placeholder="旧密码" :min="6" type="password"></x-input>
        <x-input v-model="newPassword" placeholder="新密码" :min="6" type="password"></x-input>
        <x-input v-model="confirmPassword" placeholder="密码确认" :min="6" type="password"></x-input>
      </group>
      <p class="errorMessage">{{ errorMessage }}</p>
      <x-button type="primary" @click.native="changePasswd">确定</x-button>
    </div>
    <toast v-model="toastShow" type="toastType" :time="1000">{{ toastContent }}</toast>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XButton, Toast } from 'vux';
import { httpGet, httpPut } from '../utils/api';

export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Toast,
  },
  data() {
    return {
      localUsername: '',
      user: {},
      userPassword: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      errorMessage: '',
      toastShow: false,
      toastType: '',
      toastContent: '',
    };
  },
  methods: {
    getUserPasswd() {
      httpGet(`/users?username=${this.localUsername}`).then((response) => {
        this.user = response.data[0];
        this.userPassword = response.data[0].password;
      });
    },
    changePasswd() {
      if (this.oldPassword !== this.userPassword || this.newPassword !== this.confirmPassword) {
        this.errorMessage = '密码错误或新密码两次输入不一致！';
      } else {
        this.user.password = this.newPassword;
        httpPut(`/users/${this.user.id}`, this.user).then((response) => {
          if (response.status === 200) {
            this.toastShow = true;
            this.toastType = '';
            this.toastContent = '修改成功！';
            setTimeout(() => this.$router.push({ path: '/me' }), 1000);
          } else {
            this.toastShow = true;
            this.toastType = 'cancel';
            this.toastContent = '修改失败！';
          }
        });
      }
    },
  },
  created() {
    this.localUsername = sessionStorage.getItem('username');
    this.getUserPasswd();
  },
};
</script>


<style lang="less">
.change-passwd-view {
  .content {
    .errorMessage {
      text-align: center;
    }
    padding-top: 70px;
  }
}
</style>
