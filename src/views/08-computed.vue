<script setup>
import { ref, reactive, computed } from 'vue'

// 類別清單
const categories = [
  { id: 'f1', name: '水果' },
  { id: 'f2', name: '蔬菜' },
  { id: 'f3', name: '飲料' },
]

// 商品清單
const items = [
  { id: 1, name: '蘋果', categoryId: 'f1' },
  { id: 2, name: '香蕉', categoryId: 'f1' },
  { id: 3, name: '胡蘿蔔', categoryId: 'f2' },
  { id: 4, name: '青花菜', categoryId: 'f2' },
  { id: 5, name: '可樂', categoryId: 'f3' },
  { id: 6, name: '柳橙汁', categoryId: 'f3' },
]

const selectedCategory = ref('')

const filteredComputed = computed(() => {
  if (selectedCategory.value != '') {
    return items.filter((i) => i.categoryId == selectedCategory.value)
  } else {
    return items //回傳全部項目
    // return [] //回傳空陣列
  }
})
</script>

<template>
  <h2>08-計算屬性</h2>
  <div>
    類別:
    <select v-model="selectedCategory">
      <option value="">全部類別</option>
      <option v-for="item in categories" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    商品:
    <select>
      <option v-for="item in filteredComputed">
        {{ item.id }} {{ item.name }} {{ item.categoryId }}
      </option>
    </select>
  </div>
</template>
