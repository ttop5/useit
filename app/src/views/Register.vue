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
    <div>
       <alert v-model="alertShow" :title="alertTitle" :content="alertContent"></alert>
    </div>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XButton, Alert } from 'vux';
import { httpPost } from '../lib/api';

export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Alert,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      alertTitle: '',
      alertContent: '',
      alertShow: false,
    };
  },
  methods: {
    register() {
      if (this.username && this.email && this.password && this.confirmPassword) {
        if (this.password === this.confirmPassword) {
          const userInfo = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
          httpPost('/users', userInfo).then((response) => {
            if (response.status === 201) {
              this.alertTitle = '恭喜';
              this.alertContent = '您已注册成功，请前往登陆！';
              this.alertShow = true;
            } else {
              this.alertTitle = '抱歉';
              this.alertContent = '由于未知原因，你此次注册失败了！';
              this.alertShow = true;
            }
          });
        } else {
          this.errorMessage = '两次密码不一致！';
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
