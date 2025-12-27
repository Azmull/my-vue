<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['doAction1', 'doAction2'])
function doAction1() {
  emit('doAction1', '來自子元件的通知', 1)
}
function buttonClick2() {
  emit('doAction2', { name: '子元件通知2', note: '今天12/23' })
}
</script>

<template>
  <p>這是子元件</p>
  <button @click="doAction1()">按鈕1</button>
  <button @click="buttonClick2()">按鈕2</button>
</template>
