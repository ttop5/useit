<template>
  <div class="bottombar-view">
    <tabbar>
      <tabbar-item link='/'>
        <img slot="icon" src="../assets/icons/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link='/news'>
        <img slot="icon" src="../assets/icons/icon_nav_msg.png">
        <span slot="label">新闻</span>
      </tabbar-item>
      <tabbar-item link='/square'>
        <img slot="icon" src="../assets/icons/icon_nav_article.png">
        <span slot="label">广场</span>
      </tabbar-item>
      <tabbar-item link='/me'>
        <img slot="icon" src="../assets/icons/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>


<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>


<style lang="less">
</style>
