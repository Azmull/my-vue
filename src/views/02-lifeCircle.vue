<script setup>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from "vue"

onBeforeMount(()=>{
  console.log("掛載前 onBeforeMount")
})
onMounted(()=>{
  console.log("掛載後 onMounted")
})
onBeforeUpdate(()=>{
  console.log("更新前 onBeforeUpdate")
})
onUpdated(()=>{
  console.log("更新後 onUpdated")
})
onBeforeUnmount(()=>{
  console.log("卸載前 onBeforeUnmount")
})
onUnmounted(()=>{
  console.log("卸載後 onUnmounted")
})
onErrorCaptured(()=>{
  console.log("錯誤捕獲 onErrorCaptured")
})
</script>

<template>
  <h2>02-生命周期</h2>
  <h3>請用console打開</h3>

</template>