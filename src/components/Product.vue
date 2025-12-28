<script setup>
import { defineProps } from 'vue'

const prop = defineProps({
  name: { type: String, required: true },
  price: Number,
})
</script>
<template>
  <div>
    <p>商品名稱: {{ prop.name }}</p>
    <p>商品價格: {{ prop.price }}</p>
  </div>
</template>
