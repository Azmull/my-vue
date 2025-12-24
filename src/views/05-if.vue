<script setup>
import{ref}from "vue"
const weekday = ref(2)
</script>
<template>
  <h2>05-條件渲染</h2>
  今天星期幾: <input type="number" min="1" max="7" v-model="weekday">
  <div v-if="weekday>=1 && weekday<=5">今天營業中</div>
  <div v-else-if="weekday==6">今天營業到下午</div>
  <div v-else>休息</div>
  <br>
  <div>前面</div>
  <br>
  <div v-show="weekday==7">這個是v-show</div>
  <br>
  <div>後面</div>
  
</template>