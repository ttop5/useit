<template>
  <div class="about-soft-view">
    <x-header class="header" :left-options="{backText: ''}">关于软件</x-header>
    <div class="content">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" /></svg>
      <h1 class="title" style="display:none;">
        <span class="icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="notice">v1.0.0</p>
      <p class="slogan">UseIt-让您爱上数码生活</p>
      <img class="payme" src="../assets/imges/wechat.png" />
      <ul class="about">
        <li>E-mail: ttop5@ttop5.net</li>
        <li>Weibo: 回家看动画</li>
        <li>Github: github.com/ttop5/useit</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { XHeader } from 'vux';

export default {
  components: {
    XHeader,
  },
};
</script>


<style lang="less">
.about-soft-view {
  .content {
    text-align: center;
    color: #666;
    padding-bottom: 0px;
    svg {
      padding-top: 10px;
    }
    .title {
      vertical-align: middle;
      text-align: center;
      color: #04BE02;
      display: inline-block;
      width: 75px;
      height: 75px;
      line-height: 75px;
      border-radius: 50%;
    }
    .icon {
      margin-right: 15px;
    }
    .notice {
      line-height: 20px;
    }
    .slogan {
      padding-top: 20px;
    }
    .payme {
      width: 70%;
      height: 280px;
    }
    .about {
      font-size: 10px;
      padding-top: 15px;
    }
  }
}
</style>
