<script setup>
import{ref} from 'vue'
const data = ref("test")


</script>

<template>
  <h2>04-資料綁定</h2>
  <div>
    <h2> 單向綁定data:{{ data }}</h2>
  </div>
  <div>
    1單向綁定 v-bind:value
    <input v-bind:value="data">
  </div>
  <div>
    2單向綁定 :value
    <input :value="data">
  </div>
  <br>
  <div>
    3雙向綁定 v-model
    <input v-model="data">
  </div>

</template>
