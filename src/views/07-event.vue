<script setup>
import { ref } from 'vue';

const num = ref(0)
const count = ref()
const keyword = ref('')

function increment(){
  num.value+=1
}
function countChange(){
  num.value = count.value
}
function clickonce(){
  alert('只會顯示一次')
}
function search(){
  alert(keyword.value)
}
function f8(){
  alert("你按下F8")
}
</script>

<template>
  <h2>07-事件綁定</h2>
  <div>
    現在的數值:{{num}}
  </div>
  <button v-on:click="increment()">按我+1</button>
  <br>
  <button @click="increment()">++</button>
  <br>
  <input type="number" v-model="count" @change="countChange()">
  <br>
  <button @click.once="clickonce">按一次就失效</button>
  <br>
  搜尋: <input v-model="keyword" @keyup.enter="search()">
  F8: <input @keyup.f8="f8()">
</template>