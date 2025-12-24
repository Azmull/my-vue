<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';
import ProductItem from '@/components/Product.vue'
// https://localhost:7193/api/Test

const responseData = ref('')
const products = ref([])
function btnGet(){
  axios.get('https://localhost:7193/api/Test')
  .then(resp=>{
    console.log(resp)
    responseData.value = resp.data
    products.value = resp.data
  })
  .catch(error=>{
    console.error(error)
  })
}

function btnPost(){
  axios.post('https://localhost:7193/api/Test',
  {
    name:'ispan',
    category:'高雄',
    price:99
  })
  .then(resp=>{
    responseData.value = resp.data
  })
}

function btnPut(id){
  axios.put('https://localhost:7193/api/Test/' + id,
  {
    name: "西瓜超爆甜",
    category: "水果特價中",
    price: 200
  }
  ).then(resp=>{
    responseData.value = resp.data
  })
}

function btnDelete(id){
  axios.delete('https://localhost:7193/api/Test/'+id)
  .then(resp=>{
    responseData.value = resp.data
  })
}

</script>


<template>
  <h2>13-axios</h2>
  <div>
    <button @click="btnGet()">GET</button>
    <button @click="btnPost()">POST</button>
    <button @click="btnPut(3)">PUT</button>
    <button @click="btnDelete(20)">DELETE</button>
  </div>
  <div>
    回傳結果:
    <br>
    {{ responseData }}
  </div>
  <div>
    搭配迴圈&子元件
    <br>
    <ProductItem 
      v-for="item in products"
      :name="item.name"
      :price="item.price"
      >
      </ProductItem>
  </div>
</template>