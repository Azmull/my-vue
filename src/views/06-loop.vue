<script setup>
import { reactive } from 'vue';
const datas = reactive([
{ name: 'apple', price: 10 },
{ name: 'banana', price: 20 },
{ name: 'cherry', price: 30 },
{ name: 'orange', price: 40 },
{ name: 'grape', price: 50 },
]
)
</script>
<template>
  <h2>06-迴圈渲染</h2>
  <div>
    <span v-for="item in datas">品項:{{item.name}}<br></span> 
    <br>
    <span v-for="item in datas">價格:{{item.price}}<br></span>
  </div>
  <br>
  <div v-for="(item, index) in datas">
    <span>{{index+1}}.</span>
    <span>品項:{{item.name}}</span>
    <span>價格:{{item.price}}</span>
    <span v-if="item.price<=20" v-bind:style="{color: item.price==10 ?'blue':'black'}">特價!!</span>
  </div>
</template>