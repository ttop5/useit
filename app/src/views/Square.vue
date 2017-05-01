<template>
  <div class="square-view">
    <x-header :left-options="{showBack: false}">广场</x-header>
    <p>Square</p>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script>
import { XHeader } from 'vux';
import BottomBar from '../components/BottomBar';

export default {
  components: {
    XHeader,
    BottomBar,
  },
};
</script>


<style>
</style>
