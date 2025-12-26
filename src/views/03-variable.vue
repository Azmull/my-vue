<script setup>
import { ref, reactive } from 'vue'

// 原始型別(單一型別)適用ref
const message = ref('welcome')
const num = ref(3)
message.value = 123

// 物件類型用reactive
const data = reactive({
  title: 'vue3課程',
  note: '這是一個54564',
})
data.title = '5577567456456123'

const data2 = reactive()
console.log('data2', data2)
const data3 = reactive({})
console.log('data3', data3)
</script>

<template>
  <h2>03-響應式變數</h2>
  <div>
    ref message {{ message }}
    <br />
    ref num數字{{ num }}
  </div>
  <div>
    取得reactive物件
    <br />
    取得title:{{ data.title }}
    <br />
    取得note:{{ data.note }}
  </div>
</template>
