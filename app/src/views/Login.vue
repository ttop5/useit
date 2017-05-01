<template>
  <div class="login-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h1>欢迎来到UseIt</h1>
      <group>
        <x-input placeholder="邮箱" is-type="email"></x-input>
        <x-input placeholder="密码" :min="6" type="password"></x-input>
      </group>
      <x-button type="primary">登录</x-button>
      <p>
        <router-link to="/register">注册账号</router-link>
        <span>|</span>
        <router-link to="#">忘记密码</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XButton } from 'vux';

export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
  },
};
</script>


<style>
.login-view .content {
  padding: 50px 10px 10px 10px;
}
.login-view button, .login-view p {
  margin-top: 10px;
  text-align: center;
}
.login-view .header {
  background-color: #fbf9fe;
}
.login-view h1 {
  text-align: center;
  color: #35495e;
}
</style>
