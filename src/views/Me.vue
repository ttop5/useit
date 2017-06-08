<template>
  <div class="me-view">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <div class="content">
      <!-- 已登陆  -->
      <div v-if="username !== null">
        <div class="head-img">
          <blur :blur-amount=40 :url="imgUrl">
            <p class="center"><img :src="imgUrl"></p>
          </blur>
        </div>
        <p class="username">{{ username }}</p>
        <group>
          <cell-box is-link link="/myarticle">我的动态</cell-box>
          <cell-box is-link link="/accountsetting">账号设置</cell-box>
          <cell-box is-link link="/changepasswd">密码修改</cell-box>
          <cell-box is-link link="/aboutsoft">关于UseIt</cell-box>
        </group>
        <actionsheet v-model="sheetShow" :menus="sheetMenus"  @on-click-menu-delete="logout" show-cancel></actionsheet>
        <x-button @click.native="sheetShow = true" type="warn">退出登录</x-button>
      </div>
      <!-- 未登陆 -->
      <div v-if="username === null" class="login-button">
        <router-link to="/login">
          <x-button>登录/注册</x-button>
        </router-link>
      </div>
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>


<script>
import { XHeader, XButton, Blur, Group, CellBox, Actionsheet } from 'vux';
import BottomBar from '../components/BottomBar';

export default {
  components: {
    XHeader,
    XButton,
    BottomBar,
    Blur,
    Group,
    CellBox,
    Actionsheet,
  },
  data() {
    return {
      username: '',
      show: false,
      imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
      sheetShow: false,
      sheetMenus: {
        'title.noop': '你确定要退出登录么？',
        delete: '<span style="color:red">确定</span>',
      },
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


<style lang="less">
.me-view {
  .content {
    .head-img div {
      height: 155px !important;
      .center {
        text-align: center;
        padding-top: 15px;
        color: #fff;
        font-size: 18px;
      }
      .center img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 4px solid #ececec;
      }
    }
    .username {
      text-align: center;
      margin-top: -40px;
      margin-bottom: 20px;
    }
    .login-button {
      button {
        width: 60%;
        margin-top: 60%;
      }
    }
  }
}
</style>
