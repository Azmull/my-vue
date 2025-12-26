<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
console.log('keyword參數', route.query.keyword)
console.log('page參數', route.query.page)
console.log('自己從路由打的', route.query.magic)
</script>

<template>
  <h2>01-路由參數傳遞-查詢參數(query)</h2>
</template>
