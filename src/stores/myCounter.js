import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('myCounter',()=>{
  const count = ref(0)

  function increment(){
    count.value += 1;
  }
  function decrement(){
    count.value --;
  }
  return{count, increment}
})