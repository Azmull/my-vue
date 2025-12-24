import { defineStore } from "pinia";
import { ref } from "vue";

export const usePersistStore = defineStore('myCounterPersist',()=>{
  const count = ref(0)

  function increment(){
    count.value += 1;
  }
  function decrement(){
    count.value --;
  }
  return{count, increment, decrement}
},
  {persist: true}
)