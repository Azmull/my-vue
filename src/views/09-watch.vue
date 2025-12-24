<script setup>
import { ref,watch, watchEffect } from 'vue';

const num = ref(0)
const msg = ref('')
watch(num, (newVal, oldVal)=>{
  msg.value = "新的值:" + newVal + ",舊的值:" + oldVal
})

const num2 = ref(0)
const msg2 = ref('')
watch(num2,(newVal, oldVal)=>{
  if(num2.value>5)
  msg2.value="太大了="+newVal+",原先是=" +oldVal
  else{
    msg2.value="太小了="+newVal+",原先是=" +oldVal
  }
})

const keyword=ref('')
const msg3 = ref('')
watchEffect(()=>{
  msg3.value="keyword發生變化了"+keyword.value
})
</script>

<template>
  <h2>09-監聽</h2>
  請輸入: <input type="number" v-model="num">
  <br>
  監聽num結果: {{ msg }}
  <br>
  <input type="number" v-model="num2">
  <br>
  監聽num2結果: {{ msg2 }}
  <br>
  <input v-model="keyword">
  <br>
  watchEffect監聽keyword結果:{{msg3}}
</template>