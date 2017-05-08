<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">广场</x-header>
    <div class="content">
      <p>Square</p>
      <div v-for="circle in circleList">
        <p>{{ circle.user }}：</p>
        <p>{{ circle.content }}</p>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import BottomBar from '../components/BottomBar';
import { httpGet } from '../lib/api';

export default {
  components: {
    XHeader,
    BottomBar,
  },
  data() {
    return {
      circleList: [],
    };
  },
  methods: {
    getCircleList() {
      httpGet('/square').then((response) => {
        this.circleList = response.data;
      });
    },
  },
  created() {
    this.getCircleList();
  },
};
</script>


<style>
</style>
