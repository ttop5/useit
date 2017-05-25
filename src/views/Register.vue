<template>
  <div class="register-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h1>欢迎加入UseIt</h1>
      <group>
        <x-input v-model="username" placeholder="用户名" is-type="text"></x-input>
        <x-input v-model="email" placeholder="邮箱" is-type="email"></x-input>
        <x-input v-model="password" placeholder="密码" :min="6" type="password"></x-input>
        <x-input v-model="confirmPassword" placeholder="密码确认" :min="6" type="password"></x-input>
      </group>
      <p class="errorMessage">{{ errorMessage }}</p>
      <x-button type="primary" @click.native="register">注册</x-button>
    </div>
    <toast v-model="toastShow" type="toastType" :time="1000">{{ toastContent }}</toast>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XButton, Toast } from 'vux';
import { httpPost } from '../utils/api';

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
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      toastShow: false,
      toastType: '',
      toastContent: '',
    };
  },
  methods: {
    register() {
      if (this.username && this.email && this.password && this.confirmPassword) {
        if (this.password.length >= 6 && this.password === this.confirmPassword) {
          const userInfo = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
          const emailRe = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
          if (emailRe.test(this.email)) {
            httpPost('/users', userInfo).then((response) => {
              if (response.status === 201) {
                this.toastShow = true;
                this.toastType = '';
                this.toastContent = '注册成功！';
                setTimeout(() => this.$router.push({ path: '/login' }), 1000);
              } else {
                this.toastShow = true;
                this.toastType = 'cancel';
                this.toastContent = '修改失败！';
              }
            });
          } else {
            this.errorMessage = '请输入正确的邮箱';
          }
        } else {
          this.errorMessage = '密码长度小于6位或者两次密码不一致！';
        }
      } else {
        this.errorMessage = '所有字段均不能为空！';
      }
    },
  },
};
</script>


<style lang="less">
.register-view{
  .content {
    padding: 50px 10px 10px 10px;
  }
  .header {
    background-color: #fbf9fe;
  }
  h1 {
    text-align: center;
    color: #35495e;
  }
}
</style>
