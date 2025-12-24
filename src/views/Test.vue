<script setup>
  import {useRoute} from 'vue-router';
  const route = useRoute();
    console.log('取得路由',route);
    console.log('取得動態id',route.params.id);
</script>

<template>
  <div class="about">
    <h1>測試</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
