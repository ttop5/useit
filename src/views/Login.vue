<template>
  <div class="login-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h1>欢迎来到UseIt</h1>
      <group>
        <x-input v-model="username" placeholder="用户名" is-type="text"></x-input>
        <x-input v-model="password" placeholder="密码" type="password"></x-input>
      </group>
      <p class="errorMessage">{{ errorMessage }}</p>
      <x-button type="primary" @click.native="login">登录</x-button>
      <p class="other">
        <router-link to="/register">注册账号</router-link>
        <span>|</span>
        <router-link to="#">忘记密码</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XButton } from 'vux';
import { httpGet } from '../utils/api';

export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
  },
  data() {
    return {
      userList: [],
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    getUserList() {
      httpGet('/users').then((response) => {
        this.userList = response.data;
      });
    },
    login() {
      this.userList.forEach((item) => {
        if (this.username === item.username && this.password === item.password) {
          sessionStorage.setItem('username', this.username);
          this.$router.push({ path: '/me' });
        } else {
          this.errorMessage = '用户名或者密码错误！';
        }
      });
    },
  },
  created() {
    this.getUserList();
  },
};
</script>


<style lang="less">
.login-view {
  .content {
    padding: 50px 10px 10px 10px;
  }
  button, p {
    margin-top: 10px;
    text-align: center;
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
