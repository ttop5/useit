<template>
  <div class="account-setting-view">
    <x-header class="header" :left-options="{backText: ''}">账号设置</x-header>
    <div class="content">
      <group title="">
        <x-input title="昵称" v-model="user.username" type="text"></x-input>
        <selector name="sex" title="性别" :options="['男', '女', '保密']" v-model="user.sex"></selector>
        <datetime title="生日&nbsp;&nbsp;&nbsp;&nbsp;" v-model="user.birthday" value-text-align="left"></datetime>
        <x-input title="邮箱" v-model="user.email" type="email"></x-input>
        <x-textarea title="简介" v-model="user.describe" :show-counter="false" :rows="2"></x-textarea>
      </group>
      <x-button type="primary" @click.native="changeUserInfo">确定</x-button>
    </div>
    <div>
       <alert v-model="alertShow" :title="alertTitle" :content="alertContent"></alert>
    </div>
  </div>
</template>


<script>
import { XHeader, Group, XInput, XTextarea, Selector, Datetime, XButton, Alert } from 'vux';
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
    Alert,
  },
  data() {
    return {
      user: {},
      alertTitle: '',
      alertContent: '',
      alertShow: false,
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
          this.alertShow = true;
          this.alertTitle = '恭喜';
          this.alertContent = '修改成功！';
        } else {
          this.alertShow = true;
          this.alertTitle = '抱歉';
          this.alertContent = '修改失败！';
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
