<template>
  <div class="register-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h1>欢迎加入UseIt</h1>
      <group>
        <x-input placeholder="用户名" is-type="text"></x-input>
        <x-input placeholder="邮箱" is-type="email"></x-input>
        <x-input placeholder="密码" :min="6" type="password"></x-input>
        <x-input placeholder="密码确认" :min="6" type="password"></x-input>
      </group>
      <x-button type="primary">注册</x-button>
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
.register-view .content {
  padding: 50px 10px 10px 10px;
}
.register-view .header {
  background-color: #fbf9fe;
}
.register-view h1 {
  text-align: center;
  color: #35495e;
}
</style>
