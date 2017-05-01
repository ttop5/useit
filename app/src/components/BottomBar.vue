<template>
  <div>
    <div class="bottombar-view">
      <tabbar>
        <TabbarItem
          link='/'>
          <span slot="label">首页</span>
        </TabbarItem>
        <TabbarItem
          link='/square'>
          <span slot="label">广场</span>
        </TabbarItem>
        <TabbarItem
          link='/me'>
          <span slot="label">我的</span>
        </TabbarItem>
      </tabbar>
    </div>
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


<style>
</style>
