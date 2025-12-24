<script setup>

import{useCounterStore}from '@/stores/myCounter'
const countObj = useCounterStore()

import { ref, onMounted } from 'vue'
const countValue = ref(0)

onMounted(()=>{
  countValue
})

countValue.value = countObj.count
function btnClickIncrement(){
  countObj.increment()
  countValue.value = countObj.count
}

function btnClickDecrement(){
  countObj.decrement()
  countValue.value = countObj.count
}

import { usePersistStore } from '@/stores/myCounterPersist'
const persistObj = usePersistStore()
function btnPersistIncrement(){
  persistObj.increment()
}
function btnPersistDecrement(){
  persistObj.decrement()
}
</script>


<template>
  
  <h2>12-Pinia 狀態管理</h2>
  <div>
    myCounter記數: {{ countValue }}
  </div>
  <div>
    <button @click="btnClickIncrement()">點我+1</button>
  </div>
  <div>
    <button @click="btnClickDecrement()">點我-1</button>
  </div>
  <div>
    mycounterPersist計數:{{persistObj.count}}
  </div>
  <div>
    <button @click="btnPersistIncrement()">點我Persist+1</button>
  </div>
  <div>
    <button @click="btnPersistDecrement()">點我Persist-1</button>
  </div>
</template>