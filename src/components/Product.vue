<script setup>
import { defineProps } from 'vue'

const prop = defineProps({
  name: { type: String, required: true },
  price: Number,
})
</script>
<template>
  <div>
    <div>商品名稱: {{ prop.name }}</div>
    <div>商品價格: {{ prop.price }}</div>
  </div>
</template>
