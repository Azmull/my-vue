<script setup>
import { reactive, ref } from 'vue'
import ProductItem from '@/components/Product.vue'

const productName = ref('資展高雄')
const productPrice = ref(123)

const datas = reactive([
  { name: 'apple', price: 10 },
  { name: 'banana', price: 20 },
  { name: 'cherry', price: 30 },
  { name: 'orange', price: 40 },
  { name: 'grape', price: 50 },
])

import ChildItem from '@/components/Child.vue'

function handleAction1(par1, par2) {
  alert('子元件通知' + par1 + par2)
}

function handleAction2(obj) {
  alert('子元件通知2' + obj.name + obj.note)
}

import SlotItem from '@/components/Slot.vue'
</script>
<template>
  <h2>10-元件</h2>
  <div>
    <ProductItem name="vue課程" price="100" note="111"> </ProductItem>
  </div>
  <div>
    <h4>使用變數傳給子元件</h4>
    <ProductItem :name="productName" :price="productPrice"> </ProductItem>
  </div>
  <br />
  <div>
    <h4>使用迴圈傳資料給子元素</h4>
    <div v-for="item in datas">
      <ProductItem :name="item.name" :price="item.price"> </ProductItem>
    </div>
  </div>
  <br />
  <div>
    <h4>子元件通知父元件</h4>
    <!-- <ChildItem @do-action1=""></ChildItem> -->
    <!-- 這邊的handleAction1不能加小括號()，因為子元素有傳參數，如果加()代表是這個.vue檔案有傳參數 -->
    <ChildItem @doAction1="handleAction1" @do-action2="handleAction2"></ChildItem>
  </div>

  <br />

  <div>
    slot插槽
    <SlotItem>
      <template #header>
        <p style="color: green">hello vue</p>
      </template>
      <template #footer>
        <p style="color: red">今天20251224</p>
      </template>
    </SlotItem>
  </div>
</template>
